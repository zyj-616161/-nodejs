// const mysql=require("mysql")


// module.exports=(val,pro=[])=>{
//     //创建链接
//     const connection=mysql.createConnection({
//         host:'localhost',
//         user:"root",
//         password:"root",
//         database:"zyj_num"
//     })
//     connection.connect((err)=>{
//        if(err){
//            console.log("数据库连接失败")
//        }else{
//           console.log("数据库连接成功")
//        }
//     })
//     //增 删 改 查 操作 
//     return new Promise((reslove,reject)=>{
//         connection.query(val,pro,function(err,results){
//             if(err){
//                 reject(err)
//             }else{
//                 reslove(results)
//             }
//             //关闭链接
//             connection.end()
//         })
//     })
// }




const mysql=require("mysql");

module.exports=(type,val=[])=>{
     let connection=mysql.createConnection({
         host:"localhost",
         user:"root",
         password:"root",
         database:"zyj_num"
     })

     connection.connect((err)=>{
         if(err){
             console.log("链接失败")
         }else{
            console.log("链接成功")
         }
     })
      
     return new Promise((resolve,reject)=>{
         connection.query(type,val,(err,results)=>{
             if(err){
                 reject(err)
             }else{
                 resolve(results)
             }
             connection.end()
         })
     })
}

