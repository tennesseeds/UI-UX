if(jQuery){
	alert("jQuery Loaded!");
}else {
	alert("No jQuery :(");
}

$("div").css("background", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "2px solid orange");
$("div").first().css("color", "pink");
/*or
$("div:first-of-type").css("color", "pink");
or
$("div:first").css("color", "pink"); //but this is a 
little slower than first-of-type*/