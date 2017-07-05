javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')


//====click=====
$("h1").click(function(){
	alert("h1 clicked!");
});

$("button").click(function(){
alert("button clicked");
});

//====keypress=====
$("input").keypress(function(){
	console.log("YOU PRESSED A KEY!");
});

$("input").keypress(function(event){
	if(event.which == 13){
		alert("You hit Enter");
    }
	//console.log("YOU PRESSED A KEY!");
});

//====on======= //similar to js addEventListener
$("h1").on("click", function(){
	$("h1").css("color", "purple");
});

$("input").on("keypress", function(){
	console.log("keypressed!");
});

$("button").on("mouseenter", function(){
	console.log("mouse enter!");
});

$("button").on("mouseenter", function(){
	$(this).css("font-weight","bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight","normal");
});