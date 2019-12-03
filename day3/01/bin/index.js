#! /usr/bin/env node

const app=require("../server/app")

const argv=process.argv.slice(2);

const package=require("../package.json");



let prot=8080;


if(argv[0]==="-v" || argv[0]==="--version"){
   console.log(package.version)
}else{
    prot=argv[0] ? argv[1] : 8080;
}
app.listen(prot,()=>{
    console.log("启动成功")
})