// // Annoy-omatic

// // Ask the user "Are we there yet?"
// var Response = prompt("Are we there yet?");

// // Keep asking again until they enter "yes" or "yeah"
// while(Response !== "yes" && Response !== "yeah"){
// 	var Response = prompt("Are we there yet?");
// }

// // Then, alert "Yay, we finally made it!"
// alert("Yay, we finally made it!");


// VERSION 2

// Ask the user "Are we there yet?"
var Response = prompt("Are we there yet?");

// Keep asking again until they enter "yes" or "yeah"
while(Response.indexOf("yes") === -1  && Response.indexOf("yeah") === -1 ){
	var Response = prompt("Are we there yet?");
}

// Then, alert "Yay, we finally made it!"
alert("Yay, we finally made it!");