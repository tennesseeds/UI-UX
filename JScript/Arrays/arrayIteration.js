                  Array Iteration

===================objectives========================

Use a for loop to iterate over an Array
Use a forEach loop to iterate over an Array
Compare and contrast for loops and forEach

======================================================

================For loop==============================

	To loop over an array using a for loop, we 
	need to make use of the array's length property. 

var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}

*************************NOTES For LATER******************
for(var i = 0; i < comments.length; i++){
	makeCommentHTML(comment[i]);
}
================forEach loop==============================

forEach is much nicer to use, shorter, simpler and more 
common.  Part of the array prototype which is where all those
methods like push, pop, shift and unshift reside.

JavaScript provides an easy built-in way of 
iterating over an array: ForEach

arrayName.forEach(someFunciton)

var colors = ["red", "orange", "yellow", "green"];

// colors.forEach(function(){//<---annonymous function
// 	//color is a placeholder, call it whatever you want
// 	alert("Inside the forEach");
// });

// colors.forEach(function(iLoveDogs){//<---annonymous function
// 	//color is a placeholder, call it whatever you want
// 	console.log("Inside the forEach " + iLoveDogs);
// });
Inside the forEach red
Inside the forEach orange
Inside the forEach yellow
Inside the forEach green

colors.forEach(function(color)){//<---annonymous function
	//color is a placeholder, call it whatever you want
	console.log(color);
}

function printColor(color){
	console.log("**********");
	console.log(color);
	console.log("**********")
}

printColor("purple")

colors.forEach(printColor);

For vs ForEach
// The following 2 code snippets do the same thing:
// Sometimes you will see for loops used but increasingly
 // nowadays it will be forEach

//with a for loop
var colors = ["red", "orange", "yellow", "green"];
//for loops deal with a number and uses that number to 
//access the array.
for(var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}

Almost always a forEach used to iterate an array.
//with a forEach
var colors = ["red", "orange", "yellow", "green"];
//forEach abstracts the number away and you only deal 
//with then array name given.
colors.forEach(function(color)){//<---annonymous function
	//color is a placeholder, call it whatever you want
	console.log(color);
}

// Very rare you will almost never see this but could be 
// done with a while loop;

// var count = 0;
// while(count < colors.length){
// 	console.log(colors[count]);
// 		count++;
// }

Note there are cases where the forEach doesnt' exist. With 
some of the browser stuff, html, css, and JavaScript when
all combined.  We will be working with things that look like
arrays but are not which are really confusing.  You will not
be able to use a forEach then.

============Exercise====================================

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(colors){ //colors is just a variable
//for the numbers array [colors]	
//color or colors has nothing to do wiht this tricky function.
	if(color % 3 === 0) { 
		console.log(color);
	}
});
// first iteration:
// if(1 % 3 === 0){        // not true
// 	console.log(color);
// }second iteration:
// if(2 % 3 === 0){         // not true
// 	console.log(color);
// }third iteration:
// if(3 % 3 === 0){         // true & 3 is printed
// 	console.log(color);
// }

3
6
9

var numbers = [1,2,3,4,5,6,7,8,9,10];
// var colors = ["red", "orange", "yellow", "green"];

for(var i = 1; i < numbers.length; i++){ 
	if(i % 3 === 0) { 
		console.log(numbers[i - 1]);
	}
}

or

var numbers = [1,2,3,4,5,6,7,8,9,10];
// var colors = ["red", "orange", "yellow", "green"];

for(var i = 1; i < numbers.length; i++){ 
	if(i % 3 === 0) { 
		console.log(i);
	}
}