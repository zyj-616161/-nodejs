const fs=require('fs');

module.exports=()=>{
    return async (ctx,next)=>{
       let startTimer=new Date().getTime()
       await next()
       let endTimer=new Date().getTime()
       //时间
       let timer=endTimer-startTimer;
        //格式
        let path=ctx.request.path;
        //请求方式
        let method=ctx.request.method;
        //响应状态
        let status=ctx.response.status;
        
       fs.appendFileSync('./Rizhi.log',path+"--"+method+"--"+status+"--"+timer+"\n")
    } 
}