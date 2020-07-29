const arr = [1,2,3,4,5,6,7]
const arr1 = arr.filter(item=>item>3)
console.log(arr1)
const arr2 = [{isNaN: true}, {isNaN: false}, {isNaN: false}, {isNaN: true}, {isNaN: true}]
const arr3 = arr2.filter(item=>item.isNaN)
console.log(arr3);