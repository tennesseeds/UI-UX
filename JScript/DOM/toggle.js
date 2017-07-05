// alert("Connected");
// var button = document.querySelector("button");
// var isPurple = false;
//     button.addEventListener("click", function(){

//     	//if white toggle to purple
//     	if(isPurple){
//     		document.body.style.background = "white";
//     		isPurple = false;
// 	    	}else {
// 	    	 document.body.style.background = "purple";
// 	    	 	isPurple = true;
// 	    		}
//     	});

// var button = document.querySelector("button");
// var isPurple = false;
//     button.addEventListener("click", function(){

//     	//if white toggle to purple
//     	if(isPurple){
//     		document.body.style.background = "white";
//     		}else {
// 	    	 document.body.style.background = "purple";
// 	    	}
// 	    	isPurple = !isPurple;
// 	    });

var button = document.querySelector("button");
button.addEventListener("click", function(){
        document.body.classList.toggle("purple");
    });
