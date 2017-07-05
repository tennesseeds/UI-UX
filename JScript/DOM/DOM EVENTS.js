==============DOM EVENTS======================

Events are everywhere
-Clicking on a button
-hovering over a link
-Dragging and Dropping
-Pressing the Enter Key


----------The Process-------------------------
We select an element and then add an event listener

"Listen for a click on this <button>"
"Listen for a hover event on the <h1>"
"Listen for a keypress event on text input"

Select and then manipulate

----------The Syntax--------------------------

To add a listener, we usa  method called 
		addEventListener

element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
button.addEventListener("click", function(){
//button.addEventListener("type of event", functionToCall){ = code we want to run when that event happens{
//This function is called a "callback" it is not run immediately.  
//It is only run once this event fires.
	console.log("Someone clicked the button!")
});

addEventListener will be used all the time!!!


----------An Example--------------------------

Let's display a message when a button is clicked

<button>Click Me</button>
<p>No One Has Clicked Me Yet</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function(){
	paragraph.textContent = 
		"Someone Clicked the Button!";
});

So, imagine a button labeled "Click Me"
With the text No One Has Clicked Me Yet
Until it is clicked at which time the addEventListener
will detect the click and change the text to read
"Someone Clicked the Button!".

-------Example on Dom Demo site------------

var h1 = document.querySelector("h1");
undefined
h1
<h1>​Welcome to MY DOM Demo​</h1>​
h1.addEventListener("click", function(){
   h1.style.color = "pink";
});
undefined
h1.addEventListener("click", function(){
   h1.style.color = "blue";
});
undefined
h1.addEventListener("click", function(){
   h1.style.color = "random";
});
undefined
h1.addEventListener("click", function(){
   alert("h1 was clicked!");
});
undefined
h1
<h1 style=​"color:​ blue;​">​Welcome to MY DOM Demo​</h1>​
h1.addEventListener("click", function(){
   h1.style.color = "pink";
});
undefined
//you can have more than one listener on an event
undefined


Refresh page

document.querySelector("ul");
<ul>​…​</ul>​
document.querySelector("ul").addEventListener("click", function(){
   console.log("UL was clicked!");
});


undefined
VM357:2 UL was clicked!
document.querySelector("ul").addEventListener("click", function(){
   console.log("U clicked the ul!");
});


undefined
VM357:2 UL was clicked!
VM366:2 U clicked the ul!

======EXAMPLE 2=====================
We could also rewrite it using a named function

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", changeText);

function changeText(){
	paragraph.textContent = 
		"Someone Clicked the Button!";
}
