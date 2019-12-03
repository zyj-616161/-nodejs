#! /usr/bin/env node

const path=require('path');
const fs=require('fs');

let file=process.argv[2].slice(1);
// console.log(file)


loop(file)
function loop(file){
    let filePath=path.join(process.cwd(),file);

    if(fs.existsSync(filePath)){
        // console.log("路径存在")
        if(fs.statSync(filePath).isDirectory()){
            let list=fs.readdirSync(filePath);
            list.forEach(item=>{
                loop(path.join(file,item))
            })
        }else{
            let extname=path.extname(file).slice(1);//格式
            let size=fs.statSync(filePath).size;
            console.log(`${file}--${extname}--${size}`);
        }
    }else{
        console.log("路径不存在")
    }
}




