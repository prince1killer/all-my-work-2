let p = new Promise((resolve,reject)=>{
    console.log("hello")
    setTimeout(()=>{
        console.log("this is excuation of promise");
        // resolve(45);
        reject(new Error("this is fail"))
    },5000)
})
console.log(p);