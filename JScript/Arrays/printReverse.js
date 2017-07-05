// printReverse([1,2,3,4])
// 4
// 3
// 2
// 1

// var printReverse = ([1,2,3,4]);
// printReverse.forEach(function(num){
// 	console.log(num)
// 	num--
// });//undefined


// var nArray = ([1,2,3,4]);
// for(var i = nArray.length; i < nArray.length; i--) {
// 	console.log(nArray[i]);
// 	}//undefined

// var nArray = ([1,2,3,4]);
// nArray.reverse();
// [4, 3, 2, 1]

var numArray = ([1,2,3,4]);
for(var counter=numArray.length - 1; counter >= 0;counter--){ 
	console.log(numArray[counter]); 
	}
4
3
2
1

=================or=============================
function printReverse(arr){
	for(var i = arr.length -1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([3, 6, 2, 5])
// printReverse(["a", "b", "c"]);
// "c"
// "b"
// "a"

var ltrArray = (["a", "b", "c"]);
for(var counter=ltrArray.length - 1; counter >= 0;counter--){ 
	console.log(ltrArray[counter]); 
	}
c
b
a


