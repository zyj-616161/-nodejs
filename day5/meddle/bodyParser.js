
let qu=require("querystring")
function fn(ctx){
    return new Promise((resolve,reject)=>{
        let str="";
        ctx.req.on("data",(chuck)=>{
            str+=chuck;
        })
        ctx.req.on("end",()=>{
            resolve(qu.parse(str))
        })
    })
}

module.exports=()=>{
    return async (ctx,next)=>{   
        ctx.request.header["content-type"]="application/x-www-form-urlencoded"
        ctx.request.body=await fn(ctx);
        await next()
    }
}