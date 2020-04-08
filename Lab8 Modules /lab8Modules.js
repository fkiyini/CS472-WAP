/* 
Question  6. Consider the following definition of an add()function to increment a counter variable:
var add = (function()   {
    var counter = 0;
    return function ()  {
            return counter +=1;
            }
}());
Modify the above module to define a counter object with two methods: add() and reset(). 
The count.add() method adds one to the counter(as above). The count.reset() method sets the counter to 0.
*/

const counterRMP = (function () {
    let counter = 0;
    function add(inc) {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add,
        reset: function () {
            reset();
        },
        counter: function () {
            return counter;
        }
    }
})();
console.log('Using Revealing Module Approach to increment by inc');
console.log("before anything is done..." + counterRMP.counter());
counterRMP.add(10);
console.log("After incrementation..." + counterRMP.counter());
counterRMP.reset();
console.log("After reset..." + counterRMP.counter());
/* Using module factory approach */
const counterMF = function () {
    let counter = 0;
    function add() {
        counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add,
        reset: reset,
        counter: function () {
            return counter;
        }

    }
};
console.log('Using module factory approach');
const myCountMF = counterMF();
myCountMF.add();
console.log("count " + myCountMF.counter());
myCountMF.reset();
console.log("count " + myCountMF.counter());

/* 
Question  7. In the definition of add() Shown in question 6, identify the free variable. In context of a function closure 
what is a "free" variable?
*/

console.log(" counter is a FREE variable");
console.log("a FREE variable is are variable used by the closure and is NOT among its parameters nor its local variables");

/* 
Question  8 The add() function defined in question 6 always adds 1 to the counter each time it is called. Write 
a definition of a function maker_add(inc), whose return value is an add funtion with increment value inc
(instead of 1) Here is an example of using this function.

add5 = make_adder(5);
add5(); add5(); add5(); // final counter value is 15

add7 = make_adder(7);
add7(); add7(); add7(); // final counter value is 21
*/
const make_adder = function (val) {
    let counter = 0;
    function add() {
        counter += val;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add,
        reset: reset,
        counter: function () {
            return counter;
        }
    }
};

console.log('Make adder using Module Pattern');
const add5 = make_adder(5);
add5.add(); add5.add(); add5.add();
console.log(add5.counter());

const add7 = make_adder(7);
add7.add(); add7.add(); add7.add();
console.log(add7.counter());

/* 
Question  9. Suppose you are given a file of Javascript code containing a list of many fuction and variable declarations. 
All of these fuction and variable names will ba added to the Global JavaScript namespace. 
What simple modification to the Javascript file can remove all the names from the Global namespace?
*/

console.log("Module Pattern");

/* 
Question  10. Using the Revealing Module Pattern, Write a Javascript definition of a Module that creates an Employee Object
with the following fields and methods:
*/

const Employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0.0;

    function setAge(newAge) {
        age = newAge;
    }
    function setSalary(newSalary) {
        salary = newSalary;
    }
    function setName(newName) {
        name = newName;
    }
    function getAge() {
        return age;
    }
    function getSalary() {
        return salary;
    }
    function getName() {
        return name;
    }
    function increaseSalary(percentage) {
        newSalary = getSalary() + (getSalary() * percentage / 100);
        setSalary(newSalary);
    }
    function incrementAge() {
        setAge(getAge() + 1);
    }
    return {
        getName: getName,
        getAge: getAge,
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();

console.log('Employee object');
Employee.setName('Farouk Kiyini');
Employee.setAge(35);
Employee.setSalary(150000)
console.log("Name: " + Employee.getName() + " Age: " + Employee.getAge());
//Employee




/* Question 11 */
Employee.address = "";
// another method! (Q: public or private? public)
Employee.getAddress = function () {
    return Employee.address;
};
Employee.setAddress = function (newAddress) {
    Employee.address = newAddress;
};

Employee.setAddress("Nashiville Tenese");
console.log("Name: " + Employee.getName() + " Age: " + Employee.getAge() + " Address: " + Employee.getAddress());


const Employee1 = function () {
    let name1 = "";
    let age1 = 0;
    let salary1 = 0.0;

    function setAge1(newAge1) {
        age1 = newAge1;
    }
    function setSalary1(newSalary1) {
        salary1 = newSalary1;
    }
    function setName1(newName1) {
        name1 = newName1;
    }
    function getAge1() {
        return age1;
    }
    function getSalary1() {
        return salary1;
    }
    function getName1() {
        return name1;
    }
    function increaseSalary1(percentage1) {
        newSalary1 = getSalary1() + (getSalary1() * percentage1 / 100);
        setSalary1(newSalary1);
    }
    function incrementAge1() {
        setAge1(getAge1() + 1);
    }
    return {
        getName1: getName1,
        getAge1: getAge1,
        setName1: setName1,
        setAge1: setAge1,
        setSalary1: setSalary1,
        increaseSalary1: increaseSalary1,
        incrementAge1: incrementAge1
    }
};
const emp = Employee1();
emp.setName1('Farouk MINAOUR Kiyini');
emp.setAge1(37);
emp.setSalary1(180000)
console.log("Name: " + emp.getName1() + " Age: " + emp.getAge1());


emp.address1 = "";
// another method! (Q: public or private? public)
emp.getAddress1 = function () {
    return emp.address1;
};
emp.setAddress1 = function (newAddress1) {
    emp.address1 = newAddress1;
};

emp.setAddress1("FairField IOWA");
console.log("Name: " + emp.getName1() + " Age: " + emp.getAge1() + " Address: " + emp.getAddress1());





const Person = {
    name2: " ",
    setName2: function (name2) {
        this.name2 = name2;
    },
    getName2: function () {
        return this.name2;
    }
}

let p1 = Object.create(Person);
//p1.prototype.age2 = "";
/* p1.setAge2 = function (aga2) {
    this.age2 = age2;
}
p1.prototype.getAge2 = function () {
    return this.age2;
} */
p1.setName2("Sharifah");
//p1.setAge2("22");

// console.log (`${p1.getName2()} and aged ${p1.getAge2()}`);
console.log(`${p1.getName2()}`);



function Animal() {
    aName2 = " ",
        function setaName3(aname2) {
            this.aname2 = aname2;
        },
        function getaName3() {
            return this.aname2;
        }
}

/* let a1 = Object.create(Animal); */
Animal.prototype.age2 = "";
Animal.prototype.setAge3 = function (aga2) {
    this.age2 = age2;
}
Animal.prototype.getAge3 = function () {
    return this.age2;
}

const rabbit = new Animal();
rabbit.setaName3("Kamuje");

//Animal.setaName3("Kamuje");
Animal.setAge3("2");

console.log(`${Animal.getaName3()} and aged ${Animal.getAge3()}`);
 //console.log (`${p1.getName2()}`);