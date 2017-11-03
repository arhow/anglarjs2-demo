export const MANAGER_DASHBOARD_PURCHASE_SUMMARY_SETTING = {
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
      confirmDelete: false,
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
      roleName: {
        title: '角色',
        type: 'string',
      },
      payableAmount: {
        title: '应付款',
        type: 'string',
      },
      paidAmount: {
        title: '已付款',
        type: 'string',
      },
      unpaidAmount: {
        title: '未付款',
        type: 'string',
      },
      receivableInvoice: {
        title: '应收发票',
        type: 'string',
      },
      receivedInvoice: {
        title: '已收发票',
        type: 'string',
      },
      uncollectedInvoice: {
        title: '未收发票',
        type: 'string',
      },
    }
  };