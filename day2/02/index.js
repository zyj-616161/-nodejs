#! /usr/bin/env node

const program = require('commander');
let num=null;
program
 .version("1.2.1","-v,--version")
 .option("-p")
 .action(()=>{
     if(!process.argv[2]){
         num=8080;
     }else if(process.argv[2]==="-p"){
        num=Number(process.argv[3])
     }
 })
 program.parse(process.argv)

 let http=require("http");
 let url=require("url")
 let fs=require("fs")

let sv=http.createServer((req,res)=>{
    res.end(fs.readFileSync('./a.html'))  
})
sv.listen(num,()=>{
    console.log("启动成功")
})


