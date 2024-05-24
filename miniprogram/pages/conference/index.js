// pages/conference/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whosbeenchoosed: 'huiwu',
    jiedaiData:{
      bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/jiedaiBg.webp?sign=dbdd7bd2cfcdb3c64da3b383bb65f2cf&t=1701701731',
      picItem:[
        {
          src:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaosite1.webp?sign=dfd07c0c36fe2c810ff1499c86b63259&t=1701757600",
          top:236,
          left:37
        },
        {
          src:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaosite2.webp?sign=d149d6c2217cdc2291f2f724f9763fed&t=1701757618",
          top:580,
          left:77
        },
        {
          src:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/kaosite3.webp?sign=d8429ec0cb99ee99408ddf155ad2b96b&t=1701757626",
          top:920,
          left:37
        },
      ]
    },
    // huiwuData:[
    //   {
    //     type: 'right',
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwubg1.webp?sign=971dcf515e9de77dd18e82c23419661d&t=1701795036',
    //     bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwubig1.webp?sign=b3d709ee9bd40d0e095ada89ad370b4f&t=1701795047',
    //     fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwufir2-1.webp?sign=2b518974ec9fa8d4aadd53ed7a4f6c13&t=1701795053",
    //     sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwusec1-1.webp?sign=b273889c410caead18fefe234d530c9d&t=1701795059',
    //     sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwusec2-1.webp?sign=2a2de5c39e0f669abf849d86224b1fee&t=1701795065',
    //     sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwusec3-1.webp?sign=947b6969aea5b8d37c3178d9dd3cf47a&t=1701795071',
    //   },
    //   {
    //     type: 'left',
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwubg2.webp?sign=6a358ebb92f31935f35189709eca7547&t=1701795167',
    //     bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwubig2.webp?sign=6d9934fb601ce8156361fa124cdf0cb6&t=1701795174',
    //     fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwufir2-2.webp?sign=ad0647c159d783daef44da30b9697a9f&t=1701795180",
    //     sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwusec1-2.webp?sign=7574001781ecf6d1a2ad55e17438bd9f&t=1701795186',
    //     sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwusec2-2.webp?sign=ae61562e5fe2e3c99f8268a3d3f2a1a4&t=1701795192',
    //     sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huiwusec3-2.webp?sign=a01e936e83ad283b8d02bde5a9692413&t=1701795198',
    //   },
    // ],
    // huizhanData:[
    //   {
    //     type: 'right',
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanbg1.webp?sign=5150e52c23c747f410c173ecd94d6e2d&t=1701795699',
    //     bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanbig1.webp?sign=45541ea7fda093d2837ec11190fef0b2&t=1701795718',
    //     fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanfir2-1.webp?sign=7330a80feeb6e90632b8c1a02ebdc7a4&t=1701795724",
    //     sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec1-1.webp?sign=0ea27bb011cac5c4874d2180b915d140&t=1701795730',
    //     sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec2-1.webp?sign=5aa60fd8e846ae6bd71b2c7d4d86d25d&t=1701795735',
    //     sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec3-1.webp?sign=841c1078c9f698552179ea2c9ee09b04&t=1701795741',
    //   },
    //   {
    //     type: 'left',
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanbg2.webp?sign=f89ce69f3d4695c33805854dca47bb8e&t=1701795841',
    //     bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanbig2.webp?sign=7ed03eecd3ce8b701ec7773aab6c9952&t=1701795852',
    //     fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanfir2-2.webp?sign=0c791c0d9b45f0e544ef64bf0d4711d4&t=1701795858",
    //     sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec1-2.webp?sign=67f2870c9350daf914fb3af6e5e47061&t=1701795865',
    //     sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec2-2.webp?sign=06af7dbcbdaa5206f347751d500db82e&t=1701795871',
    //     sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec3-2.webp?sign=1d9dc8b981e269ca726973a48f6e6346&t=1701795878',
    //   },
    //   {
    //     type: 'right',
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanbg3.webp?sign=dbdf8830618340f14200d290ff40dace&t=1701795991',
    //     bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanbig3.webp?sign=9e5f1f31e2b221192b5d988750ce9723&t=1701795998',
    //     fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhanfir2-3.webp?sign=e5ac047f2bf5db25b6c61a0f17482421&t=1701796005",
    //     sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec1-3.webp?sign=7c9a99c14d755b6d6b408e822c02e939&t=1701796013',
    //     sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec2-3.webp?sign=3076fe8d262e7b9e391906d3ad4b28ee&t=1701796019',
    //     sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/huizhansec3-3.webp?sign=eed1dbfa8844d4f46cc06ffc9648105e&t=1701796026',
    //   },
    //   {
    //     type: 'left',
    //     bg: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E7%BE%8E%E5%A6%86%E5%BA%95%E5%9B%BE.webp?sign=0d9dfef8c7273cd2b2068e4c70fe8a4a&t=1714371607',
    //     bigPic:'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E7%BE%8E%E5%A6%86big.webp?sign=20d3a60db2121ae8a57d836cc5a8c313&t=1714371616',
    //     fir2:"https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E7%BE%8E%E5%A6%86fir2.webp?sign=735c349f3119010340eca81f0cb8e24b&t=1714371626",
    //     sec1: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E7%BE%8E%E5%A6%86sec1.webp?sign=c0eb471314ee2e299c40d84f7643257d&t=1714371635',
    //     sec2: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E7%BE%8E%E5%A6%86sec2.webp?sign=1674736389a3d78ae8695953e24477d8&t=1714371644',
    //     sec3: 'https://636c-cloud1-2g8e8bgqa13910e9-1321771972.tcb.qcloud.la/%E5%B7%B2%E5%8E%8B%E7%BC%A9/%E7%BE%8E%E5%A6%86sec3.webp?sign=5e0ee16cb18456854abc85b2ad99bcca&t=1714371655',
    //   },
      
     
    // ],
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
    wx.cloud.callFunction({
      name: 'getConference',
      success: res => {
        console.log(res)  
        const huiwuData = res.result.data.huiwuData.data
        const huizhanData = res.result.data.huizhanData.data
        const huizhanOtherPic = res.result.data.huizhanOtherPic.data[0]


        this.setData({
          huiwuData,
          huizhanData,
          huizhanOtherPic
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