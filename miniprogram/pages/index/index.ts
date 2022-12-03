// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()
const { get } = require("../../utils/request");
import { getData } from '../../utils/util'
let hotShow = require('../../mock/hotShow')
let hotMovie = require('../../mock/hotMovie')
let hotTvShow = require('../../mock/hotTvShow')
let hotBook = require('../../mock/hotBook')
let hotMusic = require('../../mock/hotMusic')

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
      hotShow: getData(hotShow.list),
      hotMovie: getData(hotMovie.list),
      hotTvShow: getData(hotTvShow.list),
      hotBook: getData(hotBook.list),
      hotMusic: getData(hotMusic.list)
    })
    setTimeout(function () {
      wx.hideLoading()
      // 把没用的数据清除掉
      hotShow = []
      hotMovie = []
      hotTvShow = []
      hotBook = []
      hotMusic = []
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
