const obj = {a:1}
const obj1 =Object.assign({},obj)
console.log(obj1);

//合并
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };
const o4 = Object.assign({},o1,o2,o3)
console.log(o4);

//继承属性和不可枚举属性是不能拷贝的
const obj2= Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
})

const obj3 = Object.assign({},obj2)
console.log(obj3);

