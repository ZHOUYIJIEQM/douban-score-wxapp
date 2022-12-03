// component/scrollLoad/scrollLoad.ts

let timer = 0

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    // 容器高度
    pageHeight: 0,
    // 定时器
    timer: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrollHandler(event: any) {
      // 节流
      // if (timer) return
      // timer = setTimeout(() => {
      //   if ( event.detail.scrollTop + this.data.pageHeight + 50 >= event.detail.scrollHeight ) {
      //     console.log('load');
      //     this.triggerEvent("loadData", event.detail);
      //   }
      //   timer = 0
      // }, 200)

      // 防抖
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        if ( event.detail.scrollTop + this.data.pageHeight + 50 >= event.detail.scrollHeight ) {
          // console.log('load');
          this.triggerEvent("loadData", event.detail);
        }
      }, 200)
    },
  },
  lifetimes: {
    attached() {
      // 容器高度
      // 组件内需要写为 wx.createSelectorQuery().in(this)
      wx.createSelectorQuery().in(this).select('.scroll-page').boundingClientRect((rect: any) => {
        console.log(rect.height);
        this.data.pageHeight = rect.height
      }).exec()
    },
  },
});
