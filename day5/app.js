const Koa=require("koa");
const static=require('koa-static');
const path=require("path")
const router=require("koa-router")();
const bodyParser=require("koa-bodyparser")

let connection=require("./query/index")

let app=new Koa();

//静态资源
app.use(static(path.join(process.cwd(),"public")))
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods)

// router.get('/getList',(ctx,err)=>{
//     console.log(ctx.query)
//     ctx.body=[1,2]
// })

// router.post('/postList',(ctx,err)=>{
//     console.log(ctx.request.body)
//     ctx.body={
//         code:0,
//         msg:"可快速开始看看"
//     }
// })

/*
 * 查看数据
 */
// router.get('/list',async (ctx,err)=>{
//     // ctx.body=[1,2]
//     //尝试执行
//     try{
//         let list=await connection("select * from biao1");
//             ctx.body={
//                 code:1,
//                 msg:"成功",
//                 data:list
//             } }
//     catch(err){
//         ctx.body={
//              code:0,
//              msg:"错误"
//         } 
//     }
// })

/*
 * 添加数据
 */

// router.get('/list/add',async (ctx,err)=>{
//     let {username,password}=ctx.query;
//     // console.log(username,password)
//     let isUser=await connection("select * from biao1 where user=?",[username]);
//     // console.log(isUser)
//     if(isUser.length){
//         ctx.body={
//             code:"2",
//             msg:"用户名已存在"  
//         }
//     }else{
//          try{
//             await connection("insert into biao1 (user,pwd) values (?,?)",[username,password])
//             ctx.body={
//                 code:"0",
//                 msg:"添加成功"
//             }
//          }catch(err){
//              ctx.body={
//                  code:"1",
//                  msg:"添加失败"
//              }
//           }
//     }
// })
/**
 * 删除数据
 */
// router.post('/list/delete',async (ctx,err)=>{
//     let {id}=ctx.request.body;
//     if(id){
//         try{
//             // console.log([Number(id)])
//             await connection('delete from biao1 where id=?',[id])
//             ctx.body={
//                 code:0,
//                 msg:"删除成功"
//             }
//         }catch(err){
//             // console.log(e)
//             ctx.body={
//                 code:1,
//                 msg:"删除失败",
//                 err
//             }
//         }
    
//     }else{
//         ctx.body={
//             code:1,
//             msg:"请输入id"
//         }
//     }
// })

app.listen(8080,()=>{
    console.log("启动成功")
})