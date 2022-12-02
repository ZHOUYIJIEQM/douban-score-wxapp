// component/starRate/starRate.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 1-10 分
    star: {
      type: Number,
      default: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    starOn: 0,
    starHalf: 0,
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      if (this.properties.star) {
        if (this.properties.star / 2 % 1 === 0) {
          this.setData({
            starOn: this.properties.star / 2
          })
        } else {
          this.setData({
            starOn: Math.floor(this.properties.star / 2),
            starHalf: this.properties.star / 2 % 1 >= 0.5 ? Math.floor(this.properties.star / 2) + 1 : 0,
          })
        }
      }
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
