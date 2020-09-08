const numbers = [1,2,3,4,5]
const max = Math.max.apply(null,numbers)
console.log(max);


//用 apply 将数组各项添加到另一个数组
var array  = ['a','b']
var elements = [0,1,2]
// array.push.apply(array,elements)

array.push(...elements)

console.log(array);
