                 RUTURN Keyword
============================================================
Remember FUNCTIONS are like machines
They take some inputs
Do some process
Then they provide(return) some output

Only the first return / thing is returned from a function/statement and then exits the function statement.

so if there are 
function doSomething.....
     return firstSomething  		<---ONLY this will return
     console.log something else		<---This will not be run
     return something different		<---This will not be run
 
 doSomething(cool)       

function square(x) {
	console.log(x*x);
}
square(4)
16  //<---this value seems like we have an output but is really only printed in the console (which only a developer would ever see anyway) and is not really a returned output that we can use.  

The return keyword however means we can capture the value that is coming back out of the function.

"4 squared is: " + square(4)
16
<- "4 squared is: undefined"
//so even though it prints something the output is undefined.

function square(x) {
	return x*x;
}
square(4)
<- 16 //arrow now indicates it is a returned value.

console.log(4)
4
<- undefined  //<- see the output is undefined just printed to the console as directed.

every function returns something and if you don't explicitely tell it what to return it will just return as undefined.

So, if we go back....
square(4)
<- 16
"4 squared is: " + square(4)
<-"4 squared is: 16"

We can also save the return in a variable as below.

var return =square(104);
<-undefined
result
<-10816

EXAMPLE 2
============================================================

This function capitalizes the first char in a string:

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";						//"paris"
var capital = capitalize(city);			//"Paris"

We can capture the returned value in a variable

Remember the return keyword stops the execution of a function

 
 	function capitalize(str) {
	if(typeof str ==="number"){
		return "that's not a string!"
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";				 //"paris"
var capital = capitalize(city);  //"Paris"

var num = 37;
var capital = capitalize(num);  // "that's not a string!"


=============================================================
Another Syntax to Declare a function

//function declaration
function capitalize(str) {
	return str.charAt(0).tuUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

the difference is with a function expression if you change the 
value of capitalize the function is lost.
capitalize = 10;
return capitalize;
<-10