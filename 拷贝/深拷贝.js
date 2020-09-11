const obj = {
    a: 1,
    b: [1, 2, 3, 4],
    c: {
        name: 'test',
        age: 12
    },
    d: function test() {
        console.log(123);
    }
}
const o = JSON.parse(JSON.stringify(obj))
console.log(o);


//深拷贝简易版
function deepCopy(object) {
    if (typeof object != 'object') return
    let newObject = Object.prototype.toString.call(object)==="[object Object]"?{}:[]
    for (let key in object) {
        if (object.hasOwnProperty(key)){
            newObject[key] = Object.prototype.toString.call(object[key])==="[object Object]"?deepCopy(object[key]):object[key]
        }
    }
    return newObject
}

console.log(deepCopy(obj));