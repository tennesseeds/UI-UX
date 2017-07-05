Object Data Structure

Suppose I wanted to model a single person:
name, age, and city

//I could use an array like this:
var person = ["Cindy", 32, "Missoula"];

//To retrieve the person's hometown:
person[2]  //this is not very meaningful code

//what if I accidentally reversed the order?
var person2 = ["Travis", Los Angeles", 21];

//An array is best used for a list

====This is a perfect use case for an OBJECT=====

//note objects store data in key:value pairs
var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};

Note: unlike arrays, objects have no order.

'Travis' | 21 | 'LA'
  name	  Age  City


==================Retrieving Data==============

var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

-------Bracket notation, similar to arrays:-----
console.log(person["name"]);

-------Dot notation:----------------------------
console.log(person.name);


=========Example====================
var dog = { name: "Rusty", breed: "Mutt", age: 3}
undefined
dog
Object {name: "Rusty", breed: "Mutt", age: 3}
dog["age"]
3
dog.age
3


===========Rules for Retrieving Data=========
There are a few differences between the 2 notations

//you cannot use dot notation if the property 
//starts with a number
someObject.1blah  //INVALID
someObject["1blah"] //VALID

//you can lookup using a variable with bracket notation
var str = "name";
someObject.str  //doesn't look for "name"
someObject[str] //does evaluate str and looks for "name"

//you cannot use dot notation for a property names
with spaces

someObject.fav color    //INVALID
someObject["fav color"]; //VALID


==============UPDATING DATA ================

Just like an array: access a property and
reassign it

var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

//To update age
person["age"] += 1;
//to update city
person.city = "London";

'Travis' | 22 | 'London'
  name	  Age  City


===========Initializing/Creating Objects=======

Like Arrays, there are a few methods of Initializing
objects
//make an empty object and then add to it

var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//all at once  -called object literal notation
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

//another way of initializing an Object
//less common
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

=========Object data types=================
Objects can hold all sorts of data

var junkObject = {
	age: 57,
	color: "purple",
	isHungry: true,
	friends: ["Horatio", "Hamlet"],
	pet: {
		name: "Rusty",
		secies: "Dog",
		age: 2
	}
};