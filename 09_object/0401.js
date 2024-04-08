// function Person ( name, std){
//     this.name = name
//     this.std = std
// }

// const student = new Person('raj', 6)
// console.log(student.name)


const Person = {
    name: 'raj',
    id: 2,
    std: 3
}

const obj = Object.entries(Person)
console.log(obj)