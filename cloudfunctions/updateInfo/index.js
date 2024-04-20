// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  let {
    OPENID
  } = cloud.getWXContext();
  const { nameT, companyT, numT } = event
  try {    
    await Promise.all([
      db.collection('user').where({
        openid: OPENID
      }).update({
        data: {
          nameT,
          companyT,
          numT,
          ifSetInfo: "true"
        },
      }),
    ])
    
    let [users] = await Promise.all([
      db.collection('user').where({
        openid:OPENID
      }).get(),
    ])
    let user = users.data
    
    return {
      success: true,
      data:{
        user
      }
    }

  } catch (error) {
    return {
      success: false,
      errMsg: error
    };
  }
}