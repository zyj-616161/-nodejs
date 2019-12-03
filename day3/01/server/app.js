const Koa=require("koa");
const app=new Koa();
const path=require("path")
const fs=require("fs")

const static=require("koa-static");
let arr=fs.readdirSync(process.cwd())



app.use(static(process.cwd()))

// console.log(process.cwd())

// app.use(async (ctx,next)=>{
// //    console.log(ctx.path)  //不解析参数
// //    console.log(ctx.url)   //解析参数

//   let startTime=new Date().getTime()
//    console.log("第一层开始")
//    await next()
//    console.log("第一层结束")
//    let endTime=new Date().getTime()
//    let timer=endTime-startTime;
//    console.log(timer);

// })
// app.use(async (ctx,next)=>{
//     console.log("第二层开始")
//     await next()
//     console.log("第二层结束")
//  })
//  function deflay(){
//      return new Promise((reslove,reject)=>{
//            setTimeout(()=>{
//               reslove("hahahah")
//            },1000)
//      }).then((res)=>{
//          console.log(res) 
//      })
//  }
//  app.use(async (ctx,next)=>{
//     console.log("第三层开始")
//     await deflay()
//     // let info=await deflay();
//     // console.log(info)
//     console.log("第三层结束")
//  })

module.exports=app;
