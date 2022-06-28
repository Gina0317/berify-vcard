const routes = {
  landing: '/',
  signin: '/signIn',
  dashboard: {
    root: '/dashboard',
    myCard: {
      root: (id: string) => '/dashboard/myCard',
      basicInfo: (id: string) => '/dashboard/myCard' + id + '/basicInfo',
      contactInfo: (id: string) => '/dashboard/myCard' + id + 'contactInfo',
      socialProfiles: (id: string) => '/dashboard/myCard' + id + 'socialProfiles',
    },
  }
};

export default routes;