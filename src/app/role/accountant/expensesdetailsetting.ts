export const ACCOUNTANT_EXPENSES_DETAIL_SETTING = {
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
    orderName: {
      title: '订单',
      type: 'string',
    },
    expensesAmount: {
      title: '费用金额',
      type: 'string',
    },
    expensesUsage: {
      title: '费用明细',
      type: 'string',
    },
    remarks: {
      title: '备注',
      type: 'string',
    },
  }
};