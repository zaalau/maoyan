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
    let [ huiwuData ] = await Promise.all([
      db.collection('huiwuData').get(),
    ])
    let [ huizhanData ] = await Promise.all([
      db.collection('huizhanData').get(),
    ])
    let [ huizhanOtherPic ] = await Promise.all([
      db.collection('huizhanOtherPic').get(),
    ])
    return {
      success: true,
      data:{
        huiwuData,
        huizhanData,
        huizhanOtherPic
      }
    }

  } catch (error) {
    return {
      success: false,
      errMsg: error
    };
  }
}