
export const MANAGER_SALER_CUSTOMER_RLS_MANAGEMENT_SETTING = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: false,
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: false,
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: false
    },
    actions: {
      add: false,
      delete: false,
      edit: false,
      position: 'left',
      columnTitle: '操作',
    },
    noDataMessage: "没有数据",
    columns: {
      name: {
        title: '姓名',
        type: 'string',
      },
      sex: {
        title: '性别',
        type: 'string',
      },
      landlinePhone: {
        title: '座机',
        type: 'string',
      },
      mobilePhone: {
        title: '手机',
        type: 'string',
      },
      address: {
        title: '地址',
        type: 'string',
      },
      email: {
        title: '邮件',
        type: 'string',
      },
    }
  };