import {CalendarCell, ImgPreviewCell, UploadCell} from '../../pages/purchase/components/purchaseDetail/cells/index';

export const PURCHASE_MANAGER_PURCHASE_DETAIL_SETTING = {
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
      orderName: {
        title: '订单号',
        type: 'string',
      },
      purchaseDate: {
        title: '采购日期',
        type: 'string',
        // editor: {
        //   type: 'custom',
        //   component: CalendarCell,
        // },
      },
      vendorNameRmk: {
        title: '厂家',
        type: 'string',
        editable: false,
      },
      transactionType: {
        title: '是否含税',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: '含税', title: '含税' },{ value: '不含税', title: '不含税' }]
          }
        }
      },
      productName: {
        title: '产品名称',
        type: 'string',
      },
      spec: {
        title: '产品规格',
        type: 'string',
      },
      quantity: {
        title: '数量',
        type: 'string',
      },
      price: {
        title: '单价',
        type: 'string',
      },
      payableAmountArg: {
        title: '应付账款',
        type: 'string',
        editable: false,
      },
      paymentDate: {
        title: '收款日期',
        type: 'string',
        // editor: {
        //   type: 'custom',
        //   component: CalendarCell,
        // },
      },
      cash: {
        title: '现金',
        type: 'string',
      },
      bill: {
        title: '支票',
        type: 'string',
      },
      tt: {
        title: '电汇',
        type: 'string',
      },
      acceptance: {
        title: '承兑',
        type: 'string',
      },
      paidAmountArg: {
        title: '付款金额',
        type: 'string',
      },
      payer: {
        title: '收款单位',
        type: 'string',
      },
      unpaidAmountArg: {
        title: '欠款',
        type: 'string',
        editable: false,
      },
      issueInvoiceDate: {
        title: '开票日期',
        type: 'string',
        // editor: {
        //   type: 'custom',
        //   component: CalendarCell,
        // },
      },
      receivableInvoiceArg: {
        title: '应收发票',
        editable: false,
      },
      invoiceAmount: {
        title: '已收发票',
        type: 'string',
      },
      uncollectedInvoiceArg: {
        title: '剩余未开发票',
        type: 'string',
        editable: false,
      },
      seller: {
        title: '开票单位',
        type: 'string',
      },
      invoiceNo: {
        title: '票号',
        type: 'string',
      },
      photocopy: {
        title: '影印件',
        type: 'custom',
        renderComponent: ImgPreviewCell,
        editor: {
          type: 'custom',
          component: UploadCell,
        },
      },       
    }
  };