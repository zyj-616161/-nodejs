const _=require("lodash");
const ps=require("current-processes");


function render(){
ps.get(function(err,processes){
     let sorted=_.sortBy(processes,'cpu');
     let top5=sorted.reverse().splice(0.5);
     //top5   cpu使用率
    //  console.log(top5)
    let list=top5.map(v=>v.cpu)
    let xName=top5.map(v=>v.name)
    var blessed = require('blessed')
     , contrib = require('blessed-contrib')
     , screen = blessed.screen()
     , line = contrib.line(
         { style:
           { line: "yellow"
           , text: "green"
           , baseline: "black"}
         , xLabelPadding: 3
         , xPadding: 5
         , label: 'CPU'})
     , data = {
         x: xName,
         y: list
      }
   screen.append(line) //must append before setting data
   line.setData([data])
 
   screen.key(['escape', 'q', 'C-c'], function(ch, key) {
     return process.exit(0);
   });
 
   screen.render()
})
}

// render()
setInterval(render,1000)

module.exports=render



   



