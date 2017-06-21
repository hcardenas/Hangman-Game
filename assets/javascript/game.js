var win_num = 2;
var current_word ;
var hidden_word;
var current_word_arr;  
var already_guessed = [];
var number_of_guess = 20;

set_up(1);


      // Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
	var charCode = event.keyCode;
	var char = event.key;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {			  

		game(char);


		

		if (number_of_guess === 0) {
			alert("Game over, Please try again!");
			set_up(0);
		}

		print_screen();
	    
	}
};


function game(char) {
	var hidden_string_arr = hidden_string.split("");
	var current_word_arraya = current_word.split("");

	for (var i = 0; i < hidden_string.length; i++) {
		
	}

	if (already_guessed.indexOf(char) === -1) {
		console.log(current_word_arr.indexOf(char));
		already_guessed.push(char);
		number_of_guess--;
	}

	
}

function set_up (flag) {

	already_guessed = [];
	number_of_guess = 20;

	if (flag === 1) {
		word_array_setUp();
	}
	else {
		current_word = new_element(); 	
	}

	print_screen();
}

function guess_string() {
	var string = "";
	for (var i = 0; i < already_guessed.length; i++) {
		string += already_guessed[i] + " ";
	}

	return string;
}

function word_array_setUp () {
	var arr = [
		"Results",
		"HTML",
		"lizard",
		"breathier",
		"gilda",
		"arresting",
		"foregoing",
		"discloser",
		"llewellyn",
		"revibrate",
		"critique",
		"cabuya",
		"vincent",
		"interligamentous",
		"reinspiration",
		"perforator",
		"talion",
		"vainglorious",
		"unsedate",
		"sorest",
		"mesogloeal",
		"harvest",
		"ceaselessly",
		"nardoo",
		"firework",
		"ostentatiously",
		"necessarily",
		"erlangen",
		"noneccentric",
		"vetiver",
		"onomatologically",
		"nitrite",
		"zaibatsu",
		"parisonic",
		"contradicter",
		"isogamous",
		"incorrigibility",
		"oulu",
		"righties",
		"exoskeletal",
		"hackettstown",
		"crusading",
		"glucoside",
		"noncoinage",
		"eurytopicity",
		"reedifying",
		"unmarriageable",
		"subspecialize",
		"meagre",
		"ductor",
		"unemblazoned",
		"unjeering"
	]

	current_word_arr = arr;
	current_word = new_element();
}
function new_element() {
	var word = current_word_arr[Math.floor(Math.random()*current_word_arr.length)];
	remove_elem (current_word_arr, word);
	hidden_string_func(word);
	return word;
}

function remove_elem (array, element) {
	var index = array.indexOf(current_word);
	if (index > -1) {
	    current_word_arr.splice(index, 1);
	}
}

function hidden_string_func(str) {
	var string = "";
	for (var i = 0; i < str.length - 1; i++) {
		string += "_";
	}

	string += "_";

	hidden_string = string;
}

function print_screen() {
		console.log("current word: " + current_word + "\ncurrent hidden word: " + hidden_string );
		document.getElementById("win_num").innerHTML = win_num ;
	    document.getElementById("current_word").innerHTML = hidden_string;
	    document.getElementById("number_of_guess").innerHTML = number_of_guess;
	 	document.getElementById("already_guessed").innerHTML = guess_string();
}
