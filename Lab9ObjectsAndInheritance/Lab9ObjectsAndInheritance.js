/* 1. Define a JavaScript object literal named, person, with the following specification:
        a. Person object should have the properties:
            i. name (initialize this with empty string value)
            ii. dateOfBirth (initialize this with empty string value)
        b. Person object should have the methods:
            i. getName (should return the value of the person’s name property)
            ii. setName (should take as input parameter, a String value which it sets as the person’s name) 

Given that someone named John IS-A person, applying JavaScript inheritance and the Object.create(…) method, create an object named, john, whose name property is set to the string, “John” and whose dateOfBirth property is set to the date, December 10th, 1998.

Print-out to the console, the information about the person named John, in the following format:
“The person’s name is John”
“John was born on 1998-12-10” */

let person = {
    name: '',
    dateOfBirth: '',
    getName: function () {
        return this.name
    },
    setName: function (newName) {
        this.name = newName;
    },
    getDateOfBirth: function () {
        return this.dateOfBirth
    },
    setDateOfBirth: function (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
};

let personOne = Object.create(person);
personOne.setName('John');
personOne.setDateOfBirth('1998-12-10');
console.log('The person’s name is ' + personOne.getName());
console.log(personOne.getName() + ' was born on ' + personOne.getDateOfBirth() );

/* 2. Given that an Employee IS-A person, applying JavaScript inheritance and the Object.create(…) method, create a generic object named, employee, with the following properties:
        a. Salary (initialize this with the value zero dollars
        b. hireDate (initialize this with the current date of today)
and the following method:
        c. doJob (should take as input parameter, a string representing the jobTitle of the employee and it prints-out to the console, the employee’s information in the following format:

“[Employee’s name] is a [jobTitle] who earns $[salary]”
e.g. Anna is a Programmer who earns $249,995.50 

Create an employee named, Anna, set their salary to $249.995.50 and call the doJob() method, passing it the jobtitle, Programmer. */
let personTwo = Object.create(person);
let employee = {
    salary: 0.0,
    hireDate: new Date(),
    jobTitle: '',
    getSalary: function () {
        return this.salary;
    },
    setSalary: function (newSalary) {
        this.salary = newSalary;
    },
    getJobTtile: function () {
        return this.jobTitle;
    },
    doJob: function(title) {
        return `${personTwo.getName()} is a ${title} who earns $${this.salary}`
    }
}
employee.setSalary(249995.50);
personTwo.setName('Anna');
const doJob = employee.doJob('Programmer');
console.log(doJob);

/*  3. Re-write the person object specification described in Question 1 above, but this time, using a Constructor Function named, Person.
 Then, add a method named, toString() to the person object, which return the string representation of the person object data in the format:
    {Name: John, DateOfBirth: 1998-12-10}
Using your constructor function for the person object, create a person named, Peter, whose date of birth is November 10, 1985.
Print-out to the console, the information for the person named, Peter, using its toString() method. */

class Person{
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    toString() {
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`
    }
}

let personThree = new Person('Peter', '1985-11-10')
console.log(personThree.toString());




