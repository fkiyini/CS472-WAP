"use strict"

const person = {
    name: '',
    dateOfBirth: "",
    getName: function () {
        return name;
    },
    setName: function (newName) {
        name = newName;
    }
}

const john = Object.create(person);
john.setName("John");
john.dateOfBirth = new Date(1998, 11, 10);
console.log(`The person's name is ${john.getName("John")}`);
console.log(`${john.getName("John")} was born on ${john.dateOfBirth}`);

const employee = Object.create(person);
employee.Salary = 0.0;
employee.hireDate = new Date();
/* employee.getSalary = function () {
    return salary;
} */
employee.doJob = function (jobTitle) {
    console.log(`${employee.getName()} is a ${jobTitle} who earns ${this.Salary}`);
}

const anna = Object.create(employee);
anna.setName("Anna");
anna.Salary = 249995.50;
anna.doJob("Programmer");
//console.log
