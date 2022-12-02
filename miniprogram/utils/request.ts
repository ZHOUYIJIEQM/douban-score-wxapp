// 简单封装一下请求, get, post
// const baseUrl = "http://localhost:3002";
const baseUrl = "http://192.168.1.9:3002";

module.exports = {
  get: (url: string) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${baseUrl}${url}`,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });
  },
  post: (url: string, data: any) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${baseUrl}${url}`,
        method: "POST",
        data,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    })
  }
}