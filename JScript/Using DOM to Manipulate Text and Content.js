----Using DOM to Manipulate Text and Content--
textContent
Returns a string of all the text contained in a given element
<p> 
	This is an <strong>awesome</strong> paragraph
</p>

/Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent 
<-"This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";

78646178
8885303626

var p = document.getElementsByTagName("p")[0]
undefined
p
<p>​"Corgi mixes are "<strong>​super​</strong>​" adorable"</p>​
var ul = document.querySelector("ul");
undefined
ul
<ul>​<li>​Orchids​</li>​<li>​Succulents​</li>​<li>​Tulips​</li>​</ul>​
p.textContent = "Corgi mixes are really really super adorable";
"Corgi mixes are really really super adorable"
//this is a little dangerous since it will over-
//write your html tags 

============innerHTML=========================
This is a better alternative since it will leave 
the HTML intact.  Returns everything as text
even the html elements.

<p> 
	This is an <strong>awesome</strong> paragraph
</p>

/Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
//"this is an <strong> awesome</strong> paragraph"

var p = document.querySelec
undefined
var p = document.querySelector("p");
undefined
p.textContent
"Corgi mixes are super adorable"
p.innerHTML
"Corgi mixes are <strong>super</strong> adorable"
var ul = document.querySelector("ul");
undefined
ul.innerHTML
//"
			<li>Orchids</li>
			<li>Succulents</li>
			<li>Tulips</li>
		"
ul.innerHTML = "Cats are awesome!"
"Cats are awesome!"
document.querySelector("h1").textContent = "End OF THIS LESSON!";
"End OF THIS LESSON!"
document.body
<body>​<h1>​End OF THIS LESSON!​</h1>​<p>​…​</p>​<ul>​Cats are awesome!​</ul>​<img src=​"http:​/​/​barrelhorseworld.com/​dogs/​images/​1145556d.jpg">​<img src=​"http:​/​/​www.holidogtimes.com/​wp-content/​uploads/​2016/​02/​corgi-mix-cover-2.png?aff069&aff069">​</body>​
document.body.innerHTML
"
		<h1>End OF THIS LESSON!</h1>
		<p>Corgi mixes are <strong>super</strong> adorable</p>

		<ul>Cats are awesome!</ul>
		<img src="http://barrelhorseworld.com/dogs/images/1145556d.jpg">
		<img src="http://www.holidogtimes.com/wp-content/uploads/2016/02/corgi-mix-cover-2.png?aff069&amp;aff069">


//"
document.body.textContent
//"
		End OF THIS LESSON!
		Corgi mixes are super adorable

		Cats are awesome!

//"

document.body.textContent = "<h1>Goodbye!</h1>";
"<h1>Goodbye!</h1>" //does not treat it as HTML
document.body.innerHTML = "<h1>Goodbye!</h1>";
"<h1>Goodbye!</h1>"  //Renders correctly as an h1

============Attributes=========================
Use getAttribute() and setAttribute() to read and write
Attributes like src or href

<a href="www.google.com">I am a link</a>
<img src="logo.png">

var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF Attribute
link.setAttribute("href", "www.dogs.com");
//<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">

var img1 = doc
VM117:1 Uncaught ReferenceError: doc is not defined(…)(anonymous function) @ VM117:1
var img1 = document.getElementsByTagName("img")[0]

