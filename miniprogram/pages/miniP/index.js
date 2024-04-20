// pages/miniP/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minipData: [

      {
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/minipzk.webp?sign=deb5e4074639f7ed1d3495f4c7de6d26&t=1713418387',
        cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotipic.webp?sign=7915e9c68bb026b6d28b06bef8b1b2f0&t=1713419368',
        finderUserName: 'sphpnCphXwj3q7h',
        feedId: 'token/A69dBAN0f'
      },
      {
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/miniphd.webp?sign=6db12a54c22d45a1e9339978ce69f7ca&t=1713419728',
        cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotipic.webp?sign=7915e9c68bb026b6d28b06bef8b1b2f0&t=1713419368',
        finderUserName: 'sphpnCphXwj3q7h',
        feedId: 'token/AhnbOJGEZ'
      },
      {
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/minipnq.webp?sign=ae25851db28c471534cb2959ab4b49b5&t=1713419754',
        cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotipic.webp?sign=7915e9c68bb026b6d28b06bef8b1b2f0&t=1713419368',
        finderUserName: 'sphpnCphXwj3q7h',
        feedId: 'token/AHBJdlVMM'
      },
      {
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/miniphz.webp?sign=95a85f0349406baed5b413e464f7a378&t=1713419740',
        cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotipic.webp?sign=7915e9c68bb026b6d28b06bef8b1b2f0&t=1713419368',
        finderUserName: 'sphpnCphXwj3q7h',
        feedId: 'token/A2KbB4IpH'
      }
    ]
  },
  xx(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中',
    })
    const { ifSetInfo } = options
    this.setData({
      ifSetInfo
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          minipHeight: res.windowHeight
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