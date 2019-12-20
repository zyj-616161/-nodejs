const Koa=require('koa');
let app=new Koa();

const router=require("koa-router")();
const static=require('koa-static');
const path=require("path");
let bodyParser=require("./meddle/bodyParser.js")
// let bodyParser=require("koa-bodyparser")
let connection=require("./query/index");
let getTimer=require("./meddle/getTimer")

//计算时间差
app.use(getTimer())

//静态资源
app.use(static(path.join(__dirname,"public")))


//接收参数
app.use(bodyParser())
console.log("aaaaaaa")
app.use(router.routes())

//查看
router.get("/list/look",async (ctx,err)=>{
    console.log("bbbbbbbbbbbbb")
    try{
        let {pagenum=0,limit=2}=ctx.query;
        console.log("look")
        let total=await connection("select count(*) from biao1")
        let list=await connection(`select * from biao1 limit ${pagenum*limit},${limit}`)
        ctx.body={
            code:0,
            msg:"查看成功",
            list,
            total:total[0]["count(*)"]
        }  
    }catch(err){
       ctx.body={
           code:1,
           msg:"查看失败",
           err
       }  
    }
})

//增
router.post('/list/add',async (ctx,err)=>{
    let {user,pwd}=ctx.request.body;

    try{
        if(user && pwd){
            //判断是否存在
            let isHave=await connection('select * from biao1 where user=?',[user])
            
            if(isHave.length){
                ctx.body={
                    code:2,
                    msg:"用户已存在",
                    isHave
                }  
            }else{
                let total=await connection("select count(*) from biao1")
              await connection('insert into biao1 (user,pwd) values (?,?)',[user,pwd])
               ctx.body={
                code:1,
                msg:"添加成功",
                total:total[0]["count(*)"]
            }  
            }
        }else{
            ctx.body={
                code:3,
                msg:"请输入user或pwd"
            }  
        }
    }catch(err){
        ctx.body={
            code:0,
            msg:"添加失败",
            err
        }  
    }
})


//删除
router.post('/list/delete',async (ctx,err)=>{
    let {id}=ctx.request.body;
    try{
       let isHave=await connection("select * from biao1 where id=?",[id])
       if(isHave.length){
        let total=await connection("select count(*) from biao1")
          await connection("delete from biao1 where id=?",[id])
           ctx.body={
               code:1,
               msg:"删除成功",
               total:total[0]["count(*)"]
           }
       }else{
        ctx.body={
            code:0,
            msg:"请输入正确的id"
        } 
       }
    }catch(err){
        ctx.body={
            code:0,
            msg:"删除失败",
            err
        }
    }
}) 

//改
router.post('/list/update',async (ctx,err)=>{
   let {user,pwd,id}=ctx.request.body;
   console.log(ctx.request.body)
   try{
      await connection("update biao1 set user=?,pwd=? where id=?",[user,pwd,id])
        ctx.body={
            code:1,
            msg:"更改成功"
        }
   }catch(err){
        ctx.body={
            code:0,
            msg:"更改失败",
            err
        }
   }
})


app.listen(9090,()=>{
    console.log("启动成功")
})

