				// Higher Order Functions
// ================================================================
// We can pass functions to other functions??!

function sing(){
	console.log("twinkle twinkle...")
	console.log("how I wonder...")
	console.log("high above...")
	console.log("twinkle twinkle...")

}

sing()

// setInterval(anotherFunc, interval in ms)

setInterval(sing, 1000) //repeat every 1 second
<-1 //clearInterval key number to stop setInterval repeat
twinkle twinkle...
how I wonder...
high above...
twinkle twinkle...

clearInterval(1) //clearInterval method plus key number


=================================================================
Anonymous Functions

setInterval(function(){
	console.log("I am an Anonymous function!");
	console.log("This is AWESOME!")
}, 2000);

setInterval()