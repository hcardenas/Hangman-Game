var win_num = 0;
var current_word ;
var hidden_word;
var current_word_arr;  
var already_guessed = [];
var number_of_guess = 0;

set_up(1);


      // Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
	var charCode = event.keyCode;
	var char = event.key;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {			  

		game(char);
		// main game function		


		// checks if the player lost 
		if (number_of_guess === 0) {
			play_sound("you_lose.wav", ("Game over, Please try again!"));
			set_up(0);
		}

		// simple print screen function
		print_screen();
	    
	}
};

// -------------------------------
// main game function it checks if the player won and sets up the game
// -------------------------------
function game(char) {
	// if player already used or guessed  a letter go in else do nothing
	if (already_guessed.indexOf(char) === -1) {
		// wer inside because player used a new letter to push it in the array
		already_guessed.push(char);

		// sets a flag to check if the letter was used, if 
		// it was used then do not count down the chances	
		var flag = 0;


		// sets up 2 arrays in order to check for indidual letters
		var hidden_string_arr = hidden_string.split("");
		var current_word_array = current_word.split("");


		// checks if letter is in the current word and updates hidden string
		for (var i = 0; i < hidden_string.length; i++) {
			if (char === current_word_array[i]) {
				hidden_string_arr[i] = char;
				flag++;
			}
		}

		// creates new hidden string with letters guessed
		var new_string = "";
		for (var i = 0; i < hidden_string_arr.length; i++) {
			new_string += hidden_string_arr[i];
		}

		hidden_string = new_string;


		// if player has no more letters to guess win
		if (hidden_string === current_word ) {
			play_sound("win2.mp3", ("Congratulations... the word was.  ' " + current_word + "'.") );
			win_num++;
			set_up(0);
		}

		// if flag is still 0 then the letter wasnt in the current letter count down
		if (flag === 0) {
			number_of_guess--;
		}
	}
}

// -------------------------------
// dounc function that also dysplais the win/lose message
// -------------------------------
function play_sound (sound, message) {
	var audio = new Audio('assets/sounds/' + sound);
	audio.play();
	confirm(message);
}

// -------------------------------
// sets up variables if screen is new iwth flag1 
// else simple picks a new word removes old from array and re prints screen
// -------------------------------
function set_up (flag) {

	already_guessed = [];

	if (flag === 1) {
		word_array_setUp();
		number_of_guess = Math.floor(current_word.length  / 2);
		print_screen();
	}
	else {
		current_word = new_element();
		number_of_guess = Math.floor(current_word.length  / 2);
	}
}

// -------------------------------
// creates string to dysplay on screen the letters already used
// -------------------------------
function guess_string() {
	var string = "";
	for (var i = 0; i < already_guessed.length; i++) {
		string += already_guessed[i] + " ";
	}

	return string;
}

// -------------------------------
// sets up the array to be used for the game, this function is only
// called when the page is first loaded 
// -------------------------------
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

// -------------------------------
// sets up a new word from the array and creates the hidden string 
// using that string
// -------------------------------
function new_element() {
	var word = current_word_arr[Math.floor(Math.random()*current_word_arr.length)];
	remove_elem (current_word_arr, word);
	hidden_string_func(word);

	return word;
}

// -------------------------------
// removes teh current word from the workign array
// -------------------------------
function remove_elem (array, element) {
	var index = array.indexOf(current_word);
	if (index > -1) {
	    current_word_arr.splice(index, 1);
	}
}

// -------------------------------
// creates the hidden string used on screen from the selected current string
// -------------------------------
function hidden_string_func(str) {
	var string = "";
	for (var i = 0; i < str.length - 1; i++) {
		string += "_";
	}

	string += "_";

	hidden_string = string;
}

// -------------------------------
// print to screen function
// -------------------------------
function print_screen() {
		console.log("current word: " + current_word + "\ncurrent hidden word: " + hidden_string );
		document.getElementById("win_num").innerHTML = win_num ;
	    document.getElementById("current_word").innerHTML = hidden_string;
	    document.getElementById("number_of_guess").innerHTML = number_of_guess;
	 	document.getElementById("already_guessed").innerHTML = guess_string();
}
