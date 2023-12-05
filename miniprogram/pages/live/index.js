// pages/live/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed:'shipin',
    shipinData:[
      {
        bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/zhuanbochebg.webp?sign=581689edd7801ec78cca5ce4d4a75620&t=1701662210',
        height:1158,
        pic:[
          {
            top: 360,
            right: 18,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/shipinpic1.webp?sign=0bc843f1ab76dfea0ba8fa6d7d14b633&t=1701626444',
          },
          {
            top: 640,
            right: 370,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/shipinpic2.webp?sign=412854e610932d3c2f16e2b87fa0cedb&t=1701626650',
          },
          {
            top: 915,
            right: 20,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/shipinpic3.webp?sign=5f737fb0f39c8fe27b5c9ecca13cd3b4&t=1701626852',
          }
        ]
      },
      {
        bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/putongbg.webp?sign=2a55aac4c7885e12e642abe10f9680c6&t=1701662429',
        height:943,
        pic:[
          {
            top: 380,
            right: 18,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/picitem6.webp?sign=a09ee38058a5f92ad34bcf4c52b245da&t=1701627321',
          },
          {
            top: 645,
            right: 388,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/picitem7.webp?sign=c532666054cbecc5461e2a14eda062f6&t=1701627755',
          },
          {
            top: 645,
            right: 18,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/picitem8.webp?sign=c532666054cbecc5461e2a14eda062f6&t=1701627755',
          },
          
        ]
      },
    ],
    liveData:[
    {
      src:'https://acd.alltuu.com/mobile/?id=1002406646&mode=release',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lively.webp?sign=da02a755c39e5ac291c9266b39f2c072&t=1701682112'
    },
    {
      src:'https://v09.alltuu.com/r/eIJ7ni/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/liveyyy.webp?sign=2d292e7929e4bc62c02c1d4f78f4908f&t=1701682125'
    },
    {
      src:'https://v09.alltuu.com/r/eIJ7ni/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/liveyjyl.webp?sign=f4ee27c618f965c80c92d8cbbc5c8f34&t=1701682133'
    },
    {
      src:'https://v09.alltuu.com/r/eIJ7ni/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livemt.webp?sign=ce0c6a0dfc472766595f946541bec8ee&t=1701682140'
    },
    {
      src:'https://v09.alltuu.com/r/eIJ7ni/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livemm.webp?sign=526190b7ac6dca9652289f2ebe2ebf1d&t=1701682147'
    },
    {
      src:'https://v09.alltuu.com/r/eIJ7ni/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livejz.webp?sign=3b4035104e6e955adb7683a3d6363693&t=1701682154'
    },
    ]
  },
  toPageLive(e){
    const { src } = e.currentTarget.dataset
    wx.navigateTo({
      url: `../livenav/index?src=${src}`,
    })
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
          liveHeight: res.windowHeight
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