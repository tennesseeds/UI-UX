//==============================sumArray====================

// Write a function sumArray() that accepts an array of numbers and returns the sume of all numbers in the array

// sumArray([1,2,3])         //6
// sumArray([10,3,10, 4])    //27
// sumArray([-5,100])        //95

===============Exercise 1========================
var myArray= ([1,2,3]);
var sum = 0;
for(var i = 0; i < myArray.length; i++){
	sum += myArray[i];
	
}console.log(sum);
6
==================OR=============================
function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}
sumArray([10,10,10])
===============Exercise 2========================
var myArray= ([10,3,10, 4]);
var sum = 0;
for(var i = 0; i < myArray.length; i++){
	sum += myArray[i];
	
}console.log(sum);
27
===============Exercise 3========================
var myArray= ([-5,100]);
var sum = 0;
for(var i = 0; i < myArray.length; i++){
	sum += myArray[i];
	
}console.log(sum);
95



