ARGUMENTS

Often we want to write functions that take inputs.

function square(num){
	console.log(num * num);
}

Now when we call square we need to pass in a value

square(10);   //prints 100
square(3);	  //prints 9
square(4);    //prints 16

========================================================

Example 1

function sayHello() {
	console.log("Hello There!");
}
sayHello();

Example 2

function sayHello(name) {
	console.log("Hello there " + name + "!");
}
sayHello("John");
sayHello("Jerry");
sayHello("Mary");

Example 3

function area(length, width) {
	console.log(length * width);
}

area(9,2);  //prints 18

function greet(person1, person2, person3){
	console.log("hi " + person1);
	console.log("Good night " + person2);
	console.log("Good night " + person3);
}

greet("Michelle", "Eli", "Zack");

Other function ideas

Games
addToScore(100)
addToScore(-100)
addToScore(5)

Credentials
checkCredentials("rusty@gmail.com", "woof123")

