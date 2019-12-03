#! /usr/bin/env node

const fs=require("fs");
const path=require("path");

// let oldFile=process.argv[2].slice(1);
// let newFile=process.argv[3].slice(1);

// fs.renameSync(path.join(process.cwd(),oldFile),path.join(process.cwd(),newFile))

//-arr html  index


let file=process.argv[2].slice(1);
let filePath=path.join(process.cwd(),file);

let list=fs.readdirSync(filePath);

let ind=0;
let reg=//;
list.forEach(item=>{
    
})









