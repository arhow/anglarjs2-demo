export const MANAGER_SALER_SUMMARY_SETTING = {
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
      saler: {
        title: '销售员',
        type: 'string',
      },
      mobilePhone: {
        title: '移动电话',
        type: 'string',
      },
      payableInvoice: {
        title: '应开发票总金额',
        type: 'string',
      },
      paidInvoice: {
        title: '已开发票总金额',
        type: 'string',
      },
      unpaidInvoice: {
        title: '剩余未开发票总计',
        type: 'string',
      },
      receivableAmount: {
        title: '应收账款总金额',
        type: 'string',
      },
      receivedAmount: {
        title: '已收账款总金额',
        type: 'string',
      },
      uncollectedAmount: {
        title: '欠款总金额',
        type: 'string',
      },
    }
  };