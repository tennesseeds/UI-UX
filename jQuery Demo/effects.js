//alert("connected!");
/*$("button").on("click", function(){
	$("div").fadeOut("slow");
});*/

/*$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		//console.log("fade completed!")
//		$(this).remove();
	});
	
});*/
/*$("button").on("click", function(){
	$("div").fadeIn(1000);
});*/

$("button").on("click", function(){
	$("div").slideDown(1000, function(){
		//console.log("fade completed!")
//		$(this).remove();
	});
});	

$("button").on("click", function(){
	$("div").slideUp(1000, function(){
//		console.log("slide completed!")
//		$(this).remove();
	});
});	

$("button").on("click", function(){
	$("div").slideToggle(1000, function(){
//		console.log("slide completed!")
//		$(this).remove();
	});
});	

