import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import { APP_ROUTES } from '../utils/routeHelpers.js';
import '../styles/workspace.css';

const ADMIN_SECTION_OPTIONS = [
  { value: 'monitoring', label: 'Monitoring' },
  { value: 'pelamar', label: 'Pelamar' },
  { value: 'recruiter', label: 'Recruiter' },
  { value: 'lowongan', label: 'Lowongan' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'security', label: 'Keamanan' },
  { value: 'communication', label: 'Notifikasi' },
  { value: 'workflow', label: 'Workflow' },
  { value: 'integrations', label: 'Integrasi' },
  { value: 'moderation', label: 'Moderasi' },
];

const resolveAdminSectionFromHash = (hash) => {
  if (hash === '#pelamar') {
    return 'pelamar';
  }

  if (hash === '#moderasi' || hash === '#moderation') {
    return 'moderation';
  }

  const normalizedHash = hash.replace(/^#/, '');

  if (ADMIN_SECTION_OPTIONS.some((section) => section.value === normalizedHash)) {
    return normalizedHash;
  }

  return 'monitoring';
};

const getAdminSectionHash = (section) => (section === 'moderation' ? 'moderasi' : section);

const getAdminSectionRoute = (section) =>
  section === 'monitoring'
    ? APP_ROUTES.adminDashboard
    : `${APP_ROUTES.adminDashboard}#${getAdminSectionHash(section)}`;

const ADMIN_SUMMARY_CARDS = [
  { label: 'Pelamar Baru', value: '128', detail: '24 jam terakhir' },
  { label: 'Diproses', value: '364', detail: 'Tahap screening sampai offering' },
  { label: 'Diterima', value: '52', detail: 'Periode minggu ini' },
  { label: 'Ditolak', value: '37', detail: 'Periode minggu ini' },
];

const ADMIN_PERFORMANCE_BARS = [
  { label: 'Harian', value: 72, summary: 'Respon recruiter rata-rata 5 jam' },
  { label: 'Mingguan', value: 81, summary: 'Time to hire stabil di 9 hari' },
  { label: 'Bulanan', value: 88, summary: 'Hiring success rate terus naik' },
];

const ADMIN_ACTIVITY_ALERTS = [
  'Lonjakan 31% pelamar baru pada lowongan Store Supervisor wilayah Jabodetabek.',
  '7 lowongan menunggu approval admin sebelum tayang.',
  '2 perusahaan masuk daftar monitoring karena response rate turun di bawah SLA.',
];

const ADMIN_CANDIDATE_DATABASE = [
  {
    name: 'Aulia Pratama',
    skill: 'QC, HACCP, Excel',
    location: 'Bekasi',
    status: 'Interview',
    flag: 'Potensial',
  },
  {
    name: 'Nadia Rahma',
    skill: 'Admin, Data Entry, SAP',
    location: 'Bogor',
    status: 'Screening',
    flag: 'Perlu review',
  },
  {
    name: 'Rifky Saputra',
    skill: 'Sales, Negotiation, CRM',
    location: 'Bandung',
    status: 'Offering',
    flag: 'Whitelist',
  },
];

const ADMIN_CANDIDATE_HISTORY = [
  'Aulia Pratama melamar ke 4 lowongan, 1 interview dijadwalkan, feedback recruiter lengkap.',
  'Nadia Rahma baru melengkapi CV, sertifikat, dan ringkasan profil pada hari ini.',
  'Rifky Saputra dipindahkan dari Screening ke Offering setelah evaluasi hiring manager.',
];

const ADMIN_RECRUITER_QUEUE = [
  {
    company: 'PT Nusantara Retail',
    status: 'Menunggu verifikasi legalitas',
    owner: 'HR Manager',
  },
  {
    company: 'Mixue Area West',
    status: 'Whitelist aktif',
    owner: 'Recruitment Lead',
  },
  {
    company: 'DKriuk Fried Chicken',
    status: 'Dalam pemantauan response rate',
    owner: 'Owner Operasional',
  },
];

const ADMIN_JOB_OVERVIEW = [
  { title: 'Lowongan Aktif', value: '219', note: '31 akan auto-expiry minggu ini' },
  { title: 'Lowongan Nonaktif', value: '74', note: 'Termasuk draft, closed, rejected' },
  { title: 'Total Views', value: '84.120', note: 'Semua lowongan aktif' },
  { title: 'Conversion Rate', value: '12.6%', note: 'View ke aplikasi' },
];

const ADMIN_ANALYTICS_SNAPSHOT = [
  { label: 'Time to Hire', value: '9.4 hari' },
  { label: 'Cost per Hire', value: 'Rp 1,28 jt' },
  { label: 'Skill Paling Banyak', value: 'Excel, Sales, QC' },
  { label: 'Lokasi Dominan', value: 'Jakarta, Bekasi, Bogor' },
  { label: 'Response Rate Recruiter', value: '84%' },
  { label: 'Hiring Sukses', value: '67%' },
];

const ADMIN_AUDIT_LOGS = [
  'Super admin menyetujui lowongan Warehouse Supervisor milik PT Nusantara Retail.',
  'Admin support mengubah status kandidat Nadia Rahma ke Screening.',
  'Sistem menandai aktivitas login mencurigakan dari akun recruiter baru.',
];

const ADMIN_EMAIL_TEMPLATES = [
  'Undangan interview',
  'Penolakan kandidat',
  'Offering letter',
  'Permintaan lengkapi dokumen',
];

const ADMIN_SLA_TRACKING = [
  { label: 'Respons awal recruiter', value: 84 },
  { label: 'Approval lowongan admin', value: 91 },
  { label: 'Follow-up kandidat shortlisted', value: 76 },
];

const ADMIN_INTEGRATIONS = [
  { name: 'Job board eksternal', status: 'Siap dihubungkan', description: 'Distribusi lowongan lintas kanal.' },
  { name: 'API perusahaan besar', status: 'Roadmap', description: 'Sinkronisasi ATS dan rekrutmen skala besar.' },
  { name: 'Kalender interview', status: 'Prototype', description: 'Penjadwalan interview lintas tim.' },
  { name: 'Tools HR / ATS', status: 'Discovery', description: 'Integrasi proses hiring dan onboarding.' },
];

const ADMIN_MODERATION_CASES = [
  {
    title: 'Review lowongan mencurigakan',
    detail: 'Validasi deskripsi kerja dan struktur salary untuk menghindari scam.',
  },
  {
    title: 'Report dari pelamar',
    detail: 'Keluhan recruiter lambat merespons dan jadwal interview tidak jelas.',
  },
  {
    title: 'Quality score recruiter',
    detail: 'Nilai berdasarkan response rate, hiring success, dan feedback kandidat.',
  },
];

const AdminDashboardPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState(resolveAdminSectionFromHash(location.hash));

  useEffect(() => {
    setActiveSection(resolveAdminSectionFromHash(location.hash));
  }, [location.hash]);

  const totalMonitoringCount = useMemo(
    () => ADMIN_SUMMARY_CARDS.reduce((sum, item) => sum + Number(item.value), 0),
    []
  );

  const handleSectionChange = (section) => {
    setActiveSection(section);
    navigate(getAdminSectionRoute(section));
  };

  return (
    <div className="workspace-page workspace-page-admin">
      <header className="workspace-topbar">
        <div className="workspace-shell workspace-topbar-shell">
          <Link
            to={APP_ROUTES.landing}
            className="workspace-brand"
            aria-label="Website awal KerjaNusa"
          >
            <img src="/kerjanusa-logo-cutout.png" alt="KerjaNusa Recruitment Platform" />
          </Link>

          <nav className="workspace-nav workspace-nav-wide" aria-label="Navigasi admin">
            {ADMIN_SECTION_OPTIONS.map((section) => (
              <button
                key={section.value}
                type="button"
                className={`workspace-nav-button${
                  activeSection === section.value ? ' active' : ''
                }`}
                onClick={() => handleSectionChange(section.value)}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="workspace-actions">
            <div className="workspace-user-chip">
              <strong>{user.name || 'Admin KerjaNusa'}</strong>
              <span>Admin Internal</span>
            </div>
            <button type="button" className="btn btn-secondary workspace-logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="workspace-shell workspace-main">
        <section className="workspace-overview-grid" data-reveal>
          <article className="workspace-hero-card">
            <span className="workspace-kicker">Login Admin KerjaNusa</span>
            <h1>Dashboard Monitoring Utama</h1>
            <p>
              Pusat kontrol untuk memantau pelamar, recruiter, perusahaan eksternal, lowongan,
              notifikasi penting, dan kualitas keseluruhan platform.
            </p>
            <div className="workspace-action-row">
              <button type="button" className="btn btn-primary">
                Export Data Excel / PDF
              </button>
              <Link to="/platform" className="btn btn-outline">
                Lihat Profil KerjaNusa
              </Link>
            </div>
          </article>

          <div className="workspace-kpi-grid">
            <article className="workspace-kpi-card">
              <span>Total ringkasan</span>
              <strong>{totalMonitoringCount}</strong>
              <small>Gabungan pelamar baru, diproses, diterima, dan ditolak</small>
            </article>
            <article className="workspace-kpi-card">
              <span>Recruiter aktif</span>
              <strong>146</strong>
              <small>Termasuk HR, hiring manager, dan admin perusahaan</small>
            </article>
            <article className="workspace-kpi-card">
              <span>Approval menunggu</span>
              <strong>7</strong>
              <small>Lowongan kerja sebelum tayang</small>
            </article>
            <article className="workspace-kpi-card">
              <span>Aktivitas kritis</span>
              <strong>3</strong>
              <small>Lonjakan pelamar atau indikasi lowongan bermasalah</small>
            </article>
          </div>
        </section>

        {activeSection === 'monitoring' && (
          <section className="workspace-section-stack" data-reveal>
            <article className="workspace-panel">
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Ringkasan Jumlah</span>
                  <h2>Pelamar, lowongan, dan recruiter aktif</h2>
                </div>
                <p>
                  Melihat pergerakan kandidat baru, status proses rekrutmen, lowongan aktif versus
                  nonaktif, dan perusahaan yang paling aktif menggunakan platform.
                </p>
              </div>

              <div className="workspace-kpi-grid">
                {ADMIN_SUMMARY_CARDS.map((item) => (
                  <article key={item.label} className="workspace-kpi-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <small>{item.detail}</small>
                  </article>
                ))}
              </div>
            </article>

            <section className="workspace-two-column-grid">
              <article className="workspace-panel" data-reveal data-reveal-delay="60ms">
                <div className="workspace-panel-heading">
                  <div>
                    <span className="workspace-section-label">Performa Rekrutmen</span>
                    <h2>Grafik harian, mingguan, bulanan</h2>
                  </div>
                  <p>
                    Visual ringkas untuk time to hire, response rate, dan kecepatan recruiter
                    merespons pelamar.
                  </p>
                </div>

                <div className="workspace-progress-list">
                  {ADMIN_PERFORMANCE_BARS.map((bar) => (
                    <article key={bar.label} className="workspace-progress-card">
                      <div className="workspace-progress-head">
                        <strong>{bar.label}</strong>
                        <span>{bar.value}%</span>
                      </div>
                      <div className="workspace-progress-track">
                        <span style={{ width: `${bar.value}%` }} />
                      </div>
                      <p>{bar.summary}</p>
                    </article>
                  ))}
                </div>
              </article>

              <article className="workspace-panel" data-reveal data-reveal-delay="90ms">
                <div className="workspace-panel-heading">
                  <div>
                    <span className="workspace-section-label">Notifikasi Penting</span>
                    <h2>Aktivitas yang butuh perhatian admin</h2>
                  </div>
                  <p>
                    Digunakan untuk mendeteksi lonjakan pelamar, lowongan bermasalah, dan akun
                    recruiter yang perlu dipantau.
                  </p>
                </div>

                <div className="workspace-card-list">
                  {ADMIN_ACTIVITY_ALERTS.map((alert) => (
                    <article key={alert} className="workspace-subcard">
                      <p>{alert}</p>
                    </article>
                  ))}
                </div>
              </article>
            </section>
          </section>
        )}

        {activeSection === 'pelamar' && (
          <section id="pelamar" className="workspace-section-stack">
            <section className="workspace-two-column-grid">
              <article className="workspace-panel" data-reveal>
                <div className="workspace-panel-heading">
                  <div>
                    <span className="workspace-section-label">Database Pelamar</span>
                    <h2>Profil lengkap dan tracking status</h2>
                  </div>
                  <p>
                    Menggabungkan profil lengkap, filter skill/lokasi/pengalaman/pendidikan, serta
                    status Applied sampai Hired atau Rejected.
                  </p>
                </div>

                <div className="workspace-table">
                  <div className="workspace-table-row workspace-table-row-head">
                    <span>Nama</span>
                    <span>Skill</span>
                    <span>Lokasi</span>
                    <span>Status</span>
                    <span>Flag</span>
                  </div>
                  {ADMIN_CANDIDATE_DATABASE.map((candidate) => (
                    <div key={candidate.name} className="workspace-table-row">
                      <span>{candidate.name}</span>
                      <span>{candidate.skill}</span>
                      <span>{candidate.location}</span>
                      <span>{candidate.status}</span>
                      <span>{candidate.flag}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="workspace-panel" data-reveal data-reveal-delay="70ms">
                <div className="workspace-panel-heading">
                  <div>
                    <span className="workspace-section-label">Riwayat Aktivitas</span>
                    <h2>Melamar ke mana saja dan feedback recruiter</h2>
                  </div>
                  <p>
                    Riwayat ini memudahkan admin memonitor perpindahan tahap kandidat dan
                    memastikan feedback recruiter tetap terjaga.
                  </p>
                </div>

                <div className="workspace-card-list">
                  {ADMIN_CANDIDATE_HISTORY.map((item) => (
                    <article key={item} className="workspace-subcard">
                      <p>{item}</p>
                    </article>
                  ))}
                </div>
              </article>
            </section>
          </section>
        )}

        {activeSection === 'recruiter' && (
          <section className="workspace-two-column-grid">
            <article className="workspace-panel" data-reveal>
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Manajemen Recruiter & Perusahaan</span>
                  <h2>Verifikasi, role-based access, dan approval</h2>
                </div>
                <p>
                  Admin dapat memvalidasi legalitas, memonitor aktivitas recruiter, mengatur role,
                  dan mengelola whitelist atau blacklist perusahaan.
                </p>
              </div>

              <div className="workspace-card-list">
                {ADMIN_RECRUITER_QUEUE.map((item) => (
                  <article key={item.company} className="workspace-subcard">
                    <div className="workspace-subcard-heading">
                      <strong>{item.company}</strong>
                      <span>{item.owner}</span>
                    </div>
                    <p>{item.status}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="workspace-panel" data-reveal data-reveal-delay="70ms">
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Kontrol Akses</span>
                  <h2>Role dan aktivitas</h2>
                </div>
                <p>
                  Role utama yang diminta dokumen: HR, hiring manager, admin perusahaan, admin
                  internal, dan support.
                </p>
              </div>

              <div className="workspace-chip-wrap">
                <span className="workspace-chip">HR</span>
                <span className="workspace-chip">Hiring Manager</span>
                <span className="workspace-chip">Admin Perusahaan</span>
                <span className="workspace-chip">Admin Internal</span>
                <span className="workspace-chip">Support</span>
              </div>
            </article>
          </section>
        )}

        {activeSection === 'lowongan' && (
          <section className="workspace-section-stack">
            <article className="workspace-panel" data-reveal>
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Manajemen Lowongan Kerja</span>
                  <h2>CRUD, moderasi, auto-expiry, dan insight performa</h2>
                </div>
                <p>
                  Lowongan dapat diatur end-to-end sambil dicek kualitas kontennya untuk
                  menghindari penipuan atau deskripsi kerja yang tidak valid.
                </p>
              </div>

              <div className="workspace-kpi-grid">
                {ADMIN_JOB_OVERVIEW.map((item) => (
                  <article key={item.title} className="workspace-kpi-card">
                    <span>{item.title}</span>
                    <strong>{item.value}</strong>
                    <small>{item.note}</small>
                  </article>
                ))}
              </div>
            </article>
          </section>
        )}

        {activeSection === 'analytics' && (
          <section className="workspace-panel" data-reveal>
            <div className="workspace-panel-heading">
              <div>
                <span className="workspace-section-label">Analytics & Reporting</span>
                <h2>Insight performa rekrutmen dan perusahaan</h2>
              </div>
              <p>
                Fokus pada time to hire, cost per hire, skill paling banyak, lokasi dominan, dan
                tingkat hiring sukses untuk kebutuhan export data Excel atau PDF.
              </p>
            </div>

            <div className="workspace-kpi-grid">
              {ADMIN_ANALYTICS_SNAPSHOT.map((item) => (
                <article key={item.label} className="workspace-kpi-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'security' && (
          <section className="workspace-two-column-grid">
            <article className="workspace-panel" data-reveal>
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Sistem Keamanan & Kepatuhan</span>
                  <h2>Role, permission, audit log, dan privacy</h2>
                </div>
                <p>
                  Admin memerlukan visibilitas terhadap perubahan data, approval lowongan, dan
                  indikasi aktivitas mencurigakan.
                </p>
              </div>

              <div className="workspace-chip-wrap">
                <span className="workspace-chip">Super Admin</span>
                <span className="workspace-chip">Admin</span>
                <span className="workspace-chip">Support</span>
                <span className="workspace-chip">Privacy Compliance</span>
                <span className="workspace-chip">Activity Detection</span>
              </div>
            </article>

            <article className="workspace-panel" data-reveal data-reveal-delay="70ms">
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Audit Log</span>
                  <h2>Siapa melakukan apa</h2>
                </div>
                <p>Ringkasan ini membantu admin menelusuri edit data, approval, dan perubahan status.</p>
              </div>

              <div className="workspace-card-list">
                {ADMIN_AUDIT_LOGS.map((item) => (
                  <article key={item} className="workspace-subcard">
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </article>
          </section>
        )}

        {activeSection === 'communication' && (
          <section className="workspace-two-column-grid">
            <article className="workspace-panel" data-reveal>
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Komunikasi & Notifikasi</span>
                  <h2>Notifikasi internal dan template email otomatis</h2>
                </div>
                <p>
                  Mendukung sistem pesan antara recruiter dan pelamar yang dapat dimonitor admin
                  serta template undangan interview, penolakan, atau offering.
                </p>
              </div>

              <div className="workspace-card-list">
                {ADMIN_EMAIL_TEMPLATES.map((template) => (
                  <article key={template} className="workspace-subcard">
                    <p>{template}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="workspace-panel" data-reveal data-reveal-delay="70ms">
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Monitoring Pesan</span>
                  <h2>Komunikasi recruiter dan kandidat</h2>
                </div>
                <p>
                  Untuk kasus tertentu, admin dapat meninjau percakapan yang dilaporkan atau yang
                  membutuhkan tindak lanjut moderasi.
                </p>
              </div>

              <div className="workspace-subcard">
                <p>
                  Status monitor saat ini: 4 percakapan flagged, 1 undangan interview terjadwal,
                  2 offering letter menunggu konfirmasi kandidat.
                </p>
              </div>
            </article>
          </section>
        )}

        {activeSection === 'workflow' && (
          <section className="workspace-two-column-grid">
            <article className="workspace-panel" data-reveal>
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">Workflow & Automasi</span>
                  <h2>Auto-screening, pipeline otomatis, dan follow-up</h2>
                </div>
                <p>
                  Area ini menampung auto-screening CV berbasis keyword, reminder recruiter, dan
                  pipeline kandidat dari screening sampai hired.
                </p>
              </div>

              <div className="workspace-card-list">
                <article className="workspace-subcard">
                  <p>Auto-screening CV: keyword skill, pengalaman, pendidikan, dan lokasi.</p>
                </article>
                <article className="workspace-subcard">
                  <p>Pipeline kandidat: Applied → Screening → Interview → Offering → Hired.</p>
                </article>
                <article className="workspace-subcard">
                  <p>Reminder follow-up recruiter untuk kandidat shortlisted yang belum dihubungi.</p>
                </article>
              </div>
            </article>

            <article className="workspace-panel" data-reveal data-reveal-delay="70ms">
              <div className="workspace-panel-heading">
                <div>
                  <span className="workspace-section-label">SLA Monitoring</span>
                  <h2>Kecepatan respon recruiter</h2>
                </div>
                <p>Menunjukkan seberapa cepat recruiter merespons kandidat di setiap titik proses.</p>
              </div>

              <div className="workspace-progress-list">
                {ADMIN_SLA_TRACKING.map((item) => (
                  <article key={item.label} className="workspace-progress-card">
                    <div className="workspace-progress-head">
                      <strong>{item.label}</strong>
                      <span>{item.value}%</span>
                    </div>
                    <div className="workspace-progress-track">
                      <span style={{ width: `${item.value}%` }} />
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </section>
        )}

        {activeSection === 'integrations' && (
          <section className="workspace-panel" data-reveal>
            <div className="workspace-panel-heading">
              <div>
                <span className="workspace-section-label">Integrasi</span>
                <h2>Job board, API perusahaan besar, kalender, dan tools HR</h2>
              </div>
              <p>
                Daftar integrasi yang diminta client berikut status kesiapan atau tahap
                pengembangannya.
              </p>
            </div>

            <div className="workspace-card-list workspace-card-list-grid">
              {ADMIN_INTEGRATIONS.map((item) => (
                <article key={item.name} className="workspace-subcard">
                  <div className="workspace-subcard-heading">
                    <strong>{item.name}</strong>
                    <span>{item.status}</span>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'moderation' && (
          <section id="moderasi" className="workspace-panel" data-reveal>
            <div className="workspace-panel-heading">
              <div>
                <span className="workspace-section-label">Moderasi & Quality Control</span>
                <h2>Report pelamar, review lowongan, dan quality score perusahaan</h2>
              </div>
              <p>
                Fokus pada validasi konten lowongan, review lowongan mencurigakan, dan penilaian
                kualitas recruiter atau perusahaan berdasarkan performa mereka.
              </p>
            </div>

            <div className="workspace-card-list">
              {ADMIN_MODERATION_CASES.map((item) => (
                <article key={item.title} className="workspace-subcard">
                  <div className="workspace-subcard-heading">
                    <strong>{item.title}</strong>
                  </div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboardPage;
