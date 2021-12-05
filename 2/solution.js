const fs = require('fs')
  
const data = fs.readFileSync('./input.txt').toString("utf-8").split("\n").map(n => {
  const split = n.split(" ")
  return {command: split[0], amount: split[1]}
})

console.log(data)

let depth = 0
let horPos = 0
let aim = 0

for (let i = 0; i < data.length; i++){
  switch (data[i].command){
    case 'forward':
      horPos += Number(data[i].amount)
      depth += Number(aim) * Number(data[i].amount)
      break;
    case 'down':
      aim += Number(data[i].amount)
      break;
    case 'up':
      aim -= Number(data[i].amount)
      break;
  }
}

console.log(aim)


console.log(depth * horPos)
