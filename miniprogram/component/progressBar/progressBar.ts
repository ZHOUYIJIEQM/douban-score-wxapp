Component({
  /**
   * 组件的属性列表
   */
  properties: {
    backgroundColor: {
      type: String,
      value: "yellow"
    },
    percent: {
      type: String,
      value: '0%'
    },
    height: {
      type: String,
      value: '8rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    styleObj: {}
  },

  lifetimes: {
    attached() {
      this.setData({
        styleObj: {
          backgroundColor: this.data.backgroundColor,
          width: this.data.percent,
          height: this.data.height
        }
      })
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {

  },
  

})
