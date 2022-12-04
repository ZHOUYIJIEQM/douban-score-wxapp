// pages/moreMovie/index.ts
import { getData } from "../../utils/util";
let allData: any = {};
let loading = false;
let tempList: any[] = [];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    listArr: [] as any,
    type: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    const type: string = options.type;
    wx.setNavigationBarTitle({ title: options.typeName });
    this.setData({ type });
    allData = {
      hotShow: require("../../mock/hotShow"),
      hotMovie: require("../../mock/hotMovie"),
      hotTvShow: require("../../mock/hotTvShow"),
      hotBook: require("../../mock/hotBook"),
      hotMusic: require("../../mock/hotMusic"),
    };
    this.initData(allData[type].list);
  },

  goMovieDetail(event: any) {
    wx.navigateTo({
      url: `/pages/movieDetail/index?type=${this.data.type}&id=${event.currentTarget.dataset.id}`,
    });
  },

  initData(list: any[]) {
    wx.showLoading({
      title: "加载中",
    });
    setTimeout(() => {
      tempList = getData(list);
      tempList = [...tempList, ...tempList];
      this.setData({
        listArr: [...tempList, ...tempList],
      });
      wx.hideLoading();
    }, 500);
  },

  scrollHandler() {
    if (!loading) {
      loading = true;
      wx.showLoading({ title: "加载中" });
      setTimeout(() => {
        this.setData({
          listArr: [...this.data.listArr, ...tempList],
        });
        loading = false;
        wx.hideLoading();
      }, 500);
    }
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
