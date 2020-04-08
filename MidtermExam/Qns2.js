/*
CS472 WAP course MIU MidTerm April Block 2020
*/


"use strict"
/* const car = {
    make: "default",
    model: "default",
    color: "default",

    drive: function (speed) {
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph.`);
        //console.log(this.make);
    },

    stop: function () {
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping.`);
    }

}
const redHondaAccord = Object.create(car);
redHondaAccord.color = "red";
redHondaAccord.model = "Accord";
redHondaAccord.make = "Honda";
redHondaAccord.drive(200);

 */


/* function Car(make, model, color) {
    this.make = make,
    this.model = model,
    this.color = color      
}

const RedHondaAccord = new Car("red", "Honda", "Accord");

Car.prototype.drive = function (speed) {
    console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph.`);
},
Car.prototype.speed = function () {
    console.log(`The ${this.color} ${this.make} ${this.model} is stopping.`);
}
RedHondaAccord.drive(300);
 */




//Module Pattern - ArrayUtils

 function arrayUtils(){
    function multipleCounts(nums, b){
        let numbers = nums.filter(n=>(n%b == 0));
        return numbers.length;
    };
    function reverseInPlace(nums){
        var i = 0;
        var j = nums.length - 1;
        while(i < j){
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
        return nums;
    }
    return{
        multipleCounts:multipleCounts,
        reverseInPlace:reverseInPlace
    }
};
const arrayu = arrayUtils();
console.log(arrayu.reverseInPlace([1,2,3,4,5,6]));
console.log(arrayu.multipleCounts([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5));

//Question 4 - Add method to the javaScript Array object
const arrayTest = [];
Array.prototype.printName = function(name){
    console.log(name);
}
arrayTest.printName("Anna H Smith");
arrayTest.printName("Bob J Harrison"); 