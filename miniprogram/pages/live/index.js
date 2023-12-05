// pages/live/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed:'shipin',
    shipinData:[
      {
        bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/zhuanbochebg.webp?sign=01def18528be897058924dc06aa1ae89&t=1701780546',
        height:1103,
        pic:[
          {
            top: 350,
            right: 5,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/shipinpic1.webp?sign=0bc843f1ab76dfea0ba8fa6d7d14b633&t=1701626444',
          },
          {
            top: 620,
            right: 360,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/shipinpic2.webp?sign=412854e610932d3c2f16e2b87fa0cedb&t=1701626650',
          },
          {
            top: 898,
            right: 5,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/shipinpic3.webp?sign=5f737fb0f39c8fe27b5c9ecca13cd3b4&t=1701626852',
          }
        ]
      },
      {
        bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/putongbg.webp?sign=fa4eba00e8269cc445ae9f7bd7f70cbb&t=1701780563',
        height:797,
        pic:[
          {
            top: 300,
            right: 5,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/picitem6.webp?sign=a09ee38058a5f92ad34bcf4c52b245da&t=1701627321',
          },
          {
            top: 575,
            right: 338,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/picitem7.webp?sign=c532666054cbecc5461e2a14eda062f6&t=1701627755',
          },
          {
            top: 568,
            right: 0,
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/picitem8.webp?sign=c532666054cbecc5461e2a14eda062f6&t=1701627755',
          },
          
        ]
      },
    ],
    liveData:[
    {
      src:'https://v05.alltuu.com/r/EZfABz/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livepic1.webp?sign=b295c016c5a4db8e37d8785d1663167c&t=1701772055',
      textSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livetitle1.webp?sign=9775c00201e8f57dbf4c993b44f21783&t=1701772779'
    },
    {
      src:'https://v05.alltuu.com/r/FZ7zia/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livepic2.webp?sign=5e4b8bc94b0be345f70237fa077059ab&t=1701772069',
      textSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livetitle2.webp?sign=9775c00201e8f57dbf4c993b44f21783&t=1701772779'
    },
    {
      src:'https://v05.alltuu.com/r/rURBve/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livepic3.webp?sign=2ce2a62d1dba6d90b4d5405958ef840e&t=1701772076',
      textSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livetitle3.webp?sign=9775c00201e8f57dbf4c993b44f21783&t=1701772779'
    },
    {
      src:'https://v05.alltuu.com/r/YvA3uq/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livepic4.webp?sign=a770a770add4bdf35ed98c4cde2b57e6&t=1701772084',
      textSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livetitle4.webp?sign=9775c00201e8f57dbf4c993b44f21783&t=1701772779'
    },
    {
      src:'https://v05.alltuu.com/r/fm2qai/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livepic5.webp?sign=da3d970138a62381c3bc50774dcba9e7&t=1701772092',
      textSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livetitle5.webp?sign=9775c00201e8f57dbf4c993b44f21783&t=1701772779'
    },
    {
      src:'https://v05.alltuu.com/r/Q7nIjm/',
      picSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livepic6.webp?sign=b25c1f64eab6cd6bc3cc1ef3382f1a8d&t=1701772111',
      textSrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/livetitle6.webp?sign=9775c00201e8f57dbf4c993b44f21783&t=1701772779'
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