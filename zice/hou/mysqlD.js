const mysql=require('mysql')

module.exports=(spl,program=[])=>{
     let connextion=mysql.createConnection({
         host:"localhost",
         user:"root",
         password:"root",
         database:"quan"
     })
     connextion.connect((err)=>{
           if(err){
               console.log("链接失败",err)
           }else{
               console.log("链接成功")
           }
     })

     return new Promise((resolve,reject)=>{
         connextion.query(spl,program,(err,results)=>{
             if(err){
                 reject(err)
             }else{
                 resolve(results)
             }
             connextion.end()
         })
     })
}