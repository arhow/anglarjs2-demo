export const MANAGER_EXPENSES_SALER_SUMMARY_SETTING = {
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
      purchaseAmount: {
        title: '货款金额',
        type: 'string',
      },
      expensesAmount: {
        title: '费用金额',
        type: 'string',
      },
    }
  };