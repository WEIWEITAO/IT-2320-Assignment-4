document.body.onload = addElement;

function addElement () {
	function character(char, voice) {
    	this.movieTitle = "Zootopia";
    	this.name = char;
    	this.by = voice;
	}

	var character1 = new character("Judy Hopps", "Ginnifer Goodwin");
	var character2 = new character("Nicholas Wilde", "Jason Bateman");
	var character3 = new character("Chief Bogo", "Idris Elba");
	var character4 = new character("Dawn Bellwether", "Jenny Slate");
	var characters = [character1, character2, character3, character4];	

	for (var i =  0; i < characters.length; i++) {
		var newDiv = document.createElement("li");
		msg = characters[i].name + ", by " + characters[i].by + ".";
		var newContent = document.createTextNode(msg); 
		newDiv.appendChild(newContent);
		var currentDiv = document.getElementById("div");
    	document.body.insertBefore(newDiv, currentDiv);
	}    
}