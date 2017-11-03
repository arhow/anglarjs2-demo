export const ACCOUNTANT_JOURNAL_SUMMARY_SETTING = {
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
    bankName: {
      title: '银行',
      type: 'string',
    },
    bankAccount: {
      title: '帐号',
      type: 'string',
    },
    outgoing: {
      title: '支出',
      type: 'string',
    },
    income: {
      title: '收入',
      type: 'string',
    },
    balance: {
      title: '余额',
      type: 'string',
    },
  }
};