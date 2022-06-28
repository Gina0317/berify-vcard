const routes = {
  landing: '/',
  signin: '/signIn',
  dashboard: {
    root: '/dashboard',
    myCards: {
      root: (id: string) => '/dashboard/myCards',
      basicInfo: (id: string) => '/dashboard/myCards' + id + '/basicInfo',
      contactInfo: (id: string) => '/dashboard/myCards' + id + 'contactInfo',
      socialProfiles: (id: string) => '/dashboard/myCards' + id + 'socialProfiles',
    },
  }
};

export default routes;