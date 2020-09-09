const obj = {
    a:1,
    b:[1,2,3,4],
    c:{
        name:'test',
        age:12
    },
    d:function test() {
        console.log(123);
    }
}
const o = JSON.parse(JSON.stringify(obj))
console.log(o);

function deepCopy(object) {
    if (typeof object!='object') return
    let newObj = object instanceof Array?[]:{}
    for (let key in object) {
        if (object.hasOwnProperty(key)){
            newObj[key] = typeof object[key]==='object'?deepCopy(object[key]):object[key]
        }
    }
    return newObj
}

console.log(deepCopy(obj));