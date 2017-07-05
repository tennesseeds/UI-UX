ForEach
Javascript provides an eay built-in way of itereating 
over an arry: ForEach

arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
	//color is a placeholder, call it whaterver you want
	console.log(color);
});


=================typical forEach=======================
var nums = [45,65,77,34]

nums.forEach(function(num){
	console.log(num);
});
45
65
77
34

================Build your own ForEach=================
myForEach(nums, function(num){
	console.log(num);
});

======================Version 2========================
function myForEach(arr, func){
	//loop thru array
	for(var i = 0; i < arr.length; i++){
		func(arr[i]); //Remember () is the execution signal
	}
	//call func for each itme in array
}

var colors = ["red", "orange", "yellow", "green"];

//myForEach(colors, alert)
// myForEach(colors, console.log)
// myForEach(colors, function(){alert("Hi!")}); <--Most common
 myForEach(colors, function(color){
 	console.log(color);
 }); //<--Most common

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++){
		func(this[i]);
	}
}
var friends = ["Michelle", "Eli", "zack"];

//friends.myForEach(alert)

friends.myForEach(function(name){
	console.log("I love " + name + "!");
});
