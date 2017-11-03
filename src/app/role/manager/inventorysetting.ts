export const MANAGER_INVENTORY_SETTING = {
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
      orderName: {
        title: '订单号',
        type: 'string',
      },
      productName: {
        title: '产品',
        type: 'string',
      },
      spec: {
        title: '规格',
        type: 'string',
      },
      inventoryQuantity: {
        title: '数量',
        type: 'string',
      },
      purchasePrice: {
        title: '单价',
        type: 'string',
      },
      inventoryAmount: {
        title: '金额',
        type: 'string',
      },
      vendor: {
        title: '厂商',
        type: 'string',
      },
    }
  };