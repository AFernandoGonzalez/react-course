//Arrow Functions

//Normal JS Function:
function myFnc() {
}


//Arrow Func
const myFunc = () => {
}


//Valid for only one argument
const printName = name => {
    console.log(name)
}
printName('fer');


//Valid for more than 1 argument
const printInfo = (name, age) => {
    console.log(name, age)
}
printInfo('fer', 67);


//
const mul = (number) => {
    return number * 2;
}

console.log(mul(2))