// ================================================================
// 				Functions Problem Set
// +===============================================================

// Problem 1

// isEven()

// Write a function isEven() which takes a single numeric argument
// and returns true if the number is even, and fals otherwise.

// isEven(4)  			//true
// isEven(21)  		//false
// isEven(68)  		//true
// isEven(333)  		//false

//This works!!!
------------------------------------------------------------------
// function isEven(x) {
// 	if(x % 2 === 0) {
// 		return true;
// 	}
// 	return false;
// }

//Refactored -This is better
------------------------------------------------------------------
function isEven(num) {
	return num % 2 === 0; //this is a boolean statement &  
						  //will return true or false
}


isEven(3)	//false
isEven(12)	//true
isEven(5)	//false
isEven(333)	//false


// Problem 2
// ============================================================
// factorial()

// Write a function factorial() which takes a single numeric 
// argument and returns the factorial of that number.

// 	4! is 4x3x2x1			//read "4 factorial"
// 	6! is 6x5x4x3x2x1		//read "6 factorial"
// 	0! is 1					//read "0 factorial"

// factorial(5);    // 120
// factorial(2);    // 2
// factorial(10);   // 362880
// factorial(0);    // 1

// This works!!!
------------------------------------------------------------------
// var f = [];
// function factorial(x) {
// 	if(x === 0 || x === 1){
// 		return 1;
// 	}
// 	if(f[x] > 0){
// 		return f[x];
// 	}
// 	return f[x] = factorial(x-1) * x;
// }

//Another way
------------------------------------------------------------------
function factorial(num){
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	//return the result variable
	return result;
}
//factorial(4) 1 x 2 x 3 x 4  
//1 x 2 x 3 x 4
//(2) x 3 = 6
//(6 x 4) = 24

//Yet another way (little longer)
------------------------------------------------------------------
// function factorial(num){
// 	if(num === 0){
// 		return 1;
// 	}
// 	//define a result variable
// 	var result = num;
// 	//calculate factorial and store value in result
// 	for(var i = num - 1; i>=1; i--){
// 		result *= i;
// 	}
// 	//return the result variable
// 	return result;
// }
//factorial(4) 4 x 3 x 2 x 1
//			   ( 12) x 2
					// (24) x 1 = 24
//num = 4
//4 x 3
//4 x 2
//4 x 1


factorial(10)
factorial(3)
factorial(0)
factorial(7)


// Problem 3
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// kebabToSnake()

// write a function kebabtoSnake() which takes a single kebab-
// cased string argument and retuns the snake_cased version.

// Basically, replace "-"s with "_"s

// kebabToSnake("hello-world");  		//"hello_world"
// kebabToSnake("dogs-are-awesome");   //"dogs_are_awesome"
// kebabToSnake("blah");  				//"blah"

//Search with google using general language.  Instead of referencing
//Snake or kebab case search something general like:
//how to "replace any character in a string or line"
//"javascript replace character string"
//http://stackoverflow.com/questions/10610402/javascript-replace-all-commas-in-a-string

//This works
--------------------------------------------------------------------
// function kebabToSnake(str) {
// 	//replace all "-" with "_"
// 	//return str
//   return str.replace(/\-+/g, '_')
//             .replace(/([a-z\d])([A-Z])/g, '$1-$2');
//         }

//Colt's solution
---------------------------------------------------------------------
function kebabToSnake(str) {

	// var mystring = "this,is,a,test" <--Not needed from stack overflow
	
	//replace all "-" with "_"
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;
}

kebabToSnake("hello-world");
//"hello_world"
kebabToSnake("hello");
//"hello"
kebabToSnake("Jon-Jacob-Jingle-Heimer-Schmitt");
//"Jon_Jacob_Jingle_Heimer_Schmitt"