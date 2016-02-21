/* Declare Function */
function askQuestions () {
	var firstName = prompt('What is your first name?');
	var lastName = prompt('Whast is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if(age >= 18) {

		console.log('User is an adult.');

	} else if (age >= 13) {

		console.log('User is a teenager.');

	} else {

		console.log ('User is a child.');
	}


	/* If the user's first name is General and their last name is not Assembly, then great the general! */

	if (firstName.toLowerCase !== "General") {

		console.log ('You are no General!!!')

	} else if (firstName.toLowerCase == "General" && lastName.toLowerCase !== "Assembly") {

		console.log ('Hello General' + ' ' + lastName)

	} else {

		console.log ("Are you Gaddafi" + "'" + "s cousin?");
	}


	/*  Update the background to the user's favourite colour */
	var faveColour = prompt("What is your favourite Colour?").toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {

		$('h1').css('color', faveColour);

		}

}

/* When the page is loaded */
$(function() {

	// When the user clicks on the image, ask all the questions
	$('img').on('click', askQuestions);

	// When the page is loaded hide all sections
	$('h3').next().hide();


	// When the user clicks and h3
	$('h3').on('click',function() {

		// Toggle the next element - Open or Close depending on the starting state
		// Capital slideToggle is a separate function which includes timing/ animation
		// JavaScript is case sensitive
		$(this).next().slideToggle(800, 'swing');

	});

});

/* When the user hovers on an element */

/* When the user clicks on a link */

