//===================isUniform()==========================

//Write a function isUniform() which takes an array as an argument
// and returns true if all elelments in the array are identical

// isUniform([1,1,1,1]); //true
// isUniform([2,1,1,1]); //false
// isUniform(["a", "b", "p"]); //false
// isUniform(["b","b","b"]); //true

======================Exercise 1==========================
var myArray = ([1,1,1,1]);

for(var i = 1; i < myArray.length; i++){

	if (myArray[0] !== myArray[i]){
		console.log("false");
		break;
		}

console.log("true");
break;
}
true

=======================OR================================
function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

======================Exercise 2==========================
var myArray = ([2,1,1,1]);

for(var i = 1; i < myArray.length; i++){

	if (myArray[0] !== myArray[i]){
		console.log("false");
		break;
		}

console.log("true");
break;
}
false

======================Exercise 3==========================
var myArray = (["a", "b", "p"]);

for(var i = 1; i < myArray.length; i++){

	if (myArray[0] !== myArray[i]){
		console.log("false");
		break;
		}

console.log("true");
break;
}
false

======================Exercise 4==========================
var myArray = (["b","b","b"]);

for(var i = 1; i < myArray.length; i++){

	if (myArray[0] !== myArray[i]){
		console.log("false");
		break;
		}

console.log("true");
break;
}
true