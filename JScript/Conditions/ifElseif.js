var age = 9;

if(age < 0){
	console.log("Check age and re-enter!");

		if(Math.sqrt(age) === true) {
		console.log("Perfect Square!");
		}
		else if(!(age % 2 !=== 0)){
			console.log("Your age is odd!");
		}
		else if(age === 21){
		console.log("Happy 21st Birthday!  Get a free shot!");
		}
		else {
			continue;
		}
}

else if(age < 18){
	console.log("Sorry, you are not old enough to enter the venue");
}

else if(age< 21){
	console.log("you can enter, but cannot drink");
}

else{
	console.log("Come on in. You can drink.");
}



