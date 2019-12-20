function play(timer,key){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
              let newKey=key+1;
              resolve(newKey)
          },timer)
    })
}

async function fn() {
   let k1= await play(1000,1)
   console.log("k1",k1)
   let k2= await play(1000,k1)
   console.log("k2",k2)
   let k3= await play(1000,k2)
   console.log("k3",k3)
} 
fn()