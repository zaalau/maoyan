// pages/video/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed:'huodong',
    huodongData:{
      bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/videoBg.webp?sign=adc9e3d74959d8fd282cb8fae51d3ca9&t=1701760475',
      huodongItem:[
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huodongTitle.webp?sign=93549205b0de7bf8fad8a87a90293364&t=1701760516',
          mp4item:[
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huodongstitle.webp?sign=00961b1d17f5be7406891b0cb5b0fae4&t=1701760559',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AGdDli'

            },
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-04%20%E6%8B%B7%E8%B4%9D.webp?sign=d97eca4d8c278b6765e606d67c4ff139&t=1701784051',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/A8LiLz'

            },
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-05%20%E6%8B%B7%E8%B4%9D.webp?sign=7f6b2b2ded1613161a11a837eaf27112&t=1701784062',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AijMjH'

            },
            
          ]
        },
        
      ]
    },
    mtvData:{
      bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/videoBg.webp?sign=adc9e3d74959d8fd282cb8fae51d3ca9&t=1701760475',
      mtvItem:[
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-09%20%E6%8B%B7%E8%B4%9D.webp?sign=e35bc6d37d84b596164664a973e27ca9&t=1701784985',
          mp4item:[
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/nqdqj.webp?sign=1e6a8bf04504070764f27cd84b17eb59&t=1701785018',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AYK3WC'

            },
            
            
          ]
        },
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-13%20%E6%8B%B7%E8%B4%9D.webp?sign=4103447a2778992c6a2c405b04ea07a6&t=1701785880',
          mp4item:[
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-08%20%E6%8B%B7%E8%B4%9D.webp?sign=eea9990cb1f16923b2ce5158a544bf75&t=1701785028',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AdB2wg'

            },
            
            
          ]
        },
        
      ]
    },
    xuanchuanData:{
      bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/videoBg.webp?sign=adc9e3d74959d8fd282cb8fae51d3ca9&t=1701760475',
      xuanchuanItem:[
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-11%20%E6%8B%B7%E8%B4%9D.webp?sign=0e2d00a4f39659e6c15d0fd9dca0a1be&t=1701785714',
          mp4item:[
            
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-12%20%E6%8B%B7%E8%B4%9D.webp?sign=67bc7dca6428c3a1c136f9a77b2b326f&t=1701785805',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/ATnzzO'

            },
            
          ]
        },
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-13%20%E6%8B%B7%E8%B4%9D.webp?sign=4103447a2778992c6a2c405b04ea07a6&t=1701785880',
          mp4item:[
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E8%A7%86%E9%A2%91-12%20%E6%8B%B7%E8%B4%9D.webp?sign=67bc7dca6428c3a1c136f9a77b2b326f&t=1701785805',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/Answoq'

            },
            
            
          ]
        },
        
      ]
    }
  },
  xx(e) {
    console.log(e)
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
          videoHeight: res.windowHeight
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