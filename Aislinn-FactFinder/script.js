document.querySelector('#a').addEventListener("click",factOne);

function factOne(){
	document.getElementById('factbox').innerHTML = "The oldest-known living land animal is a tortoise named Jonathan, who is 187 years old. He was born in 1832 and has lived on the island of St. Helena in the Atlantic Ocean since 1882.";
	
	document.querySelector('#factbox').innerHTML += "<img src='images/turtle.jpg' alt='Picture of a tortise' id='turtle'>";
	
}//factOne

document.querySelector('#b').addEventListener("click",factTwo);

function factTwo(){
	document.getElementById('factbox').innerHTML = "Flamingoes are only pink because of chemicals called carotenoids in the algae and fish (which also eat the algae) they eat; their feathers are grayish white when they’re born.";
	
	document.querySelector('#factbox').innerHTML += "<img src='images/flamingo.jpg' alt='Picture of a flamingo' id='flamingo'>";
	
}//factTwo

document.querySelector('#c').addEventListener("click",factThree);

function factThree(){
	document.getElementById('factbox').innerHTML = "It takes 570 gallons to paint the exterior of the White House."
	
	document.getElementById('factbox').innerHTML += "<img src='images/paintbucket.jpg' alt='Bucket of white paint' id='paintbucket'>";
	
}//factThree

document.querySelector('#d').addEventListener("click",factFour);

function factFour(){
	document.getElementById('factbox').innerHTML = "Hawaiian pizza was created in Ontario, Canada, by Greek immigrant Sam Panopoulos in 1962.";
	
	document.querySelector('#factbox').innerHTML += "<img src='images/pizza.jpg' alt='Picture of a Hawaiian pizza' id='pizza'>";
	
}//factFour

document.querySelector('#e').addEventListener("click",factFive);

function factFive(){
	document.getElementById('factbox').innerHTML = "The different colors of Froot Loops cereal all taste the same—they’re not individual flavors. ";
	
	document.querySelector('#factbox').innerHTML += "<img src='images/frootloops.jpg' alt='Picture of frootloops in milk' id='frootloops'>";
	
}//factFive

document.querySelector('#pastel').addEventListener("click",pastelTheme);

function pastelTheme(){
	var menubuttons;
	var themebuttons;
	
	menubuttons = document.querySelector('#menu').getElementsByTagName('input');
	themebuttons = document.querySelector('#theme').getElementsByTagName('input');
	
	document.querySelector('#currentTheme').innerHTML = "Currently using Pastel Theme";
	document.querySelector('body').style.backgroundColor = "#fbf8cc";
	
	document.querySelector('#factbox').style.backgroundColor = "#FDE4CF";
	document.querySelector('#factbox').style.borderColor = "#edc8a8";
	
	for(var i = 0 ; i < menubuttons.length ; i++){
		menubuttons[i].style.backgroundColor = "#F1C0E8";
	}//for
	for(var i = 0 ; i < themebuttons.length ; i++){
		themebuttons[i].style.backgroundColor = "#FFCFD2";
	}//for
	
}//pasteltheme

document.querySelector('#marshmallow').addEventListener("click",marshmallowTheme);

function marshmallowTheme(){
	var menubuttons;
	var themebuttons;
	
	menubuttons = document.querySelector('#menu').getElementsByTagName('input');
	themebuttons = document.querySelector('#theme').getElementsByTagName('input');
	
	document.querySelector('#currentTheme').innerHTML = "Currently using Toasted Marshmallow Theme";
	
	document.querySelector('body').style.backgroundColor = "#EDEDE9";
	
	document.querySelector('#factbox').style.backgroundColor = "#F5EBE0";
	document.querySelector('#factbox').style.borderColor = "#dbcdbd";
	
	for(var i = 0 ; i < menubuttons.length ; i++){
		menubuttons[i].style.backgroundColor = "#D6CCC2";
	}//for
	for(var i = 0 ; i < themebuttons.length ; i++){
		themebuttons[i].style.backgroundColor = "#e3d5ca";
	}//for
	
}//marshamallowTheme

document.querySelector('#forest').addEventListener("click",forestTheme);

function forestTheme(){
	var menubuttons;
	var themebuttons;
	
	menubuttons = document.querySelector('#menu').getElementsByTagName('input');
	themebuttons = document.querySelector('#theme').getElementsByTagName('input');
	
	document.querySelector('#currentTheme').innerHTML = "Currently using Forest Theme";
	
	document.querySelector('body').style.backgroundColor = "#bac29f";
	
	document.querySelector('#factbox').style.backgroundColor = "#9c6330";
	document.querySelector('#factbox').style.borderColor = "#855326";
	
	for(var i = 0 ; i < menubuttons.length ; i++){
		menubuttons[i].style.backgroundColor = "#99a376";
	}//for
	for(var i = 0 ; i < themebuttons.length ; i++){
		themebuttons[i].style.backgroundColor = "#A79D8B";
	}//for
	
}//forestTheme