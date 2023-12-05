// pages/activity/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed:'fabuhui',
    fabuhuiData:[
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg1.webp?sign=aa1e54ed6e953f0562d88a1c6d8ffaed&t=1701765241',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibig1.webp?sign=485d9362692a0ab62d2861785123e25f&t=1701765438',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuifir2-1.webp?sign=c08fe683b293f484965118e4ff274cfd&t=1701765534",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec1-1.webp?sign=ae713e3248f3762afbc8e35ee87b13bd&t=1701765800',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec2-1.webp?sign=5716f8c44f4a0fad003e97ecfc412909&t=1701766077',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec3-1.webp?sign=4bcef41e2b551aacf2670e2ca968b051&t=1701766154',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg2.webp?sign=93b61ff1baa00cddd1812e64e7fb6641&t=1701766736',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibig2.webp?sign=62a88c773c7e0b7ceb71022a814bff00&t=1701766761',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuifir2-2.webp?sign=44bbd1281342e1df814939f2b61d68f0&t=1701766771",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec1-2.webp?sign=2504ed7765d997a542d99987c4946762&t=1701766783',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec2-2.webp?sign=93ef8d33a0eb273df73c648e24a10333&t=1701766795',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec3-2.webp?sign=bc8a5ed88cbeaeb435182eafe150b545&t=1701766805',
      },
      {
        type: 'right',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg3.webp?sign=3b7239d975029cf615ee67dde1673345&t=1701768489',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibig3.webp?sign=0a0b24157d480a5dbcf0fe46f2451121&t=1701768496',
        fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuifir2-3.webp?sign=8ee6a58acbe4996d26ebc4acb21458ad&t=1701768503",
        sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec1-3.webp?sign=b6c12659c3a8a1e110427c39af2881c7&t=1701768510',
        sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec2-3.webp?sign=3e0e70bd1621e1582417be14abbe4700&t=1701768645',
        sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuisec3-3.webp?sign=7b4d7fe38e0d527978f77277ff8ec7ad&t=1701768652',
      },
      {
        type: 'left',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuibg4.webp?sign=2e817163eab2a932788db151b603f23c&t=1701770706',
        bigPic:'',
        fir2:"",
        sec1: '',
        sec2: '',
        sec3: '',
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
          activityHeight: res.windowHeight
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