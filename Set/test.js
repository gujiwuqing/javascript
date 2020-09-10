const s = new Set()
    let arr = [1,2,3,3,4]
arr.forEach(item=>{
    s.add(item)
})
console.log(s);

const a = new Set([1,2,3,4,5,5])
console.log(a);
console.log([...a]);
console.log(Array.from(a));
console.log(a.size);
console.log(a.delete(1));
console.log(a);
console.log(a.has(2));
a.clear()
console.log(a);