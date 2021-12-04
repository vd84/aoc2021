const fs = require('fs')
  
const nums = fs.readFileSync('./input.txt').toString("utf-8").split("\n").map(n => Number(n))

let total = 0
    for(let i = 0; i < nums.length; i++){
      if(nums.slice(i, i+3).reduce((a,b) => a+b, 0) < nums.slice(i+1, i+4).reduce((a,b) => a+b, 0)){
        total++
      }
    }

    console.log(total)
