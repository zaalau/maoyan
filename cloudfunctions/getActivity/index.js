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
    let [ fabuhuiData ] = await Promise.all([
      db.collection('fabuhuiData').get(),
    ])
    let [ kaiyeData ] = await Promise.all([
      db.collection('kaiyeData').get(),
    ])
    let [ wanhuiData ] = await Promise.all([
      db.collection('wanhuiData').get(),
    ])
    let [ yanlianData ] = await Promise.all([
      db.collection('yanlianData').get(),
    ])
    let [ activityOthers ] = await Promise.all([
      db.collection('activityOthers').get(),
    ])
    let [ activityVideo ] = await Promise.all([
      db.collection('activityVideo').get(),
    ])

    return {
      success: true,
      data:{
        yanlianData,
        wanhuiData,
        kaiyeData,
        fabuhuiData,
        activityOthers,
        activityVideo
      }
    }

  } catch (error) {
    return {
      success: false,
      errMsg: error
    };
  }
}