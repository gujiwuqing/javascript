class Person {
    constructor(name,age,sex) {
        this.name = name
        this.age = age
        this.sex = sex
    }
}
const xiaoming = new Person('xioming',18,'男')
console.log(xiaoming);

class student extends Person{
    constructor(name) {
        super(name);
        this.name = name
        this.age = 17
        this.sex='女'
    }
}
const le = new student('test')
console.log(le);