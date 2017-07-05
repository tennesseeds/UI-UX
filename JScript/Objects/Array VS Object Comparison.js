ARRAYS

var dogs = ["Rusty", "Lucky", "Bubba"];

dogs
["Rusty", "Lucky", "Bubba"]


OBJECTS
Can be thought of as a big geletin mass with key:value pairs floating therein.

Key:value pairs can be thought of as a dictionary.
Word, definition pairs

var dogs = {
	name : "Bubba",
	breed: "Lab"
}

dog
Object{name : "Bubba", breed: "Lab"}

=========Retrieving Data===================
---------Arrays----------------------------
dogs[1];
"Lucky"

---------Objects---------------------------
dog["name"]
"Bubba"
OR 
dog.name
"Bubba"

========Adding new data====================

---------Arrays----------------------------
Can do it manually by using push/pop
 or unshift/shift or by figuring out which index
 to add it to

Using push
dogs.push("Wyatt")
4
dogs
["Rusty", "Lucky", "Bubba", "Wyatt"]

---------Objects---------------------------
dog.age = 6;
6
dog
Object{name : "Bubba", breed: "Lab", age: 6}

===========Edit an element==================

---------Arrays----------------------------
dogs
["Rusty", "Lucky", "Bubba", "Wyatt"]
Now, say I want to change Lucky's name
dogs[1] = "Lucy"
---------Objects---------------------------

dog.breed = "Black Lab"
"Black Lab"
dog
Object{name : "Bubba", breed: "Black Lab", age: 6}