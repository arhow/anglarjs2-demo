export const ACCOUNTANT_MENU = [
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
        path: 'journal',
        data: {
          menu: {
            title: 'general.menu.journal',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        }
      },
      {
        path: 'expenses',
        data: {
          menu: {
            title: 'general.menu.expenses',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
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