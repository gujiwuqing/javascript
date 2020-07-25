// for循环
const arr = [1,2,3,4,5]
for (let i = 0; i <arr.length ; i++) {
    if (i===2){
        break
    }
    // console.log(arr[i]);
}


//foreach方法
arr.forEach(item=>{
    // console.log(item)
})

//every
arr.every(item=>{
    // console.log(item);
    return true
})

//for of
for (const number of arr) {
    console.log(number);
}