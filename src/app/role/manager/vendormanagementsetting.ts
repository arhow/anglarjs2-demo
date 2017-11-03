
export const MANAGER_VENDOR_MANAGEMENT_SETTING = {
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
      confirmDelete: true
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
      companyName: {
        title: '公司名称',
        type: 'string',
      },
      estimatedPaymentRmk: {
        title: '付款备注',
        type: 'string',
      },
      estimatedInvoiceRmk: {
        title: '发票备注',
        type: 'string',
      },
      landlinePhone: {
        title: '座机',
        type: 'string',
      },
      address: {
        title: '地址',
        type: 'string',
      },
      financeContact: {
        title: '财务联系人',
        type: 'string',
      },
      financePhone: {
        title: '财务联系人电话',
        type: 'string',
      },
    }
  };