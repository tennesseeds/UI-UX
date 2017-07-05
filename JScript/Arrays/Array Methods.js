//							Array Methods

=================================OBJECTIVES======================


//						OBJECTIVES

// Arrays come with a few built-in methods that make our life
//         easier.  We're going to cover:
				// push/pop
				// shift/unshift
				// indexOf
				// slice

==========================Push and POP================================

	Use push to add to the end of an array:

var colors = ["red", "orange", "yellow"];
colors.push("green");
//red, orange, yellow, green

Use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop()
//red, orange

//pop() returns the removed element
var col = colors.pop(); 
//orange


var colors = ["red", "orange", "yellow"];
colors.push("green");
4
colors.push("blue");
5
colors.push("purple");
6
colors.push("hazel");
7
colors
["red", "orange", "yellow", "green", "blue", "purple", "hazel"]
colors.pop();
"hazel"
colors
["red", "orange", "yellow", "green", "blue", "purple"]


===================Shift and Unshift=============================

Use unshift to add to the front of an array:
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");
//["infrared", "red", "orange", "yellow"]

Use Shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();
//orange, yellow

//shift() also returns the removed element
var col = colors.shift(); //orange


var nums = [34, 24, 22];
undefined
nums
[34, 24, 22]
nums.unshift("Hello");
<-4
nums
["Hello", 34, 24, 22]
nums.shift();
<-"Hello"
nums
[34, 24, 22]


====================indexOf==============================

Use indexOf() to find the index of an item in an array

var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

//returns the first index at which a given elenment can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4  returns only the first instance

//returns -1 if the element is not present.
friends.indexOf("Hagrid"); //-1

var colors = ["red", "orange", "yellow"];
colors.push("green");
4
colors.indexOf
indexOf() { [native code] }
colors.indexOf("yellow")
2
colors.indexOf("brown")
-1

========================Slice================================

Use slice() to copy parts of an array into another array

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3rd fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1,3);

//this does not alter the original fruits array
//citrus contains ['Orange', 'Lemon']
//furits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();
//both arrays are [1, 2, 3]


var nums = [34, 24, 22, "a", "b", 445, 34];
undefined
nums
[34, 24, 22, "a", "b", 445, 34]
var letters = nums.slice(3,5)
undefined
nums
[34, 24, 22, "a", "b", 445, 34]
letters
["a", "b"]