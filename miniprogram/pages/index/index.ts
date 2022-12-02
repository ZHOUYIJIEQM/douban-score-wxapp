// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const { get } = require("../../utils/request");

Page({
  data: {
    hotShow: [],
    hotMovie: [],
    hotTvShow: [],
    hotBook: [],
    hotMusic: [],
  },
  async onLoad() {
    await this.initData()
  },
  /**
   * 获取初始数据
   */
  async initData() {
    let res = await get('/list/hotShow')
    this.setData({
      hotShow: res.data.list.slice(0, 12)
    })
    res = await get('/list/hotMovie')
    this.setData({
      hotMovie: res.data.list.slice(0, 12)
    })
    res = await get('/list/hotTvShow')
    this.setData({
      hotTvShow: res.data.list.slice(0, 12)
    })
    res = await get('/list/hotBook')
    this.setData({
      hotBook: res.data.list.slice(0, 12)
    })
    res = await get('/list/hotMusic')
    this.setData({
      hotMusic: res.data.list.slice(0, 12)
    })
  }
})
