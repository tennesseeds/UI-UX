//====================Max()===========================

// Write a function max() that accepts an array of numbers and returns
// the maximum number in the array.

// max([1,2,3]);         //3
// max([10,3,10, 4]);    //10
// max([-5,100]);        //100
=====================Exercise 1=========================

var numbers = ([1,2,3]);
var max = 0;
//loop through the array and compare 
for(var i = 0; i < numbers.length; i++){
	if(numbers[i] > max ){
		max = numbers[i];	
	}
}
console.log(max);
3
========================OR=============================
function max(arr){
var max = arr[0];
	for(var i = 1; i < arr.length; i++){
	if(arr[i] > max ){
		max = arr[i];	
		}
	}
return max;
}
max([3,10,95,6,105,-3])
=====================Exercise 2=========================

var numbers = ([10,3,10, 4]);
var max = 0;
//loop through the array and compare 
for(var i = 0; i < numbers.length; i++){
	if(numbers[i] > max ){
		max = numbers[i];	
	}
}
console.log(max);
10
=====================Exercise 3=========================
var numbers = ([-5,100]);
var max = 0;
//loop through the array and compare 
for(var i = 0; i < numbers.length; i++){
	if(numbers[i] > max ){
		max = numbers[i];	
	}
}
console.log(max);
100

var numbers = ([1,2,3]);
var max = Math.max(...numbers);
console.log(max);
3

var numbers = ([1,2,3]);
function getMaxOfArray(numbers){
	return Math.max.apply(null, numbers);
	console.log(Math.max.apply(null, numbers));
}
=================Exercise 1===========================

var numbers = ([1,2,3]);
var max = Math.max(...numbers);
console.log(max);
3
=================Exercise 2===========================

var numbers = ([10,3,10, 4]);
var max = Math.max(...numbers);
console.log(max);
10
=================Exercise 3===========================
var numbers = ([-5,100]);
var max = Math.max(...numbers);
console.log(max);
100
