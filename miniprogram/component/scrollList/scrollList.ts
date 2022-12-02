// component/scrollList/scrollList.ts
Component({
  // 关掉组件样式隔离
  options: {
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的属性列表
   */
  properties: {
    typeName: {
      type: String,
      value: ''
    },
    listArr: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
