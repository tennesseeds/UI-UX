//						OBJECTIVES
//==============================================================

//				Understand arrays conceptually

//				Write code using JS arrays

Suppose I wanted to model a group of friends:

var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";

This is a lot of code, and it doesn't let us group the 
friends together


		This is a perfect use case for an arrays

						ARRAYS 
	Arrays let us group data together in lists

var friends = ["Charlie", "Liz", "David", "Mattias"];
index position =	0		1		2		  3

    Arrays are indexed starting at 0. 
  Every slot has a corresponding number.

  To get Charlie out of the array you need to know the index position.

 console.log(friends[0]);
  <- Charlie

  friends[1] + " <3 " + friends[2] 
  <- "Liz <3 David"

  I can update an array by:

  friends[0] = "Chuck";
  friends[1] = "Lizzie";

  Now my array has 

  Chuck  Lizzie  David  Mattias
     0		1		2		3


  We can add to our array with a new friends

var friends = ["Charlie", "Liz", "David", "Mattias"];
index position =	0		1		2		  3

friends[4] = "Amelie";

  now we have

  Chuck  Lizzie  David  Mattias  Amelie
     0		1		2		3       4


Console Exercise Example

undefined
var colors = ["red", "orange", "yellow"];
undefined
colors
["red", "orange", "yellow"]
colors[1]
"orange"
colors
["red", "orange", "yellow"]
colors[3] = "green"
"green"
colors
["red", "orange", "yellow", "green"]
colors[3] = "Dark green";
"Dark green"
colors
["red", "orange", "yellow", "Dark green"]
 colors[10] = "violet";
"violet"
colors
["red", "orange", "yellow", "Dark green", undefined × 6, "violet"]


			Additional Notes 
===========================================================
We can initialize an empty array two ways:
var friends = [];  //no friends :(
var friends = new Array()  //uncommon

//Arrays can hold any type of data
var random_collection - [49, true, "Hermione", null];

//Arrays have a length property
var nums = [45, 37, 89, 24];
nums.length //4

var dogs = ["Rusty" , "Wyatt", "Olly"];

dogs.length
<- 3

dogs[2]
"Olly"

var name = "Rusty"

name.length
<-5

name[4]
"y"

