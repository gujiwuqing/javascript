const arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]

function quchong(array) {
    return Array.from(new Set(array))
}

console.log(quchong(arr));

function f1(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1)
                j--
            }
        }
    }
    return array
}

console.log(f1(arr));

function f2(array) {
    return array.filter((item, index, array) => {
        return array.indexOf(item, 0) === index
    })
}

console.log(f2(arr));