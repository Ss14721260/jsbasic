// const Score=400
// console.log(Score) //output will be 400
// const balance=new Number(100) 
// console.log(balance)  //output will be [Number:100]
// console.log(balance.toString(),balance.length) //output is 100 undefined because toString is Temporary
// console.log(balance.toString().length,balance.toString()) //output will be 3 100

const mrp=103.4
console.log(mrp.toFixed(2))    
console.log(typeof mrp)
console.log(mrp.toPrecision(8))

const retail=mrp.toFixed(0)
console.log(retail)
console.log(Number.isNaN()) //false