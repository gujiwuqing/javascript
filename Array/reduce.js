// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
const arr =[1,2,3,4]
console.log(arr.reduce((a,b)=>a+b));
const arr1 = [{x:1},{x:2},{x:3}]
var a = 0
var sum  =arr1.reduce((accumultaor,item)=>
    accumultaor+item.x
,a)
console.log(sum);