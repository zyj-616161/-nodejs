#! /usr/bin/env node

// console.log("trans")

//引入commander
let proamg=require("commander");

//引入inquirer
const inquirer=require("inquirer");

const superagent =require("superagent");
const pro=require("superagent")
let package=require("../package.json")
let proList=[
    {
        type:"input",
        massage:"请输入单词:",
        name:"name",
    }
]

proamg
 .version(package.version)
 .action(()=>{
     inquirer.prompt(proList).then((val)=>{
         let txt=val.name;
        // console.log(txt)
        //superagent  get方法请求接口  参数是q
         superagent
            .get(`http://fanyi.youdao.com/openapi.do?keyfrom=toaijf&key=868480929&type=data&doctype=json&version=1.1`)
            .query({q:txt})
            .end((err,res)=>{
                   console.log(txt)
                   console.log(res.body.translation[0])
            }) 
     }) 
 })
 proamg.parse(process.argv)