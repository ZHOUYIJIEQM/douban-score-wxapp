// pages/movieDetail/index.ts
Page({
  loading: false,
  allData: {} as any,
  shortComments: [] as any,
  /**
   * 页面的初始数据
   */
  data: {
    movieData: {} as any,
    isExpand: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // type id
    const { type, id } = options;
    this.initData(type, id);
  },

  initData(type: any, id: any) {
    wx.showLoading({
      title: "加载中",
    });
    this.allData = {
      hotShow: require("../../mock/hotShow"),
      hotMovie: require("../../mock/hotMovie"),
      hotTvShow: require("../../mock/hotTvShow"),
      hotBook: require("../../mock/hotBook"),
      hotMusic: require("../../mock/hotMusic"),
      top250: require("../../mock/top250")
    };
    setTimeout(() => {
      let list = this.allData[type].list;
      let movieData = list.filter((i: any) => i.id === id)[0]
      wx.setNavigationBarTitle({
        title: movieData.name || '电影'
      })
      this.setData({
        movieData,
      });
      this.shortComments = movieData.shortComments
      if (movieData.introduce.length < 60) {
        this.setData({
          isExpand: true
        })
      }
      this.allData = null;
      wx.hideLoading();
    }, 500);
  },

  scrollHandler() {
    if (!this.loading) {
      this.loading = true
      wx.showLoading({title: '加载中'})
      setTimeout(() => {
        // todo: 设置加载长评论
        this.setData({
          'movieData.shortComments': [...this.data.movieData.shortComments, ...this.shortComments]
        })
        this.loading = false
        wx.hideLoading()
      }, 500)
    }
  },

  preImg(event: any) {
    // console.log(event.currentTarget.dataset);
    const { index, type } = event.currentTarget.dataset
    let imgUrls = []
    if (type === 'actor') {
      imgUrls = this.data.movieData.actor.map((i: any) => i.avatar)
    }
    if (type === 'stagePhoto') {
      imgUrls = this.data.movieData.stagePhoto
    }
    wx.previewImage({
      current: imgUrls[index],
      urls: imgUrls
    })
    
  },

  toggleExpand() {
    this.setData({
      isExpand: !this.data.isExpand
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
