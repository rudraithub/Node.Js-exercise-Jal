
function name(){
    return this.name
}

const person = {
    name: 'Ram',
}

const fname = name.call(person, 'jal')
console.log(fname)