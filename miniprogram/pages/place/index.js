// pages/place/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed: 'lipin',
    changdiData:[
      
      {
        pagename:'kaiyuan',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyuantext.webp?sign=019ba2cc6831b7fc7821121b2def2851&t=1701679734',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaiyuanpic.webp?sign=7fe0f1ee27c6ddd8c20a5bcd7ff41275&t=1701679720',
        bgsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/changdibottombg.webp?sign=deea1b15893d06d843707a581002bbec&t=1701677901'
      },
      {
        pagename:'taixuhu',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/taixuhutext.webp?sign=7db048957e0ebf63e2c40d7319df4d8d&t=1701680566',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/taixuhupic.webp?sign=572e7050ba659b165e5ab38754692697&t=1701680601',
        bgsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/changdibottombg.webp?sign=deea1b15893d06d843707a581002bbec&t=1701677901'
      },
      {
        pagename:'baijinhanjue',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/baijinhantext.webp?sign=213b8fde666d8c63b0292a189d1da6e3&t=1701680614',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/baijinhanpic.webp?sign=953e6fc68105dd7ac5adf6c20f11ad69&t=1701680648',
        bgsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/changdibottombg.webp?sign=deea1b15893d06d843707a581002bbec&t=1701677901'
      },
      {
        pagename:'aoti',
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotitext.webp?sign=831ba22986805edbee58d22467d28f42&t=1701680659',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/aotipic.webp?sign=b3988433b07a093ac1d4582bbd6161a6&t=1701680668',
        bgsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/changdibottombg.webp?sign=deea1b15893d06d843707a581002bbec&t=1701677901'
      },
      {
        pagename:'lipin',
        lipinData:[
          {
            swiperItem:[
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E5%90%88%E4%BD%9C%E5%9C%BA%E5%9C%B0%E6%96%B0-13%20%E6%8B%B7%E8%B4%9D.webp?sign=11d892bec71844dd6328823fb277f777&t=1723701613',
              },
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E5%90%88%E4%BD%9C%E5%9C%BA%E5%9C%B0%E6%96%B0-14%20%E6%8B%B7%E8%B4%9D.webp?sign=d0d3edd3d2d7918d68883926ec6f8b93&t=1723701630',
              },
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E5%90%88%E4%BD%9C%E5%9C%BA%E5%9C%B0%E6%96%B0-15%20%E6%8B%B7%E8%B4%9D.webp?sign=79726daaa237d0b06b91e85ce36bd42a&t=1723701640',
              },
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper4.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
              },
            ],
            textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E5%90%88%E4%BD%9C%E5%9C%BA%E5%9C%B0%E6%96%B0-12%20%E6%8B%B7%E8%B4%9D.webp?sign=becc72e2f4f3b4395dabdd53dea45578&t=1723701525',
            picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E5%90%88%E4%BD%9C%E5%9C%BA%E5%9C%B0%E6%96%B0-16%20%E6%8B%B7%E8%B4%9D.webp?sign=a4d422228f6282222b0b9449094ebba0&t=1723701601',
            bgsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinbg.webp?sign=d8d5cfe33955c02697c2180609b481a1&t=1702958977'
          },
          {
            swiperItem:[
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper1.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
              },
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper2.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
              },
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper3.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
              },
              {
                src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper4.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
              },
            ],
            textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipintext.webp?sign=0796793bbb2308595381e1a3e36a8e77&t=1702531655',
            picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinbottompic.webp?sign=0f5b906cd7c28cf12c14724838a63db0&t=1702955628',
            bgsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinbg.webp?sign=d8d5cfe33955c02697c2180609b481a1&t=1702958977'
          }
        ],
        swiperItem:[
          {
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper1.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
          },
          {
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper2.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
          },
          {
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper3.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
          },
          {
            src:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinswiper4.webp?sign=215d42ce5a4c3f55f1ec3d770f2341f9&t=1702958784',
          },
        ],
        textsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipintext.webp?sign=0796793bbb2308595381e1a3e36a8e77&t=1702531655',
        picsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinbottompic.webp?sign=0f5b906cd7c28cf12c14724838a63db0&t=1702955628',
        bgsrc:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/lipinbg.webp?sign=d8d5cfe33955c02697c2180609b481a1&t=1702958977'
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

  setInputValue(e) {
    const keyname = e.currentTarget.dataset.keyname || e.target.dataset.keyname
    this.setData({
      [keyname]: e.detail.value.trim()
    })
  },
  updateInfo() {
    wx.vibrateShort()
    wx.showLoading()
    const { nameT, companyT, numT } = this.data
    console.log(nameT, companyT, numT)
    if( nameT!=''&&nameT!=undefined&&companyT!=''&&companyT!=undefined&&numT!=''&&numT!=undefined){
      wx.cloud.callFunction({
        name: 'updateInfo',
        data: {
          nameT,
          companyT,
          numT
        },
        success: res => {
          wx.hideLoading()
          console.log(res)        
          wx.showToast({
            title: '提交成功',
          })
          this.setData({
            nameT:'',
            companyT:'',
            numT:'',
            ifSetInfo: 'true'
          })
        },
        fail: (err) => {
          wx.hideLoading()
          console.error(err);
        }
      });
      
    }else {
      wx.showToast({
        title: '请完整填写',
        icon: 'error'
      })
    }
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