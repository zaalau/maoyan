// pages/place/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed: 'kaiyuan',
    changdiData:[
      
      {
        pagename:'kaiyuan',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyuantext.webp?sign=019ba2cc6831b7fc7821121b2def2851&t=1701679734',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyuanpic.webp?sign=7fe0f1ee27c6ddd8c20a5bcd7ff41275&t=1701679720'
      },
      {
        pagename:'taixuhu',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/taixuhutext.webp?sign=7db048957e0ebf63e2c40d7319df4d8d&t=1701680566',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/taixuhupic.webp?sign=572e7050ba659b165e5ab38754692697&t=1701680601'
      },
      {
        pagename:'baijinhanjue',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/baijinhantext.webp?sign=213b8fde666d8c63b0292a189d1da6e3&t=1701680614',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/baijinhanpic.webp?sign=953e6fc68105dd7ac5adf6c20f11ad69&t=1701680648'
      },
      {
        pagename:'aoti',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotitext.webp?sign=831ba22986805edbee58d22467d28f42&t=1701680659',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotipic.webp?sign=b3988433b07a093ac1d4582bbd6161a6&t=1701680668'
      },
    ]
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
    wx.getSystemInfo({
      success: res => {
        this.setData({
          placeHeight: res.windowHeight
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