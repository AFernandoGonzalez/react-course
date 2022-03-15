

class Person {
    //use property
    constructor(){
        this.name = 'Fer';
    }

    printName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printName();