// pages/conference/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed: 'jiedai',
    jiedaiData:{
      bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/jiedaiBg.webp?sign=dbdd7bd2cfcdb3c64da3b383bb65f2cf&t=1701701731',
      picItem:[
        {
          src:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaosite1.webp?sign=dfd07c0c36fe2c810ff1499c86b63259&t=1701757600",
          top:236,
          left:37
        },
        {
          src:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaosite2.webp?sign=d149d6c2217cdc2291f2f724f9763fed&t=1701757618",
          top:580,
          left:77
        },
        {
          src:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaosite3.webp?sign=d8429ec0cb99ee99408ddf155ad2b96b&t=1701757626",
          top:920,
          left:37
        },
      ]
    }
  },
  preview(e) {
    const { picSrc } = e.currentTarget.dataset
    wx.previewImage({
      current: picSrc,
      urls: [`${picSrc}`],
    })
  },
  switchPage(e) {
    const { pagename } = e.currentTarget.dataset
    this.setData({
      whosbeenchoosed: pagename
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中',
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