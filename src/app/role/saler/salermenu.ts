export const SALER_MENU = [
    {
        path: 'pages',
        children: [
          {
            path: 'dashboard',
            data: {
              menu: {
                title: 'general.menu.dashboard',
                icon: 'ion-android-home',
                selected: false,
                expanded: false,
                order: 0,
              }
            }
          },
          {
            path: 'sales',
            data: {
              menu: {
                title: 'general.menu.sales',
                icon: 'ion-edit',
                selected: false,
                expanded: false,
                order: 100,
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.logout',
                url: '/',
                icon: 'ion-android-exit',
                order: 800,
              }
            }
          }
        ]
      }
];