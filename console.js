var json=[{"name":"ayush","age":25},{"name":"ranjith","age":28},{"name":"nithiya","age":24}];
console.table(json);//it will view in table

console.log("hai");//it will print hai

console.clear();//it will clear the program written before it.

let arr=[1,2,3,4];
console.assert(arr.length>5,'array length is not greater than 5');

for(var i=10;i--){
console.error(i);
}// it will print 9,8,7,6,5,4,3,2,1

function fo(){
console.count('foed');
}
//if we call the function fo()it will count how many times it is called
//VM504:2 foed: 1
//undefined
//fo()
//VM504:2 foed: 2
//undefined

console.dir(document.body);
//displays an interactive list of the object passed to it.

console.dirxml(document);
//prints an xml representation of the descendants elements of object

console.group();
console.log(' I will output');
console.group();
console.log(' the result');
console.groupCollapsed('collapsed');
console.groupEnd();
console.log(' which was given');
//it will output in multiple levels 
//each call to console.group() will start a new group 
//each time you call console.groupEnd() it will end the current group and move back.
//groupCollapsed it will get collapsed.
//VM1220:1 console.group
//VM1220:2  I will output
//VM1220:3 console.group
//VM1220:4  the result
//VM1220:5 collapsed
//VM1220:7  which was given


console.time('id for timer');
console.timeEnd('id for timer');
VM829:2 id for timer: 0.0087890625ms
//a method to start the timer and a method to end it.

var user=" ";
function greet() {
console.count();
return "hi" +user;
}
user="bob";
greet();
user="alice";
greet();
greet();
console.count();
console.countReset();
//VM1103:3 default: 1
//VM1103:3 default: 2
//VM1103:3 default: 3
//VM1103:11 default: 0
//if supplied ,countRest() rests the count for that label to 0.
//if omitted , count() resets the default counter to 0.


function foo(){
function bar(){
console.trace();}
bar();
 }
foo();
//output stack trace to web console
//stack trace is a list of methods calls from the point when the application was started to the point where theexception was thrown
//VM1435:3 console.trace
//bar @ VM1435:3
//foo @ VM1435:4
//(anonymous) @ VM1435:6


console.warn("this is a warning message");
//it provide warning message.
//VM1486:1 this is a warning message

console.info("hello");
//VM1520:1 hello

console.timeLog();//logs the current value of atimer that was previously started by clling console.time() to console