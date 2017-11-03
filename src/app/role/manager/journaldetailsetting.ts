export const MANAGER_JOURNAL_DETAIL_SETTING = {
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