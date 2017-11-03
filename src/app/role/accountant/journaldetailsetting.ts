export const ACCOUNTANT_JOURNAL_DETAIL_SETTING = {
  add: {
    addButtonContent: '<i class="ion-ios-plus-outline"></i>',
    createButtonContent: '<i class="ion-checkmark"></i>',
    cancelButtonContent: '<i class="ion-close"></i>',
    confirmCreate: true,
  },
  edit: {
    editButtonContent: '<i class="ion-edit"></i>',
    saveButtonContent: '<i class="ion-checkmark"></i>',
    cancelButtonContent: '<i class="ion-close"></i>',
    confirmSave: true,
  },
  delete: {
    deleteButtonContent: '<i class="ion-trash-a"></i>',
    confirmDelete: true,
  },
  actions: {
    add: true,
    delete: true,
    edit: true,
    position: 'left',
    columnTitle: '操作',
  },
  noDataMessage: "没有数据",
  columns: {
    journalDate: {
      title: '日期',
      type: 'string',
    },
    salerNameRmk: {
      title: '销售员',
      type: 'string',
    },
    journalUsage: {
      title: '用途',
      type: 'string',
    },
    income: {
      title: '收入',
      type: 'string',
    },
    outgoing: {
      title: '支出',
      type: 'string',
    },
    remark: {
      title: '备注',
      type: 'string',
    },
  }
};