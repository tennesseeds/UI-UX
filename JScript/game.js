//Guessing Game
//Guess a number between 1 & 10

//STEPS
//create secretNumber
var secretNumber = 5;

//ask user for guess
var guess = prompt("Please guess a number between 1 & 10");

//check guess
	if(Number(guess)  === secretNumber) {
		alert("You guessed it!  Good job!");
	}
	else if(Number(guess)  < secretNumber) {
		alert("That number is too low!");
	}
	else {
		alert("That number is too high!");
	}

	// else (guess != secretNumber) {
	// 	prompt("That's not it, guess another number")
	// }
