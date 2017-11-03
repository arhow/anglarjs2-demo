const HOSTURL = "http://localhost:8080/";
export const CONSTANT ={
    "URL": {
        "HOST": HOSTURL,
        "GET_SYSTEM_NAME": HOSTURL + "authenticate/getsystemname",
        "VERIFY_USER": HOSTURL + 'authenticate/verifyuser',
        "GET_MENU": HOSTURL + 'authenticate/getmenu',
        "GET_SALER_SUMMARY_SETTING": HOSTURL + 'sales/getsalersummarysetting',
        "GET_SALER_SUMMARY_DATA": HOSTURL + 'sales/getsalersummarydata',
        "GET_SALER_CUSTOMER_SUMMARY_SETTING": HOSTURL + 'sales/getsalercustomersummarysetting',
        "GET_SALER_CUSTOMER_SUMMARY_DATA": HOSTURL + 'sales/getsalercustomersummarydata',
        "GET_SALES_DETAIL_SETTING": HOSTURL + 'sales/getsalesdetailsetting',
        "GET_SALES_DETAIL_DATA": HOSTURL + 'sales/getsalesdetaildata',
        "NEW_SALES": HOSTURL + 'sales/newsales',
        "UPDATE_SALES": HOSTURL + 'sales/updatesales',
        "DELETE_SALES": HOSTURL + 'sales/deletesales',
        "UPLOAD_SALES_PHOTOCOPY": HOSTURL + 'sales/uploadsalesphotocopy',
        "GET_USER_DATA": HOSTURL + 'management/getuserdata',
        "NEW_USER": HOSTURL + 'management/newuser',
        "UPDATE_USER": HOSTURL + 'management/updateuser',
        "DELETE_USER": HOSTURL + 'management/deleteuser',
        "GET_SALER_CUSTOMER_RLS_DATA": HOSTURL + 'management/getsalercustomerrlsdata',
        "GET_CUSTOMER_DATA": HOSTURL + 'management/getcustomerdata',
        "NEW_CUSTOMER": HOSTURL + 'management/newcustomer',
        "UPDATE_CUSTOMER": HOSTURL + 'management/updatecustomer',
        "DELETE_CUSTOMER": HOSTURL + 'management/deletecustomer',
        "GET_VENDOR_DATA": HOSTURL + 'management/getvendordata',
        "NEW_VENDOR": HOSTURL + 'management/newvendor',
        "UPDATE_VENDOR": HOSTURL + 'management/updatevendor',
        "DELETE_VENDOR": HOSTURL + 'management/deletevendor',
        "GET_VENDOR_SUMMARY_DATA": HOSTURL + 'purchase/getvendorsummarydata',
        "GET_PURCHASE_DETAIL_DATA": HOSTURL + 'purchase/getpurchasedetaildata',
        "NEW_PURCHASE": HOSTURL + 'purchase/newpurchase',
        "UPDATE_PURCHASE": HOSTURL + 'purchase/updatepurchase',
        "DELETE_PURCHASE": HOSTURL + 'purchase/deletepurchase',
        "UPLOAD_PURCHASE_PHOTOCOPY": HOSTURL + 'purchase/uploadphotocopy',
        "GET_EXPENSES_SALER_SUMMARY_DATA": HOSTURL + 'expenses/getexpensessalersummarydata',
        "GET_EXPENSES_SALER_CUSTOMER_SUMMARY_DATA": HOSTURL + 'expenses/getexpensessalercustomersummarydata',
        "GET_EXPENSES_DETAIL_DATA": HOSTURL + 'expenses/getexpensesdetaildata',
        "NEW_EXPENSES": HOSTURL + 'expenses/newexpenses',
        "UPDATE_EXPENSES": HOSTURL + 'expenses/updateexpenses',
        "DELETE_EXPENSES": HOSTURL + 'expenses/deleteexpenses',
        "GET_DASHBOARD_INVENTORY_SUMMARY_DATA": HOSTURL + 'dashboard/getdashboardinventorysummarydata',
        "GET_DASHBOARD_JOURNAL_SUMMARY_DATA": HOSTURL + 'dashboard/getdashboardjournalsummarydata',
        "GET_DASHBOARD_MISMATCHING_ORDERS_DATA": HOSTURL + 'dashboard/getdashboardmismatchingordersdata',
        "GET_DASHBOARD_PROFIT_SUMMARY_DATA": HOSTURL + 'dashboard/getdashboardprofitsummarydata',
        "GET_DASHBOARD_PURCHASE_SUMMARY_DATA": HOSTURL + 'dashboard/getdashboardpurchasesummarydata',
        "GET_DASHBOARD_SALES_SUMMARY_DATA": HOSTURL + 'dashboard/getdashboardsalessummarydata',
        "GET_INVENTORY_DATA": HOSTURL + 'inventory/getinventorydata',
        "GET_JOURNAL_SUMMARY_DATA": HOSTURL + 'journal/getjournalsummarydata',
        "GET_JOURNAL_DETAIL_DATA": HOSTURL + 'journal/getjournaldetaildata',
        "NEW_JOURNAL": HOSTURL + 'journal/newjournal',
        "UPDATE_JOURNAL": HOSTURL + 'journal/updatejournal',
        "DELETE_JOURNAL": HOSTURL + 'journal/deletejournal',
        "GET_PROFIT_SALER_SUMMARY_DATA": HOSTURL + "profit/getprofitsalersummarydata",
        "GET_PROFIT_SALER_CUSTOMER_SUMMARY_DATA": HOSTURL + "profit/getprofitsalercustomersummarydata",
        "GET_PROFIT_DETAIL_DATA": HOSTURL + "profit/getprofitdetaildata",

    },
    "KEYWORD":{
        "JWT": 'jwt',
        "USER_ID": 'userId',
        "ROLE_ID": 'roleId',
        "REFERENCE_ROLE_ID": 'referenceRoleId',
        "ACCOUNT": 'account',
        "PASSWORD": 'password',
        "COMPANY_ID": 'companyId',
        "SALER_SUMMARY_SETTING": "",
        "PHOTOCOPY": "影印件",
    },

    "MENU":{
        "MANAGER":"1",
        "ACCOUNTRANT":"2",
        "PURCHASE_MANAGER":"3",
        "SALES_MANAGER":"4",
        "SALER":"5",

    },

    "TITLE":{
        "SALER_SUMMARY_TABLE_TITLE":"销售员一览",
        "SALER_CUSTOMER_SUMMARY_TABLE_TITLE":"的客户一览",
        "SALES_DETAIL_TABLE_TITLE":"的销售一览",

        "USER_MANAGEMENT_TABLE_TITLE": "用户管理",
        "CUSTOMER_MANAGEMENT_TABLE_TITLE": "客户管理",
        "SALER_CUSTOMER_RLS_MANAGEMENT_TABLE_TITLE": "销售员客户关系管理",
        "VENDOR_MANAGEMENT_TABLE_TITLE": "供货商管理",

        "VENDOR_SUMMARY_TABLE_TITLE": "供货商一览",
        "PURCHASE_DETAIL_TABLE_TITLE": "的采购一览",

        "EXPENSES_SALER_SUMMARY_TABLE_TITLE": "销售员的费用摘要一览",
        "EXPENSES_DETAIL_TABLE_TITLE": "的费用详细一览",
        "EXPENSES_SALER_CUSTOMER_SUMMARY_TABLE_TITLE": "的客户的费用摘要一览",

        "DASHBOARD_INVENTORY_SUMMARY_TABLE_TITLE": "库存摘要一览",
        "DASHBOARD_JOURNAL_SUMMARY_TABLE_TITLE": "流水摘要一览",
        "DASHBOARD_MISMATCHING_ORDERS_TABLE_TITLE": "输入不匹配摘要一览",
        "DASHBOARD_PROFIT_SUMMARY_TABLE_TITLE": "利益摘要一览",
        "DASHBOARD_PURCHASE_SUMMARY_TABLE_TITLE": "采购摘要一览",
        "DASHBOARD_SALES_SUMMARY_TABLE_TITLE": "销售摘要一览",

        "INVENTORY_TABLE_TITLE": "库存一览",
        "JOURNAL_SUMMARY_TABLE_TITLE": "流水摘要一览",
        "JOURNAL_DETAIL_TABLE_TITLE": "的流水详细一览",

        "PROFIT_SALER_SUMMARY_TABLE_TITLE": "利润销售员摘要一览",
        "PROFIT_SALER_CUSTOMER_SUMMARY_TABLE_TITLE": "的客户利润摘要一览",
        "PROFIT_DETAIL_TABLE_TITLE": "利益详细一览",

        

    },

    "MESSAGE": {

        "DELETE_CONFIRM":"你确定删除么？",
        "NEW_CONFIRM":"你确定新建么？",
        "UPDATE_CONFIRM":"你确定更新么？",
    },

    "PAGES": {
        "DASHBOARD": "pages/dashboard/",
    },

    "HINT":{
        "DATE_FORMAT": "*日期的输入格式为YYYY-MM-DD 比如2017-08-01代表2017年8月1日",
    },

    PHOTOCOPY_PATH: "assets/img/",


};

