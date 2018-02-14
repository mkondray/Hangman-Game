document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");


var wordBank =["raptors", "celtics", "cavaliers", "bucks", "wizards", "pacers", "76ers",
			   "heat", "pistons", "hornets", "knicks", "bulls", "nets", "magic", "hawks",
			   "warriors", "rockets", "spurs", "timberwolves", "thunder", "nuggets",
			   "trailblazers", "pelicans", "clippers", "jazz", "lakers", "grizzlies",
			   "kings", "suns", "mavericks"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
				"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "7", "6"];

var winCount = 0;
var loseCount = 0;

var generatedWord = "";
var lettersInWord = [];
var blanksAndRightLetters =[];
var numberOfBlanks = 0;

var rightLetters = 0;
var wrongLetters = [];
var guessesLeft = 6;

function start()
{
	alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
				"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "7", "6"];
	generatedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = generatedWord.split("");
	numberOfBlanks = lettersInWord.length;
	guessesLeft = 6;
	rightLetters = 0;
	wrongLetters =[];
	blanksAndRightLetters =[];

	for(var i = 0; i< numberOfBlanks; i++)
	{
		blanksAndRightLetters.push("_");
		document.getElementById("word").innerHTML = blanksAndRightLetters;
	}

	document.getElementById("word").innerHTML = blanksAndRightLetters.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(", ");
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("winCount").innerHTML = winCount;
	document.getElementById("lossCount").innerHTML = loseCount;
}

start();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < alphabet.length; i++)
	{	
		if(letterGuessed === alphabet[i] && test === true)
		{
			var splicedWord = alphabet.splice(i,1);
			compareLetters(letterGuessed);
			winLose();
		}
	}
}

function compareLetters(userKey)
{
	if(generatedWord.indexOf(userKey) > -1)
	{
		for(var i = 0; i < numberOfBlanks; i++)
		{
			if(lettersInWord[i] === userKey)
			{
				rightLetters++;
				blanksAndRightLetters[i] = userKey;
				document.getElementById("word").innerHTML = blanksAndRightLetters.join(" ");
			}	
		}
	}

	else
	{
		wrongLetters.push(userKey);
		guessesLeft--;
		document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(", ");
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
	}
}

function winLose()
{
	if(rightLetters === numberOfBlanks)
	{
		winCount++;
		document.getElementById("winCount").innerHTML = winCount;
		alert("You Win!");
		reset();
	}

	else if(guessesLeft === 0)
	{
		loseCount++;
		document.getElementById("lossCount").innerHTML = loseCount;
		alert("You Lose!");
		reset();
	}
}

function reset()
{
	alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
				"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "7", "6"];
	generatedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = generatedWord.split("");
	numberOfBlanks = lettersInWord.length;
	letterGuessed = 0;
	guessesLeft = 6;
	rightLetters = 0;
	wrongLetters =[];
	blanksAndRightLetters =[];
	test=false;
	start();
}

 });