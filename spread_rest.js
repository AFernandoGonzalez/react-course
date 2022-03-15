//Lists
const number = [1,2,3];
const newNumbers = [...number, 4];
console.log(newNumbers);

//Objects
const person = {
    name: 'max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);