undefined
img1
<img src=​"http:​/​/​barrelhorseworld.com/​dogs/​images/​1145556d.jpg">​
img1.getAttribute("src");
"http://barrelhorseworld.com/dogs/images/1145556d.jpg"
img1.setAttribute("href", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiT57zzg67NAhUVXVIKHVm9BOUQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fslmcoppola%2Fcorgis-galore%2F&psig=AFQjCNFyHslQq5RGKiVEUj0VlrBDfjhKDQ&ust=1466217459833306");
undefined
img1.setAttribute("src", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiT57zzg67NAhUVXVIKHVm9BOUQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fslmcoppola%2Fcorgis-galore%2F&psig=AFQjCNFyHslQq5RGKiVEUj0VlrBDfjhKDQ&ust=1466217459833306");
undefined
img1.setAttribute("src", "http://www.thecorgilady.com/images/2013/P1020164.jpg");
undefined
var img2 = document.getElementsByTagName("img")[1]

undefined
img2
<img src=​"http:​/​/​www.holidogtimes.com/​wp-content/​uploads/​2016/​02/​corgi-mix-cover-2.png?aff069&aff069">​
img2.get
undefined
img2.getAttribute("src");
"http://www.holidogtimes.com/wp-content/uploads/2016/02/corgi-mix-cover-2.png?aff069&aff069"
img2.setAttribute("src", "http://imgur.com/gallery/Y4j3N");
undefined
img2.setAttribute("src", "Z:\WebDevBootcamp\JScript\Y4j3N.jpg");
undefined
/Z:/WebDevBootcampJScriptY4j3N.jpg:1 GET file:///Z:/WebDevBootcampJScriptY4j3N.jpg net::ERR_FILE_NOT_FOUND
img2.setAttribute("src", "Z:\WebDevBootcamp\JScript/Y4j3N.jpg");
undefined
/Z:/WebDevBootcampJScript/Y4j3N.jpg:1 GET file:///Z:/WebDevBootcampJScript/Y4j3N.jpg net::ERR_FILE_NOT_FOUND
img2.setAttribute("src", "http://helltor.tumblr.com/image/21342762701");
undefined
img2.setAttribute("src", "http://www.thecorgilady.com/images/2013/P1020164.jpg");
undefined



var a = document.querySelector("a");
undefined
a
<a href=​"www.google.com">​LINK TO GOOGLE​</a>​
a.setAttribute("href", "www.corgis.com");
undefined
a.setAttribute("href", "http://www.corgis.com");
undefined
a
<a href=​"http:​/​/​www.corgis.com">​LINK TO GOOGLE​</a>​

a.textContent = "Link To Corgi.com"
"Link To Corgi.com"
a
<a href=​"http:​/​/​www.corgis.com">​Link To Corgi.com​</a>​

Exercise
var logo = document.getElementById('hplogo');
undefined
logo.srcset = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g";
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g"
var logo = document.getElementById('hplogo');
undefined
logo.setAttribute("srcset", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g");
undefined

var logo = document.getElementById('hplogo');
undefined
logo.srcset = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g";
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g"
var logo = document.getElementById('hplogo');
undefined
logo.setAttribute("srcset", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g");
undefined


=============Exercise Google.com Code-Along==============


var logo = document.getElementById('hplogo');
undefined
logo.srcset = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g";
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g"
var logo = document.getElementById('hplogo');
undefined
logo.setAttribute("srcset", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g");
undefined
log
VM2680:1 Uncaught ReferenceError: log is not defined(…)(anonymous function) @ VM2680:1
logo
<img alt=​"Google" height=​"92" id=​"hplogo" src=​"/​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png" srcset=​"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g" style=​"padding-top:​109px" width=​"272" onload=​"window.lol&&lol()​">​
logo.setAttribute =("height", "150");
"150"
logo.style.width = "500px"
"500px"
logo.style.width = "1000px"
"1000px"
logo.style.height = "1000px"
"1000px"
logo.style.height = "200px"
"200px"
logo.style.width = "200px"
"200px"
logo.style.border = "2px solid purple"
"2px solid purple"
logo.style.height = "100px"
"100px"
var a = document.querySelectorAll("a");
undefined
var links = document.getElementsByTagName("a");
undefined
links
[<a href=​"/​setprefs?suggon=2&prev=https:​/​/​www.google.com/​?gws_rd%3Dssl&sig=0_vSYM-qdq0tu0qGNqcRhcpPu6NxU%3D" style=​"left:​-1000em;​position:​absolute">​Screen reader users, click here to turn off Google Instant.​</a>​, <a class=​"gb_P" data-pid=​"23" href=​"https:​/​/​mail.google.com/​mail/​?tab=wm" data-ved=​"0EMIuCBUoAA">​Gmail​</a>​, <a class=​"gb_P" data-pid=​"2" href=​"https:​/​/​www.google.com/​imghp?hl=en&tab=wi&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKouCBYoAQ">​Images​</a>​, <a class=​"gb_b gb_Rb" href=​"https:​/​/​www.google.com/​intl/​en/​options/​" title=​"Google apps" aria-expanded=​"false" tabindex=​"0" data-ved=​"0EL0nCBc">​</a>​, <a class=​"gb_O" data-pid=​"192" href=​"https:​/​/​myaccount.google.com/​?utm_source=OGB" id=​"gb192" data-ved=​"0EMEuCAAoAA">​…​</a>​, <a class=​"gb_O" data-pid=​"1" href=​"https:​/​/​www.google.com/​webhp?tab=ww&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCAEoAQ" id=​"gb1">​…​</a>​, <a class=​"gb_O" data-pid=​"8" href=​"https:​/​/​maps.google.com/​maps?hl=en&tab=wl" id=​"gb8" data-ved=​"0EMEuCAIoAg">​…​</a>​, <a class=​"gb_O" data-pid=​"36" href=​"https:​/​/​www.youtube.com/​" id=​"gb36" data-ved=​"0EMEuCAMoAw">​…​</a>​, <a class=​"gb_O" data-pid=​"78" href=​"https:​/​/​play.google.com/​?hl=en&tab=w8" id=​"gb78" data-ved=​"0EMEuCAQoBA">​…​</a>​, <a class=​"gb_O" data-pid=​"5" href=​"https:​/​/​news.google.com/​nwshp?hl=en&tab=wn&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCAUoBQ" id=​"gb5">​…​</a>​, <a class=​"gb_O" data-pid=​"23" href=​"https:​/​/​mail.google.com/​mail/​?tab=wm" id=​"gb23" data-ved=​"0EMEuCAYoBg">​…​</a>​, <a class=​"gb_O" data-pid=​"49" href=​"https:​/​/​drive.google.com/​?tab=wo" id=​"gb49" data-ved=​"0EMEuCAcoBw">​…​</a>​, <a class=​"gb_O" data-pid=​"24" href=​"https:​/​/​www.google.com/​calendar?tab=wc" id=​"gb24" data-ved=​"0EMEuCAgoCA">​…​</a>​, <a class=​"gb_O" data-pid=​"119" href=​"https:​/​/​plus.google.com/​?gpsrc=ogpy0&tab=wX" id=​"gb119" data-ved=​"0EMEuCAkoCQ">​…​</a>​, <a class=​"gb_O" data-pid=​"51" href=​"https:​/​/​translate.google.com/​?hl=en&tab=wT" id=​"gb51" data-ved=​"0EMEuCAooCg">​…​</a>​, <a class=​"gb_O" data-pid=​"31" href=​"https:​/​/​photos.google.com/​?tab=wq" id=​"gb31" data-ved=​"0EMEuCAsoCw">​…​</a>​, <a class=​"gb_ka gb_Ie" aria-label=​"More Google apps" href=​"https:​/​/​www.google.com/​intl/​en/​options/​" aria-expanded=​"false" aria-hidden=​"true">​More​</a>​, <a class=​"gb_O" data-pid=​"6" href=​"http:​/​/​www.google.com/​shopping?hl=en&tab=wf&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCAwoDA" id=​"gb6">​…​</a>​, <a class=​"gb_O" data-pid=​"212" href=​"https:​/​/​wallet.google.com/​manage/​?tab=wa" id=​"gb212" data-ved=​"0EMEuCA0oDQ">​…​</a>​, <a class=​"gb_O" data-pid=​"27" href=​"https:​/​/​www.google.com/​finance?tab=we" id=​"gb27" data-ved=​"0EMEuCA4oDg">​…​</a>​, <a class=​"gb_O" data-pid=​"25" href=​"https:​/​/​docs.google.com/​document/​?usp=docs_alc" id=​"gb25" data-ved=​"0EMEuCA8oDw">​…​</a>​, <a class=​"gb_O" data-pid=​"10" href=​"https:​/​/​books.google.com/​bkshp?hl=en&tab=wp&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCBAoEA" id=​"gb10">​…​</a>​, <a class=​"gb_O" data-pid=​"30" href=​"https:​/​/​www.blogger.com/​?tab=wj" id=​"gb30" data-ved=​"0EMEuCBEoEQ">​…​</a>​, <a class=​"gb_O" data-pid=​"53" href=​"https:​/​/​www.google.com/​contacts/​?hl=en&tab=wC" id=​"gb53" data-ved=​"0EMEuCBIoEg">​…​</a>​, <a class=​"gb_O" data-pid=​"300" href=​"https:​/​/​hangouts.google.com/​" id=​"gb300" data-ved=​"0EMEuCBMoEw">​…​</a>​, <a class=​"gb_la gb_Be" href=​"https:​/​/​www.google.com/​intl/​en/​options/​" aria-hidden=​"true">​Even more from Google​</a>​, <a class=​"gb_Me gb_Ha gb_rb" id=​"gb_70" href=​"https:​/​/​accounts.google.com/​ServiceLogin?hl=en&passive=true&continue=https:​/​/​www.google.com/​%3Fgws_rd%3Dssl" target=​"_top">​Sign in​</a>​, <a href=​"https:​/​/​www.google.com/​webhp?hl=en&sa=X&ved=0ahUKEwisnLPe5rLNAhVVOlIKHf7wD5gQPAgD" title=​"Go to Google Home" id=​"logo">​…​</a>​, <a class=​"gsst_a" href=​"javascript:​void(0)​" aria-label=​"Search by voice">​…​</a>​, <a>​Restart listening​</a>​, <a style=​"padding-left:​ 10px;​">​Help​</a>​, <a>​Start listening for "Ok Google"​</a>​, <a href=​"/​/​support.google.com/​websearch/​answer/​186645?hl=en">​Learn more​</a>​, <a class=​"_Gs" href=​"/​/​www.google.com/​intl/​en/​policies/​privacy/​?fg=1">​Privacy​</a>​, <a class=​"_Gs" href=​"/​/​www.google.com/​intl/​en/​policies/​terms/​?fg=1">​Terms​</a>​, <a class=​"_Gs" href=​"https:​/​/​www.google.com/​preferences?hl=en" id=​"fsettl" aria-controls=​"fsett" aria-expanded=​"false" role=​"button" jsaction=​"foot.cst">​Settings​</a>​, <a href=​"https:​/​/​www.google.com/​preferences?hl=en&fg=1">​Search settings​</a>​, <a href=​"/​advanced_search?hl=en&fg=1">​Advanced search​</a>​, <a href=​"/​history/​optout?hl=en&fg=1">​  History ​</a>​, <a href=​"/​/​support.google.com/​websearch/​?p=ws_results_help&hl=en&fg=1">​Search Help​</a>​, <a href=​"javascript:​void(0)​" data-bucket=​"websearch" id=​"_Yvd" target=​"_blank" jsaction=​"gf.sf" data-ved=​"0ahUKEwisnLPe5rLNAhVVOlIKHf7wD5gQLggL">​  Send feedback ​</a>​, <a class=​"_Gs" href=​"/​/​www.google.com/​intl/​en/​ads/​?fg=1">​Advertising​</a>​, <a class=​"_Gs" href=​"/​/​www.google.com/​services/​?fg=1">​Business​</a>​, <a class=​"_Gs" href=​"/​/​www.google.com/​intl/​en/​about.html?fg=1">​About​</a>​, <a href=​"https:​/​/​support.google.com/​chrome/​?p=ui_hotword_search" target=​"_blank" onmousedown=​"return rwt(this,'','','','','AFQjCNHyNmNOmnFoJjpgISA7IEqNETP_hw','','0ahUKEwisnLPe5rLNAhVVOlIKHf7wD5gQgDYIBg','','',event)​">​Learn more​</a>​]
links.setAttribute()
VM3538:1 Uncaught TypeError: links.setAttribute is not a function(…)(anonymous function) @ VM3538:1
for(var i = 0; i < links.length; i++){
VM3614:1 Uncaught SyntaxError: Unexpected end of input
for(var i = 0; i < links.length; i++){
console.log(links[i].textContent)
}
VM3670:2 Screen reader users, click here to turn off Google Instant.
VM3670:2 Gmail
VM3670:2 Images
VM3670:2 
VM3670:2 My Account
VM3670:2 Search
VM3670:2 Maps
VM3670:2 YouTube
VM3670:2 Play
VM3670:2 News
VM3670:2 Gmail
VM3670:2 Drive
VM3670:2 Calendar
VM3670:2 Google+
VM3670:2 Translate
VM3670:2 Photos
VM3670:2 More
VM3670:2 Shopping
VM3670:2 Wallet
VM3670:2 Finance
VM3670:2 Docs
VM3670:2 Books
VM3670:2 Blogger
VM3670:2 Contacts
VM3670:2 Hangouts
VM3670:2 Even more from Google
VM3670:2 Sign in
2VM3670:2 
VM3670:2 Restart listening
VM3670:2 Help
VM3670:2 Start listening for "Ok Google"
VM3670:2 Learn more
VM3670:2 Privacy
VM3670:2 Terms
VM3670:2 Settings
VM3670:2 Search settings
VM3670:2 Advanced search
VM3670:2   History 
VM3670:2 Search Help
VM3670:2   Send feedback 
VM3670:2 Advertising
VM3670:2 Business
VM3670:2 About
VM3670:2 Learn more
undefined
for(var i = 0; i < links.length; i++){
links[i].style.background:"pink";
}
VM3773:2 Uncaught SyntaxError: Unexpected token :
for(var i = 0; i < links.length; i++){
links[i].style.background = "pink";
}
"pink"
for(var i = 0; i < links.length; i++){
links[i].style.border = "1px dashed";
}
"1px dashed"
for(var i = 0; i < links.length; i++){
links[i].style.border = "1px dashed purple";
links[i].style.color = "orange";
}
"orange"
for(var i = 0; i < links.length; i++){
console.log(links[i].getAttribute("href");
}
VM4652:2 Uncaught SyntaxError: missing ) after argument list
for(var i = 0; i < links.length; i++){
console.log(links[i].getAttribute("href"));
}
VM4653:2 /setprefs?suggon=2&prev=https://www.google.com/?gws_rd%3Dssl&sig=0_vSYM-qdq0tu0qGNqcRhcpPu6NxU%3D
VM4653:2 https://mail.google.com/mail/?tab=wm
VM4653:2 https://www.google.com/imghp?hl=en&tab=wi&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKouCBYoAQ
VM4653:2 https://www.google.com/intl/en/options/
VM4653:2 https://myaccount.google.com/?utm_source=OGB
VM4653:2 https://www.google.com/webhp?tab=ww&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCAEoAQ
VM4653:2 https://maps.google.com/maps?hl=en&tab=wl
VM4653:2 https://www.youtube.com/
VM4653:2 https://play.google.com/?hl=en&tab=w8
VM4653:2 https://news.google.com/nwshp?hl=en&tab=wn&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCAUoBQ
VM4653:2 https://mail.google.com/mail/?tab=wm
VM4653:2 https://drive.google.com/?tab=wo
VM4653:2 https://www.google.com/calendar?tab=wc
VM4653:2 https://plus.google.com/?gpsrc=ogpy0&tab=wX
VM4653:2 https://translate.google.com/?hl=en&tab=wT
VM4653:2 https://photos.google.com/?tab=wq
VM4653:2 https://www.google.com/intl/en/options/
VM4653:2 http://www.google.com/shopping?hl=en&tab=wf&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCAwoDA
VM4653:2 https://wallet.google.com/manage/?tab=wa
VM4653:2 https://www.google.com/finance?tab=we
VM4653:2 https://docs.google.com/document/?usp=docs_alc
VM4653:2 https://books.google.com/bkshp?hl=en&tab=wp&ei=DeNlV-64H4-6yQLZ_aeICA&ved=0EKkuCBAoEA
VM4653:2 https://www.blogger.com/?tab=wj
VM4653:2 https://www.google.com/contacts/?hl=en&tab=wC
VM4653:2 https://hangouts.google.com/
VM4653:2 https://www.google.com/intl/en/options/
VM4653:2 https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/%3Fgws_rd%3Dssl
VM4653:2 https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwisnLPe5rLNAhVVOlIKHf7wD5gQPAgD
VM4653:2 javascript:void(0)
VM4653:2 null
VM4653:2 null
VM4653:2 null
VM4653:2 //support.google.com/websearch/answer/186645?hl=en
VM4653:2 //www.google.com/intl/en/policies/privacy/?fg=1
VM4653:2 //www.google.com/intl/en/policies/terms/?fg=1
VM4653:2 https://www.google.com/preferences?hl=en
VM4653:2 https://www.google.com/preferences?hl=en&fg=1
VM4653:2 /advanced_search?hl=en&fg=1
VM4653:2 /history/optout?hl=en&fg=1
VM4653:2 //support.google.com/websearch/?p=ws_results_help&hl=en&fg=1
VM4653:2 javascript:void(0)
VM4653:2 //www.google.com/intl/en/ads/?fg=1
VM4653:2 //www.google.com/services/?fg=1
VM4653:2 //www.google.com/intl/en/about.html?fg=1
VM4653:2 https://support.google.com/chrome/?p=ui_hotword_search
undefined
for(var i = 0; i < links.length; i++){
console.log(links[i].setAttribute("href", "http://www.bing.com"));
}
45VM4654:2 undefined
undefined
links
[<a href=​"http:​/​/​www.bing.com" style=​"left:​ -1000em;​ position:​ absolute;​ border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Screen reader users, click here to turn off Google Instant.​</a>​, <a class=​"gb_P" data-pid=​"23" href=​"http:​/​/​www.bing.com" data-ved=​"0EMIuCBUoAA" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Gmail​</a>​, <a class=​"gb_P" data-pid=​"2" href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Images​</a>​, <a class=​"gb_b gb_Rb" href=​"http:​/​/​www.bing.com" title=​"Google apps" aria-expanded=​"false" tabindex=​"0" data-ved=​"0EL0nCBc" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​</a>​, <a class=​"gb_O" data-pid=​"192" href=​"http:​/​/​www.bing.com" id=​"gb192" data-ved=​"0EMEuCAAoAA" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"1" href=​"http:​/​/​www.bing.com" id=​"gb1" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"8" href=​"http:​/​/​www.bing.com" id=​"gb8" data-ved=​"0EMEuCAIoAg" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"36" href=​"http:​/​/​www.bing.com" id=​"gb36" data-ved=​"0EMEuCAMoAw" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"78" href=​"http:​/​/​www.bing.com" id=​"gb78" data-ved=​"0EMEuCAQoBA" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"5" href=​"http:​/​/​www.bing.com" id=​"gb5" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"23" href=​"http:​/​/​www.bing.com" id=​"gb23" data-ved=​"0EMEuCAYoBg" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"49" href=​"http:​/​/​www.bing.com" id=​"gb49" data-ved=​"0EMEuCAcoBw" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"24" href=​"http:​/​/​www.bing.com" id=​"gb24" data-ved=​"0EMEuCAgoCA" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"119" href=​"http:​/​/​www.bing.com" id=​"gb119" data-ved=​"0EMEuCAkoCQ" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"51" href=​"http:​/​/​www.bing.com" id=​"gb51" data-ved=​"0EMEuCAooCg" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"31" href=​"http:​/​/​www.bing.com" id=​"gb31" data-ved=​"0EMEuCAsoCw" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_ka gb_Ie" aria-label=​"More Google apps" href=​"http:​/​/​www.bing.com" aria-expanded=​"false" aria-hidden=​"true" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​More​</a>​, <a class=​"gb_O" data-pid=​"6" href=​"http:​/​/​www.bing.com" id=​"gb6" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"212" href=​"http:​/​/​www.bing.com" id=​"gb212" data-ved=​"0EMEuCA0oDQ" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"27" href=​"http:​/​/​www.bing.com" id=​"gb27" data-ved=​"0EMEuCA4oDg" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"25" href=​"http:​/​/​www.bing.com" id=​"gb25" data-ved=​"0EMEuCA8oDw" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"10" href=​"http:​/​/​www.bing.com" id=​"gb10" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"30" href=​"http:​/​/​www.bing.com" id=​"gb30" data-ved=​"0EMEuCBEoEQ" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"53" href=​"http:​/​/​www.bing.com" id=​"gb53" data-ved=​"0EMEuCBIoEg" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_O" data-pid=​"300" href=​"http:​/​/​www.bing.com" id=​"gb300" data-ved=​"0EMEuCBMoEw" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gb_la gb_Be" href=​"http:​/​/​www.bing.com" aria-hidden=​"true" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Even more from Google​</a>​, <a class=​"gb_Me gb_Ha gb_rb" id=​"gb_70" href=​"http:​/​/​www.bing.com" target=​"_top" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Sign in​</a>​, <a href=​"http:​/​/​www.bing.com" title=​"Go to Google Home" id=​"logo" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a class=​"gsst_a" href=​"http:​/​/​www.bing.com" aria-label=​"Search by voice" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​…​</a>​, <a style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​" href=​"http:​/​/​www.bing.com">​Restart listening​</a>​, <a style=​"padding-left:​ 10px;​ border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​" href=​"http:​/​/​www.bing.com">​Help​</a>​, <a style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​" href=​"http:​/​/​www.bing.com">​Start listening for "Ok Google"​</a>​, <a href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Learn more​</a>​, <a class=​"_Gs" href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Privacy​</a>​, <a class=​"_Gs" href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Terms​</a>​, <a class=​"_Gs" href=​"http:​/​/​www.bing.com" id=​"fsettl" aria-controls=​"fsett" aria-expanded=​"false" role=​"button" jsaction=​"foot.cst" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Settings​</a>​, <a href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Search settings​</a>​, <a href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Advanced search​</a>​, <a href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​  History ​</a>​, <a href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Search Help​</a>​, <a href=​"http:​/​/​www.bing.com" data-bucket=​"websearch" id=​"_Yvd" target=​"_blank" jsaction=​"gf.sf" data-ved=​"0ahUKEwisnLPe5rLNAhVVOlIKHf7wD5gQLggL" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​  Send feedback ​</a>​, <a class=​"_Gs" href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Advertising​</a>​, <a class=​"_Gs" href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Business​</a>​, <a class=​"_Gs" href=​"http:​/​/​www.bing.com" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​About​</a>​, <a href=​"http:​/​/​www.bing.com" target=​"_blank" onmousedown=​"return rwt(this,'','','','','AFQjCNHyNmNOmnFoJjpgISA7IEqNETP_hw','','0ahUKEwisnLPe5rLNAhVVOlIKHf7wD5gQgDYIBg','','',event)​" style=​"border:​ 1px dashed purple;​ color:​ orange;​ background:​ pink;​">​Learn more​</a>​
