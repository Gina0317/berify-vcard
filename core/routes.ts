const routes = {
  landing: '/',
  signin: '/signIn',
  dashboard: {
    root: '/dashboard',
    myCards: '/dashboard/myCards',
    cardInfo: {
      root: '/dashboard/cardInfo',
      basicInfo: (id: string) => '/dashboard/cardInfo/' + id + '/basicInfo',
      contactInfo: (id: string) => '/dashboard/cardInfo/' + id + '/contactInfo',
      socialProfiles: (id: string) => '/dashboard/cardInfo/' + id + '/socialProfiles',
    },
  },
  vCard: '/vard',
};

export default routes;