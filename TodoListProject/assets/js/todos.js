//Check off Specific Todos by Clicking
/*$("li").click(function(){
	$(this).toggleClass("completed");
});*/

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
/*$("span").click(function(event){
//	alert("clicked on a span!");
	$(this).parent().fadeOut(500, function(){
			$(this).remove();
	});
	event.stopPropagation();
});*/
$("ul").on("click", "span", function(event){
//	alert("clicked on a span!");
	$(this).parent().fadeOut(500, function(){
			$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//add item to todo list
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


//alternate code to do the same thing as line 3
	//if li is gray
		//turn it black
	//else
		//turn it gray
/*		if($(this).css("color") === "rgb(128, 128, 128)"){
			$(this).css({
				color: 'black',
				textDecoration: 'none'
			});
		}else{
			$(this).css({
				color: 'gray',
				textDecoration: 'line-through'
			});
		}*/