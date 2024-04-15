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
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/hdsptlycsm.webp?sign=86e231b4d7e625d37fd35c6e0e080a69&t=1702979249',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/A6uQZf'
            },
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/tmxh.webp?sign=46878f1c089887f203a787aa27557869&t=1702979736',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/A6V3d2'
            },
          ]
        },
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/meitongtitle.webp?sign=81696ccadab83fbc7eca606c492bcb91&t=1702980933',
          mp4item:[
            
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/qdys.webp?sign=79e363a9ac347ce9fceb2d5fc61e4fc4&t=1702981286',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AAYMjs'

            },
          ]
        }
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
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/hzscssss.webp?sign=31f36087bbc48b6eece3a217810aaa7c&t=1703044752',
          mp4item:[
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/hdcy.webp?sign=7baff6ad477f1de182d47c6752b36844&t=1703044950',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AelJYs'

            },
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/mlxfhxj.webp?sign=467be64228e5fa3dc1de50dabbdb706d&t=1703045056',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AsaHRN'

            },
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/mlhdqy.webp?sign=cc9bd1f3e526a2eeed8fb9cdf8cb1f6b&t=1703045248',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AYG3AV'

            },
            
            
          ]
        },
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/xhqzhxzzfj.webp?sign=cb667050d31f26df07f0a6474d91a9c6&t=1703045392',
          mp4item:[
            
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/wxpqmlhd.webp?sign=6712d25df5c010832c7fc615178bdf4e&t=1703045433',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/ADSEzV'

            },
            
          ]
        },
        
        {
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/hzsw.webp?sign=7d226fdc2f115ea2d3af4194c25a001c&t=1703045696',
          mp4item:[
            
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/ecgs.webp?sign=732c3d1df0d8105aafa8ff6425fb8072&t=1703045709',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/A6JYD6'

            },
            
          ]
        },
      ]
    },
    duanshipinData:{
      bg:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/videoBg.webp?sign=adc9e3d74959d8fd282cb8fae51d3ca9&t=1701760475',
      duanshipinItem:[
        { 
          title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/fzsp.webp?sign=2bd4625541bff45006484314efc37b8b&t=1713167589',
          mp4item:[
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/fzxcynywydj.webp?sign=d82003da3578ec85128a780d9a3e7dc4&t=1713167738',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/AxFcPWzyY'

            },
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/wxbwbz.webp?sign=681d2fab0098699ce809b2f6b0f24366&t=1713167950',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/A4MmjHwsG'

            },
            {
              title:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/cqj.webp?sign=6638f55f4eb946967ea8b8e0dda8df64&t=1713167981',
              finderUserName:'sphpnCphXwj3q7h',
              feedId:'token/ApuADgm1A'
            },
            
          ]
        },
        
      ]
    },
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