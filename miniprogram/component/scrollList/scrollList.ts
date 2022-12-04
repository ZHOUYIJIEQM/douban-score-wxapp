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
    // 名称
    typeName: {
      type: String,
      value: ''
    },
    // 路由类型
    typeRoute: {
      type: String,
      value: ''
    },
    // 数据
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
    goMore() {
      wx.navigateTo({
        url: `/pages/moreMovie/index?type=${this.properties.typeRoute}&typeName=${this.properties.typeName}`
      })
    },
    goMovieDetail(event: any) {
      wx.navigateTo({
        url: `/pages/movieDetail/index?type=${this.properties.typeRoute}&id=${event.currentTarget.dataset.id}`
      })
    }
  }
})
