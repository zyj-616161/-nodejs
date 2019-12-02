#! /usr/bin/env node 

// console.log(process.argv[2]+"你好")

let program=require("commander");
let inquirer=require('inquirer');

// program
// .version("1.2.0")
// .option('-a,--add')
// .option("login,--login")
// .parse(process.argv)

// if(program.a){ console.log("aaa")}
// if(program.login){
//     console.log("login")
// }


//判断登录
// const promptList = [
//     {
//         type: 'input',
//         message: '设置一个用户名:',
//         name: 'name',
//         default: "test_user" // 默认值
//     },{
//         type: 'password',
//         message: '设置一个用户名:',
//         name: 'pwd'
//     }
// ];
// let userList=[
//     {
//         user:"zyj",
//         pwd:"123"
//     }
// ]
// program
//  .version('1.2.3')
//  .option('login,--login')
//  .action((path,cmd)=>{
//      inquirer.prompt(promptList).then(answers=>{
//          let isSucceed=userList.some(v=>v.user===answers.name&&v.pwd===answers.pwd);
//          console.log(answers)
//          if(isSucceed){
//              console.log("登录成功")
//          }else{
//              console.log("用户名或者密码有误")
//          }
//      })
//  })

//  program.parse(process.argv)

//写入信息
let userList=require("./userList.json")
const fs=require('fs');
const promptList=[
    {
        type:"input",
        message:"设置一个用户名：",
        name:"name",
        default:"test_user"
    },
    {
        type:"password",
        message:"设置一个密码：",
        name:"pwd",
    },
    {
        type:"input",
        message:"请输入你的身份证号：",
        name:"identity",
        // validate:(val)=>{
        //     console.log(val,'1')
        //     let reg=/^\d{3}$/;
        //     if(!reg.test(val)){
        //         console.log(val,'2')
        //         return "身份证号格式有误"
        //     }else{
        //         return val
        //     }                                
            
        // }
    }
]

program
  .version('1.2.3')
  .option('login,--login')
  .action(()=>{
      if(process.argv[2]==="login"){
          inquirer.prompt(promptList).then(answers=>{
            //   console.log(answers)
              let isSucceed=userList.some(v=>v.identity===answers.identity);
              if(isSucceed){
                  console.log("身份证已存在")
              }else{
                  userList.push(answers)
                  userList=userList
                 fs.writeFileSync('./userList.json',JSON.stringify(userList))
                 console.log("成功")
              }
          })
      }
      
  })

  program.parse(process.argv)

