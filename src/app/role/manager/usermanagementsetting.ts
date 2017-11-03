
export const MANAGER_USER_MANAGEMENT_SETTING = {
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
      roleName: {
        title: '角色',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
                { value: '管理员', title: '管理员' },
                { value: '会计', title: '会计' },
                { value: '采购', title: '采购' },
                { value: '销售管理', title: '销售管理' },
                { value: '销售员', title: '销售员' },
            ]
          }
        }
      },
      account: {
        title: '账号',
        type: 'string',
      },
      password: {
        title: '密码',
        type: 'string',
      },
      name: {
        title: '姓名',
        type: 'string',
      },
      sex: {
        title: '性别',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [
                { value: '男', title: '男' },
                { value: '女', title: '女' },
            ]
          }
        }
      },
      landlinePhone: {
        title: '座机',
        type: 'string',
      },
      mobilePhone: {
        title: '手机',
        type: 'string',
      },
      address: {
        title: '地址',
        type: 'string',
      },
      email: {
        title: '邮件',
        type: 'string',
      },
    }
  };