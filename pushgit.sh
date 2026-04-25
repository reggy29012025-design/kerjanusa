#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

REPO_URL="${GITHUB_REPO_URL:-https://github.com/reggy29012025-design/kerjanusa.git}"
DEFAULT_BRANCH="${GIT_DEFAULT_BRANCH:-main}"
BACKUP_DIR="$SCRIPT_DIR/backupdeploy"
TIMESTAMP="$(date '+%Y%m%d-%H%M%S')"
BACKUP_FILE="$BACKUP_DIR/backup-$TIMESTAMP.zip"
COMMIT_MESSAGE="${*:-Backup $TIMESTAMP dan push ke GitHub}"

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: command '$1' tidak ditemukan."
    exit 1
  fi
}

require_command git
require_command zip

mkdir -p "$BACKUP_DIR"

echo "Membuat backup ZIP: $BACKUP_FILE"
zip -rq "$BACKUP_FILE" . -x "backupdeploy/*" ".git/*" ".git"

if [[ -z "$(git config --global user.name || true)" ]] || [[ -z "$(git config --global user.email || true)" ]]; then
  cat <<'EOF'
Error: Git identity belum di-set.
Jalankan dulu:
  git config --global user.name "Nama Anda"
  git config --global user.email "email@anda.com"
EOF
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Inisialisasi repository Git..."
  git init
fi

if git remote get-url origin >/dev/null 2>&1; then
  CURRENT_REMOTE="$(git remote get-url origin)"
  if [[ "$CURRENT_REMOTE" != "$REPO_URL" ]]; then
    echo "Mengganti remote origin ke: $REPO_URL"
    git remote set-url origin "$REPO_URL"
  fi
else
  echo "Menambahkan remote origin: $REPO_URL"
  git remote add origin "$REPO_URL"
fi

git branch -M "$DEFAULT_BRANCH"
git add -A

if git diff --cached --quiet; then
  echo "Tidak ada perubahan untuk di-commit."
else
  echo "Membuat commit: $COMMIT_MESSAGE"
  git commit -m "$COMMIT_MESSAGE"
fi

if [[ "${SKIP_PUSH:-0}" == "1" ]]; then
  echo "SKIP_PUSH=1, push ke GitHub dilewati."
  echo "Backup tersimpan di: $BACKUP_FILE"
  exit 0
fi

echo "Push ke branch '$DEFAULT_BRANCH'..."
git push -u origin "$DEFAULT_BRANCH"

echo "Selesai."
echo "Backup tersimpan di: $BACKUP_FILE"
