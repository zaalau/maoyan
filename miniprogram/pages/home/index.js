// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperItem: [
      
      {
        src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/swiper1.jpg?sign=f50f4ca127b53a3a69989e17ed0d8c50&t=1701531067s',
      },
      {
        src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/swiper5.jpg?sign=df993aee3849c5b4509446e28bfc1316&t=1701438081',
      },
      {
        src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/swiper7.jpg?sign=016bce19375051fb2d4fecf95e4f1e0a&t=1701528191',
      },
      {
        src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/swiper2.jpg?sign=e6b8b5f28b821a767e224c6a03d8050e&t=1701437435',
      },
      {
        src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/swiper3.jpg?sign=620d52023083cfefa29062515906be9d&t=1701437482',
      },
      {
        src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/swiper4.jpg?sign=762e19c5dae844644515b5ce6f22cf12&t=1701437518',
      },
      
      
      {
        src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/swiper6.jpg?sign=f140a45040fa03aa37bdde637c50e991&t=1701437634',
      },
      
      
    ],
    navigateBtn:[
      {
        areaName:'活动策划执行',
        picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/huodongcehuaBtn.jpg?sign=931b123367f2572e92fa1961fc545a7e&t=1701429958',
        toPage:'activity'
      },
      {
        areaName:'视频制作',
        picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/shipinzhizuoBtn.jpg?sign=7b41d581f8f17e3732c2b1738a4853cf&t=1701429996',
        toPage:'video'
      },
      {
        areaName:'直播',
        picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/zhiboBtn.jpg?sign=457ebed680e039a2ce6a0c94f31539bc&t=1701430019',
        toPage:'live'

      },
      {
        areaName:'小程序制作',
        picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/xiaochengxuBtn.jpg?sign=c605af9f77506464e2bfb06619c75c4e&t=1701430039',
        toPage:'miniP'
      },
      {
        areaName:'会务会展',
        picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/huiwuhuizhanBtn.jpg?sign=eb6bfb56554ef8d9c84aa1dd8c3c29a5&t=1701430055',
        toPage:'conference'
      },
      {
        areaName:'合作场地',
        picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/changdiBtn.jpg?sign=8dd9276c2d0444d616cb202ead6d02f4&t=1701430076',
        toPage:'place'
      },
      
    ],
    
  },
  preview(e) {
    wx.vibrateShort()
    const picSrc = e.currentTarget.dataset.picSrc
    wx.previewImage({
      current: picSrc, // 当前显示图片的http链接
      urls: [`${picSrc}`] // 需要预览的图片http链接列表
    })
  },
  
  toPage(e) {
    wx.vibrateShort()
    const url = e.target.dataset.pageurl
    wx.navigateTo({
      url: `../${url}/index`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中',
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          homeContainerHeight: res.windowHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})