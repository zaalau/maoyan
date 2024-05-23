// pages/miniP/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // minipData: [

    //   {
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/minipzk.webp?sign=deb5e4074639f7ed1d3495f4c7de6d26&t=1713418387',
    //     cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/coverzk.webp?sign=c5abc4da52abe42db5e7713c9329a9a7&t=1713608358',
    //     finderUserName: 'sphpnCphXwj3q7h',
    //     feedId: 'token/A69dBAN0f'
    //   },
    //   {
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/miniphd.webp?sign=6db12a54c22d45a1e9339978ce69f7ca&t=1713419728',
    //     cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/coverhd.webp?sign=0a598f77bab9d3494d9fb87f3c221041&t=1713608374',
    //     finderUserName: 'sphpnCphXwj3q7h',
    //     feedId: 'token/AAJ8xE9xS'
    //   },
    //   {
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/minipnq.webp?sign=ae25851db28c471534cb2959ab4b49b5&t=1713419754',
    //     cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/covernq.webp?sign=ee9d96463793f68048f0a97514a07efb&t=1713608392',
    //     finderUserName: 'sphpnCphXwj3q7h',
    //     feedId: 'token/AHBJdlVMM'
    //   },
    //   {
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/miniphz.webp?sign=95a85f0349406baed5b413e464f7a378&t=1713419740',
    //     cover:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/coverhz.webp?sign=e40ca852abb3c565f1d0cb4e8bbf4d77&t=1713608404',
    //     finderUserName: 'sphpnCphXwj3q7h',
    //     feedId: 'token/A2KbB4IpH'
    //   }
    // ]
  },
  xx(e) {
    console.log(e)
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
    wx.cloud.callFunction({
      name: 'getMiniP',
      success: res => {
        console.log(res)  
        const minipData = res.result.data.minipData.data
        this.setData({
          minipData
        })
        wx.hideLoading()

      },
      fail: (err) => {
        console.error(err);
      }
    });
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