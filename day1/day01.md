# day1   node npm git ssh  
  
#### npm  node package manager 缩写
     node 包管理器
     第三方包:bodyparser  express  glup...
     内置包:http url fs ...
     npm 命令  npm -v 版本号
       
     npm 管理包的那些方面
     下载   install/i
   
       1.本地下载
          安装本地开发依赖  devDependencies字段内
          npm i 包名 -D
          安装本地线上依赖  dependencies字段内
          npm i 包名 -S
       2.全局下载
          npm i 包名 -g
      
     更新   update 
       
        npm update 包名 （哪里下载哪里更）
     卸载   uninstall
    
     1.本地卸载  
       npm uninstall 包名 -D/-S
     2.全局卸载
       npm uninstall 包名 -g
     生成package.json 包描述文件
       npm init 
       npm init -y  快速生成
#### nodejs

   nodejs  commonjs规范
   
   1个js就是一个规范
   commonjs规范 
      抛出模块：
        module.exports 和 exports
        关系：exports是module.exports的别名
        区别：module.exports  后者覆盖前者
              export  以属性的形式添加，不能直接赋值
      引入模块：
         require（）默认会找module。exports   抛出的内容
         
#### npm 包查找规则
   require（模块标识）
   模块标识：
   1.路径（相对路径和绝对路径）
        1>相对路径 ./
        2>绝对路径  /  磁盘目录下
    
   2.包名 
     第一步：node_modules 文件的查找规则
     1>先当前文件夹下找
      =》一层一层向上找直到磁盘根目录 =》全局全局配置环境变量NODE_PATH 查找  
     报错：Error: Cannot find module '包名'
    第二步：
    
    1>先对应包名文件夹 --->  package.json  main字段  没有----> index.js
     npm root -g 是查看全局下载包的路径
     报错：不是内部外部命令：解决方法：找执行文件所在目录配置到全局环境变量的path下

   设置镜像源:
    国外：http://registry.npmjs.org/
    
    淘宝：https://registry.npm.taobao.org
    
    npm config set registry <镜像源地址> 设置镜像源地址
    
    npm config get registry 查看镜像源地址

    下载包的步骤：
    1)对应的镜像源查看是否存在执行包
    
    2)把指定的压缩包下载到指定的缓存目录下  npm config get cache
    
    3)把压缩包解压到指定目录  
    
    设置全局的解压目录：npm config set prefix <绝对路径>

#### npm config get prefix 
npm常用的命令
npm view <包名> versions 所有的版本

npm view <包名> version 最新的版本

npm search <包名>

#### 发包
    1.npm 镜像源必须是国外的
    
    2.必须要有package.json文件 name名一定不能和现有的包名重复
    
    3.新建入口文件 编写功能
    
    4.npm login
    
    5.npm publish
    
    6.npm unpublish <包名> --force 在24小时内发的包可以删除

git生成公钥和秘钥 ssh-keygen
github支持两种协议：https ssh

https : 每次提交代码，都需要输入用户名和密码

ssh ：配置公钥和秘钥
    

        
        
          
          