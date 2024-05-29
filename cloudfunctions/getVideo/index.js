// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    let [ huodongData ] = await Promise.all([
      db.collection('huodongData').get(),
    ])
    let [ mtvData ] = await Promise.all([
      db.collection('mtvData').get(),
    ])
    let [ xuanchuanData ] = await Promise.all([
      db.collection('xuanchuanData').get(),
    ])
    let [ duanshipinData ] = await Promise.all([
      db.collection('duanshipinData').get(),
    ])
    return {
      success: true,
      data:{
        duanshipinData,
        xuanchuanData,
        mtvData,
        huodongData
      }
    }

  } catch (error) {
    return {
      success: false,
      errMsg: error
    };
  }
}