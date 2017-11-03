export const PURCHASE_MANAGER_MENU = [
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
          path: 'purchase',
          data: {
            menu: {
              title: 'general.menu.purchase',
              icon: 'ion-gear-a',
              selected: false,
              expanded: false,
              order: 250,
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