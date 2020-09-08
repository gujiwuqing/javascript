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

function test1() {

}