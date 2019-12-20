const Koa=require('koa');
let app=new Koa();
const router=require('koa-router')();
const static=require('koa-static');
const path=require("path");
const bodyParser=require("koa-bodyparser")

let connextion=require("./mysqlD")


app.use(static(path.join(__dirname)))

app.use(bodyParser())
app.use(router.routes())

router.post("/login/getUser",async (ctx,next)=>{
    let {user}=ctx.request.body;
    let arr=await connextion("select * from login where user=?",[user]);
    ctx.body={
        code:1,
        msg:"拿到了",
        arr
    }
})

//登录验证
router.post("/login/de", async (ctx,next)=>{
    let {user,pwd}=ctx.request.body;
     try{
         let isHave= await connextion("select * from login where user=? and pwd=?",[user,pwd])
           if(isHave.length){
                ctx.body={
                    code:1,
                    msg:"登录成功",
                    isHave
                }
           }else{
            ctx.body={
                code:0,
                msg:"用户不存在或密码错误"
            } 
           }
     }catch(err){
        ctx.body={
            code:0,
            msg:"登录失败",
            err
        }
     }
})

//用户注册

router.post("/login/ce",async (ctx,next)=>{
  let {user,pwd,age=0}=ctx.request.body;
  console.log(user)
  try{
      let isHave=await connextion("select * from login where user=?",[user]);
      if(isHave.length){
            ctx.body={
                code:0,
                msg:"用户已存在"
            }
      }else{
          await connextion("insert into login (user,pwd,age) values (?,?,?)",[user,pwd,age]);
          ctx.body={
            code:1,
            msg:"添加成功"
        }
      } 

  }catch(err){
    ctx.body={
        code:0,
        msg:"注册失败",
        err
    }
  }
})

//修改密码
router.post("/login/xiuPwd",async (ctx,)=>{
    let {oldpwd,pwd,id}=ctx.request.body;
    try{
           await connextion("update login set pwd=? where id=? and pwd=?",[pwd,id,oldpwd])  
           ctx.body={
            code:1,
            msg:"修改成功"
           }
    }catch(err){
        ctx.body={
            code:0,
            msg:"修改失败",
            err
        }
    }
})

//删除用户  注销
router.post("/login/delete",async (ctx,next)=>{
    let {user}=ctx.request.body;
    try{
       await connextion("delete from login where user=?",[user])
        ctx.body={
            code:1,
            msg:"删除成功"
        }
    }catch(err){
        ctx.body={
            code:0,
            msg:"删除失败",
            err
        }
    }
})
 
//修改个人信息  用户名  年龄
router.post("/login/xiuXin",async (ctx,next)=>{
     let {id,user,age}=ctx.request.body;

     try{
       await connextion("update login set user=?,age=? where id=?",[user,age,id]);
        ctx.body={
            code:1,
            msg:"修改成功"
        }
        
     }catch(err){
        ctx.body={
            code:0,
            msg:"修改失败",
            err
        }
     }
})



app.listen(9090,()=>{
    console.log("启动成功")
})


