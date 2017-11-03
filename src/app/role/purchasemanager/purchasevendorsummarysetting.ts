export const PURCHASE_MANAGER_VENDOR_SUMMARY_SETTING = {
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
    vendor: {
      title: '客户名称',
      type: 'string',
    },
    estimatedPaymentRmk: {
      title: '付款备注',
      type: 'string',
    },
    estimatedInvoiceRmk: {
      title: '收发票备注',
      type: 'string',
    },
    landlinePhone: {
      title: '电话',
      type: 'string',
    },
    financeContact: {
      title: '财务联系人',
      type: 'string',
    },
    financePhone: {
      title: '财务联系电话',
      type: 'string',
    },
    payableAmountArg: {
      title: '应付款',
      type: 'string',
    },
    paidAmountArg: {
      title: '已付款',
      type: 'string',
    },
    unpaidAmountArg: {
      title: '未付款',
      type: 'string',
    },
    receivableInvoiceArg: {
      title: '应收发票',
      type: 'string',
    },
    invoiceAmount: {
      title: '已收发票',
      type: 'string',
    },
    uncollectedInvoiceArg: {
      title: '未收发票',
      type: 'string',
    },
  }
};