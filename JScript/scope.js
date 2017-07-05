//scope.js

Scope Quiz
-------------------------------------------------------------------
var num = 8;
function doMath() {
	num+= 1;
	if(num % 5 == 0) {
		return true
	}else{
		return false
	}
}

num += 1;
doMath()

<-true

function hi() {
	var name = "Rusty"
	console.log(name);
}

function bye() {
	console.log(name);
}

hi()
Rusty

bye()
<-undefined
