//var numbers = [1, 1, 2, 3, 5, 8];
//var max = Math.max(...numbers);
//console.log(max)

let numbers=process.argv.slice(2)
let minimum=Math.min(...numbers)
console.log(`The minimum of [${numbers}] is ${minimum}`) 