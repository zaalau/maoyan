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
        itemTime: '活动时间：2021.01.11-2021.01.12',
        itemName: '活动主题：智趣童羽',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitembg1%20.webp?sign=dbc33de7853ae58ecc9d77a1b34de4aa&t=1701617404',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitembig1.webp?sign=3b18dfe4e9fa31a0ceb67e26e0539591&t=1701619494',
        left: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemleft1.webp?sign=7da95babc6f634d10602fe919d015e97&t=170161982ß',
        middle: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemmiddle1.webp?sign=41b9b0c76ca564dcb780d16bca582d26&t=1701620061',
        right: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemright1.webp?sign=769a549298996b1d4e4d534ec5cf134e&t=1701620250',
        class: 'right',

      },
      {
        type: 'left',
        itemTime: '活动时间：2020.10.20',
        itemName: '活动主题：卓越悠蓝·绽放浙沪',
        bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitembg2.webp?sign=4d23435f7b25a5f8785f6e3315131b48&t=1701620800',
        width:'258',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitembig2.webp?sign=8ced25aec4a29bc723b87e79bda577f6&t=1701621347',
        left: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemleft2.webp?sign=08db3f24a0ad4da09be5770ac5d67a08&t=1701621527',
        middle: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemmiddle2.webp?sign=378369d7f184c7da3ae69b9cf58bf694&t=1701621658',
        right: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemright2.webp?sign=923617ad93b5ddce7e8d917bc04e85d8&t=1701622102',
        class: 'left',

      },
      {
        type: 'right',
        itemTime: '活动时间：2019',
        itemName: '活动主题：聚梦想·智未来',
        bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitembg3.webp?sign=9d976c2c25ed41142e0af948cd3435f6&t=17016227754',
        bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitembig3.webp?sign=cc168689649e57f1c7d3a33f8750a596&t=1701622527',
        left: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemleft3.webp?sign=acd043bf60348caaa4a4e58e310bae93&t=1701622560',
        middle: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemmiddle3.webp?sign=35fd66f49dad151f02de4d88283db442&t=1701622584',
        right: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/fabuhuiitemright3.webp?sign=a17e3566fb38feab4d6a43c36f5a28cb&t=1701622572',
        class: 'right',

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