export const APP_ROUTES = {
  home: '/',
  landing: '/dashboard-awal',
  about: '/about',
  platform: '/platform',
  jobs: '/jobs',
  login: '/login',
  forgotPassword: '/forgot-password',
  register: '/register',
  recruiterDashboard: '/recruiter',
  recruiterCreateJob: '/recruiter/jobs/create',
  candidateDashboard: '/candidate',
  adminDashboard: '/admin',
};

const ROLE_HOME_ROUTES = {
  recruiter: APP_ROUTES.recruiterDashboard,
  candidate: APP_ROUTES.candidateDashboard,
  internal: APP_ROUTES.adminDashboard,
};

const ROLE_LOGIN_ROUTES = {
  recruiter: `${APP_ROUTES.login}?role=recruiter`,
  candidate: `${APP_ROUTES.login}?role=candidate`,
  internal: `${APP_ROUTES.login}?role=internal`,
};

export const getDefaultRouteForRole = (role) => ROLE_HOME_ROUTES[role] || APP_ROUTES.home;

export const getLoginRouteForRole = (role) => ROLE_LOGIN_ROUTES[role] || APP_ROUTES.login;
