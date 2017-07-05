//alert("Connected");

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input"); //"input[type='number']"
// var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// for(var i = 0; i < maxScore; i++);
p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	if(p1Score === winningScore){
		p1Display.classList.add("winner");
		p2Display.classList.add("loser");
		gameOver = true;

		// p1Display.style.color = "green";
		// p2Display.style.color = "red";
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;	
	if(p2Score === winningScore){
		p2Display.classList.add("winner");
		p1Display.classList.add("loser");
		gameOver = true;
		// p2Display.style.color = "green";
		// p1Display.style.color = "red";
	}	
	p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
	p1Display.classList.remove("winner");
	p2Display.classList.remove("loser");
	p1Display.classList.remove("loser");
	winningScoreDisplay.textContent = 0;
	winningScore.textContent = 0;
	// p1Display = !p1Display;
	// p2Display = !p2Display;
	gameOver = !gameOver;
}

numInput.addEventListener("change", function(){
	// p.textContent = "value changed";

	 // winningScoreDisplay.textContent = numInput.value;
	 // winningScore = Number(numInput.value);

	 winningScoreDisplay.textContent = this.value;
	 winningScore = Number(this.value);
	 reset();
});



// var input = document.querySelector("input");

// undefined
// input
// <input type=​"number">​
// input.value
// "-3" //whatever the number inputted is.