=================MovieDB Exercise====================
Create an array of movie objects.  Each movie should
have a title, rating, and hasWatched properties.
Iterate through the array and print out 
something that looks like:

You have watched "In Bruges" - 5 stars
You have not seen "Frozen" - 4.5 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" - 3.5 stars

Use your own movies!

var movies = [
	{title: "Superman",
	rating: "4.5 stars",
	hasWatched: true
	},
	{title: "Avengers 4",
	rating: "5 stars",
	hasWatched: false
	},

	{title: "Fantastic 4",
	rating: "4.9 stars",
	hasWatched: true
	},

	{title: "Fantastic 4 II",
	rating: "4.5 stars",
	hasWatched: true
	},

	{title: "God is not Dead",
	rating: "5 stars",
	hasWatched: false
	}
];

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched";
	}else {
		result += "not seen";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
	});

==============OR Refactored================================


function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
	});

==============OR forLoop ================================

for(var i = 0; i < movies.length; i++){
	if(movies[i].hasWatched){//=== true is not needed
		console.log("You have seen " + movies[i].title + " - " + movies[i].rating);
	}else
	console.log("You not have seen " + movies[i].title + " - " + movies[i].rating);
}

You have seen Superman - 5 stars
You not have seen Avengers 4 - 5 stars
You have seen Fantastic 4 - 5 stars
You not have seen God is not Dead - 5 stars