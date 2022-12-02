# 微信小程序豆瓣评分

## 配置小程序
### [全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)
```json
// app.json
{
  // 配置 tabbar, 底下图标要用图片
  "tabBar": {
    "color": "#767678",
    "selectedColor": "#368644",
    "borderStyle": "white",
    "backgroundColor": "#fff",
    "list": [
      {
        "text": "首页",
        "pagePath": "pages/index/index",
        "iconPath": "images/homeOff.png",
        "selectedIconPath": "images/homeOn.png"
      },
      {
        "text": "榜单",
        "pagePath": "pages/topList/index",
        "iconPath": "images/topListOff.png",
        "selectedIconPath": "images/topListOn.png"
      },
      {
        "text": "我的",
        "pagePath": "pages/mine/index",
        "iconPath": "images/mineOff.png",
        "selectedIconPath": "images/mineOn.png"
      }
    ]
  },
  "lazyCodeLoading": "requiredComponents",
}
```

### [页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)
```json
// pages/index/index.json
{
  "navigationBarTitleText": "首页",
  "navigationBarBackgroundColor": "#42bd56",
  "navigationBarTextStyle": "white",
  // 自定义 顶部导航
  "navigationStyle": "custom",
  "usingComponents": {}
}
```

## 使用字体图标
1. ```iconfont```选好图标加入项目
2. 选择 项目设置 勾选 ```Base64```

![项目设置](./preImg/iconfont1.png)
<br />

![勾选Base64](./preImg/iconfont2.png)
<br />
3. 下载至本地 -> 提取里面的 ```iconfont.css```, 并改后缀为```wxss```, 放到静态资源目录\
![静态资源目录](./preImg/iconfont3.png)
4. 在```app.scss```里导入
```scss
@import './assets/iconfont/iconfont.wxss';
```
5. 使用时
```html
<text class="iconfont icon-sousuo"></text>
```

## 封装网络请求
```ts
// utils/request.ts
// 简单封装一下请求, get, post
const baseUrl = "http://localhost:3002";
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
```

## 自定义组件
1. 组件里使用字体图标时无效, [因为组件默认设置了样式隔离](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)
```ts
Component({
  options: {
    // 页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面, 类似使用vue时的 <style scoped></style>
    styleIsolation: 'apply-shared'
  }
})
```
2. 组件传入参数




