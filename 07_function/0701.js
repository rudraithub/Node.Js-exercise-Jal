
// function name(lanme){
//     return this.name + " " + lanme
// }

// const person = {
//     name: 'Ram',
// }

// const fname = name.call(person, 'jal')
// console.log(fname)


// function name(lanme){
//     return this.name + " " + lanme
// }

// const person = {
//     name: 'Ram',
// }

// const fname = name.apply(person, ['jal'])
// console.log(fname)


// function name(lanme){
//     return this.name + " " + lanme
// }

// const person = {
//     name: 'Ram',
// }

// const fname = name.bind(person, 'jal')
// console.log(fname())


/* factorial number */

let a = 1
let b = 5

function h(){
    for (let index = 1; index <=5; index++){
        a *= index
    }
    console.log(a);
}

h()