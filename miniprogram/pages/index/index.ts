// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()
const { get } = require("../../utils/request");
import { getData } from '../../utils/util'
let allData: any = {
  hotShow: require('../../mock/hotShow'),
  hotMovie: require('../../mock/hotMovie'),
  hotTvShow: require('../../mock/hotTvShow'),
  hotBook: require('../../mock/hotBook'),
  hotMusic: require('../../mock/hotMusic'),
}

Page({
  data: {
    hotShow: [],
    hotMovie: [],
    hotTvShow: [],
    hotBook: [],
    hotMusic: [],
  },
  async onLoad() {
    this.loadData()
    // await this.initData()
  },
  loadData() {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      hotShow: getData(allData.hotShow.list),
      hotMovie: getData(allData.hotMovie.list),
      hotTvShow: getData(allData.hotTvShow.list),
      hotBook: getData(allData.hotBook.list),
      hotMusic: getData(allData.hotMusic.list)
    })
    setTimeout(function () {
      wx.hideLoading()
      allData = null
    }, 500)
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
  },
})
