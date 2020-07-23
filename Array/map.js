const arr = [
    {
        name:'test1',
        age:12,
        sex:'女'
    },
    {
        name:'test1',
        age:12,
        sex:'女'
    },
    {
        name:'test1',
        age:12,
        sex:'女'
    },{
        name:'test1',
        age:12,
        sex:'女'
    }
]
let arr1 = arr.map(item=>({
    name:item.name
}))
console.log(arr1)