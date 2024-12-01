const routes = {
  login: '/auth/login',
  signUp() {
    return this.login + '/signup';
  },
  resetPassword() {
    return this.login + '/reset-password';
  },
  dashboard: '/',
  recommendations: '/recommendations',
  recommendationsArchive() {
    return this.recommendations + '/archive';
  },
  policies: '/policies',
  events: '/events',
  waivers: '/waivers',
};

export default routes;
