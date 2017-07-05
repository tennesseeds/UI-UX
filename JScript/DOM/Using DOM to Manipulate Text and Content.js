----Using DOM to Manipulate Text and Content--
textContent
Returns a string of all the text contained in a given element
<p> 
	This is an <strong>awesome</strong> paragraph
</p>

/Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent //"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";
