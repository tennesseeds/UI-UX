Topics:

adding methods to an object 
Namespacing
The Keyword this

----------------------------------------------
var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Bob", "Tina"],
	add: function(x,y){
		return x + y;
	}
}

objObject {name: "Chuck", age: 45, isCool: false, friends: Array[2]}add: (x,y)age: 45friends: Array[2]isCool: falsename: "Chuck"__proto__: Object
obj.add(10,5);
15
console.log();//console is an object and log 
//is a method just like add.

//why would we put our function inside an object?
//Answer: To prevent name-space collisions.
//Why not do something like:
function add(){
}

//The main reason is for grouping.  

function speak(){
	return "Woof!"
}
speak()
"Woof!"
//this will create a "name-space collision"
function speak(){
	return "Meow!"
}
speak()
"Meow!"
//I can no longer access the speak function 
//that returns "Woof!"
------------dogSpace----------------------
var dogSpace = {};
dogSpace.speak = function() {
	return "Woof!";
}
dogSpace.speak()
"Woof!"
------------catSpace-----------------------
var catSpace = {};
catSpace.speak = function() {
	return "Meow!";
}
catSpace.speak()
"Meow!"

//This is going to be used all the time

you may use something like:
instead of 
delete()
you will use

user.delete()
or
post.delete()
or
comment.delete()

-------Practical Example JS Methods 2---------------
http://underscorejs.org/

Topics
-adding methods to an object
-Namespacing
-The Keyword this

var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];
["Good Job!", "Bye", "Lame..."]
comments
Object {data: Array[3]}

function print(arr){
   arr.forEach(function(el){
   console.log(el);
});
}
undefined

print(comments.data);
Good Job!
Bye
Lame...

------------or--------------------------------
comments.print = function(){
   this.data.forEach(function(el){ 
   console.log(el);
});//this is referring to the object "comments" that 
}//method/function is defined in.

comments
Object {data: Array[3]}
data: Array[3]0: "Good Job!"1: "Bye"2: "Lame..."
length: 3__proto__: Array[0]print: ()arguments: 
ullcaller: nulllength: 0name: ""prototype: 
Object__proto__: ()<function scope>__proto__: 
Object




