#!/bin/bash

# 🚀 PINTARNYA - RUN EVERYTHING

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

BASE_DIR="/home/lutfi/Dokumen/lutfi/dani/v3"

echo -e "${BLUE}"
echo "╔═════════════════════════════════════════╗"
echo "║   🚀 PINTARNYA - SIMPLE START SCRIPT  ║"
echo "╚═════════════════════════════════════════╝"
echo -e "${NC}\n"

# Check prerequisites
echo -e "${YELLOW}📋 Checking prerequisites...${NC}"

if ! command -v php &> /dev/null; then
    echo -e "${RED}❌ PHP not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ PHP found: $(php -v | head -1)${NC}"

if ! command -v composer &> /dev/null; then
    echo -e "${RED}❌ Composer not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Composer installed${NC}"

if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js found: $(node -v)${NC}"

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ NPM not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ NPM found: $(npm -v)${NC}\n"

# Ask user what to run
echo -e "${BLUE}What would you like to do?${NC}"
echo "1) Run Backend only"
echo "2) Run Frontend only"
echo "3) Run Both (Backend + Frontend)"
echo "4) Setup only (install dependencies)"
echo -e ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo -e "\n${YELLOW}🚀 Starting Backend...${NC}\n"
        cd "$BASE_DIR/backend"
        
        if [ ! -f .env ]; then
            cp .env.example .env
            echo -e "${GREEN}✅ .env created${NC}"
        fi
        
        if [ ! -d vendor ]; then
            echo -e "${YELLOW}📦 Installing dependencies...${NC}"
            composer install
        fi
        
        echo -e "\n${GREEN}✅ Backend ready!${NC}"
        echo -e "${BLUE}Starting server on http://localhost:8000${NC}\n"
        php -S localhost:8000 -t public
        ;;
    2)
        echo -e "\n${YELLOW}🚀 Starting Frontend...${NC}\n"
        cd "$BASE_DIR/frontend"
        
        if [ ! -d node_modules ]; then
            echo -e "${YELLOW}📦 Installing dependencies...${NC}"
            npm install
        fi
        
        echo -e "\n${GREEN}✅ Frontend ready!${NC}"
        echo -e "${BLUE}Starting server on default Vite port (usually http://localhost:5173)${NC}\n"
        npm run dev
        ;;
    3)
        echo -e "\n${YELLOW}To run both, open 2 terminals:${NC}\n"
        echo -e "${GREEN}Terminal 1 (Backend):${NC}"
        echo "cd $BASE_DIR/backend"
        echo "php -S localhost:8000 -t public"
        echo ""
        echo -e "${GREEN}Terminal 2 (Frontend):${NC}"
        echo "cd $BASE_DIR/frontend"
        echo "npm run dev"
        echo ""
        echo -e "${BLUE}Access website at the Vite URL shown in terminal (usually http://localhost:5173)${NC}\n"
        ;;
    4)
        echo -e "\n${YELLOW}Installing dependencies...${NC}\n"
        
        echo -e "${YELLOW}Backend:${NC}"
        cd "$BASE_DIR/backend"
        composer install
        
        echo -e "\n${YELLOW}Frontend:${NC}"
        cd "$BASE_DIR/frontend"
        npm install
        
        echo -e "\n${GREEN}✅ All dependencies installed!${NC}"
        ;;
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac
