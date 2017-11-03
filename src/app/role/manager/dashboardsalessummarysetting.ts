export const MANAGER_DASHBOARD_SALES_SUMMARY_SETTING = {
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
      receivableAmount: {
        title: '应收款',
        type: 'string',
      },
      receivedAmount: {
        title: '已收款',
        type: 'string',
      },
      uncollectedAmount: {
        title: '未收款',
        type: 'string',
      },
      payableInvoice: {
        title: '应开票',
        type: 'string',
      },
      paidInvoice: {
        title: '已开票',
        type: 'string',
      },
      unpaidInvoice: {
        title: '未开票',
        type: 'string',
      },
    }
  };