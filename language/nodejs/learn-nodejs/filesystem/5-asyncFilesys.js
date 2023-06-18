const fs = require("fs")
fs.writeFile("language/nodejs/learn-nodejs/newfile.js","console.log('hello new file');",(err)=>{
    console.log("file is created");
})