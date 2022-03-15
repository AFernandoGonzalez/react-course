//OLD VERSION

// class Human {
//     //1.
//     constructor(){
//         //2.
//         this.gender = 'Male';
//     }

//     //3.
//     printGender(){
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     //1. use property
//     constructor() {
//         // type super when extending from other class
//         super();
//         //2.
//         this.name = 'Fer';
//     }

//     //3.
//     printName() {
//         console.log(this.name);
//     }
// }


// const person = new Person();
// person.printName();
// person.printGender();


//NEW VERSION == ES6 / Babel
class Human {
    //1.
   gender = 'Male';

    //3.
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    //1. use property
    name = 'Fer';
    gender = 'Female';

    //3.
    printName = () => {
        console.log(this.name);
    }
}


const person = new Person();
person.printName();
person.printGender();