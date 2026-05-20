const arr = [1,2,3,4,5]
let x = arr.reduce((acc,current)=>{console.log(`acc= ${acc},current= ${current}`);return current+acc},0)
console.log(x);