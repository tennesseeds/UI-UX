                      FUNCTIONS
==========================================================

Functions let us wrap bits of code up into REUSABLE packages.  The are one of the building blocks of JS.

				Declare a function first
function doSomething(){
	console.log("Hello World");
}			

				Then Call it
doSomething();	                      
doSomething();	                      
doSomething();	                      
doSomething();	                      
doSomething();	    

==========================================================
function singSong() {
	console.log("Twinkle, twinkle, little star,")
	console.log("How I wonder what you are!")
	console.log("Up above the world so high,")
	console.log("Like a diamond in the sky.")
}    

singSong();              


FUNCTIONS are like machines
They take some inputs
Do some process
Then they provide(return) some output

===========================================================
				FUNTIONS QUIZ 1
===========================================================
function test(x, y){
	return y - x;
}

test(10, 40);  //40-10
<-30

===========================================================
				FUNTIONS QUIZ 2
===========================================================
function test(x){
	return x * 2;		// 40 * 2 returns 80
	console.log(x);		// Not executed
	return x/2;			// Not executed
}

test(40);
<-80