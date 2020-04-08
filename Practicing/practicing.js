/* var x = 0;
function();
function f1(){

} */

//FOR VAR foo =1 will be replaced wiht foo=10
//FOR LET foo =1 will be used since foo=10 is still undinfined 
/* let foo = 1;
function bar (){

      if(!foo){
        console.log("hello world");
        let foo = 10;
        console.log("hello world");
    }
    alert(foo);
}
bar();

function fooo() {
    console.log(a); // ReferenceError: a is not defined
   }
   fooo(); // This is not valid
   var a = 20; */


/* function hew() {
    for (var x = 1; x < 10; x++) {
        console.log(x);
    }
    console.log("x: " + x);//ReferenceError: x is not defined 
}
console.log("a: " + a);//undefined 
b();// function is called!
var a = 5;
function b() {
    console.log("function is called!");
} */

function b(){ 
    function a(){ 
        console.log("Sharifah"+ x); 
    } 
    var x = 10; 
    a(); 
} 
var x = 20; 
b();

/* Make adder */
/* const make_adder = function (val) {
    let counter = 0;
    function add() {
        counter += val;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: function() {
            add()
        },
        counter: function() {
            return counter;
        }
    }
};

const add5 = make_adder(5);
add5.add(); add5.add(); add5.add();
console.log(add5.counter());

const add7 = make_adder(7);
add7.add(); add7.add(); add7.add();
console.log(add7.counter()); */

/* Make adder */
const make_adder = function (val) {
    let counter = 0;
    function add() {
        counter += val;
    }
    function reset() {
        counter = 0;
    }
    return {
        add: add(),
        counter: function() {
            return counter;
        }
    }
};

const add5 = make_adder(5);
/* add5.add(); add5.add(); add5.add(); */
add5.add;
console.log(add5.counter());

const add7 = make_adder(7);
// add7.add(); add7.add(); add7.add();
add7.add;
console.log(add7.counter());