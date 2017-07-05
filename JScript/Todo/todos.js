var lis = document.querySelectorAll("li"); //Remember this give me the first Li since I didn't do querySelectorAll
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
	this.classList.add("selected");
	});

	lis[i].addEventListener("mouseout", function(){
	this.classList.remove("selected");
	});
	
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}
