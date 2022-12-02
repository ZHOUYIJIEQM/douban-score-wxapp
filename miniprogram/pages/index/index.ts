// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const { get } = require("../../utils/request");
const hotShow = require('../../mock/hotShow')
const hotMovie = require('../../mock/hotMovie')
const hotTvShow = require('../../mock/hotTvShow')
const hotBook = require('../../mock/hotBook')
const hotMusic = require('../../mock/hotMusic')

const getData = (list: any) => {
  return list.map((i: any) => {
    return {
      id: i.id,
      name: i.name,
      score: i.score.num,
      movieImage: i.movieImage,
      title: i.title
    }
  })
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
    this.setData({
      hotShow: getData(hotShow.list),
      hotMovie: getData(hotMovie.list),
      hotTvShow: getData(hotTvShow.list),
      hotBook: getData(hotBook.list),
      hotMusic: getData(hotMusic.list)
    })
    // await this.initData()
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
