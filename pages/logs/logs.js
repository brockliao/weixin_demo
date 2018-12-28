//logs.js
const util = require('../../utils/util.js')
const App = getApp();
const common = require("../../common.js")

Page({
  data: {
    logs: []
  },
  onLoad: function() {
    // 监听页面加载
    console.log(App.globalData.test)
    common.sayHello('log')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  toCash() {
    wx.switchTab({
      url: '../../tabBarIndex/cashIndex/cashIndex',
    })
  },
  onRady() {
    // 监听页面初次渲染完成
  },
  onShow() {
    // 监听页面显示
  },
  onHide() {
    // 监听页面隐藏
  },
  onUnload() {
    // 监听页面卸载
  },
  onPullDownRefresh() {
    // 监听页面下拉动作
    console.log("this is log pageView pullDownRefresh")
  }
})