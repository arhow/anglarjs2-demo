  import {CalendarCell, ImgPreviewCell, UploadCell} from '../../pages/sales/components/salesDetail/cells/index';
  
  export const ACCOUNTANT_SALES_DETAIL_SETTING = {
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
        salesDate: {
          title: '销售日期',
          type: 'string',
          // editor: {
          //   type: 'custom',
          //   component: CalendarCell,
          // },
        },
        // vendorNameRmk: {
        //   title: '厂家',
        //   type: 'string',
        // },
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
        receivableAmountArg: {
          title: '应收账款',
          type: 'string',
          editable: false,
        },
        payableInvoiceArg: {
          title: '应开发票',
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
        receivedAmountArg: {
          title: '收款金额',
          type: 'string',
          editable: false,
        },
        payer: {
          title: '付款单位',
          type: 'string',
        },
        uncollectedAmountArg: {
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
        invoiceAmount: {
          title: '开票金额',
          type: 'string',
        },
        buyer: {
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
        unpaidInvoiceArg: {
          title: '剩余未开发票',
          type: 'string',
          editable: false,
        },
      }
    };