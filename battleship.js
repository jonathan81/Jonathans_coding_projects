
var view = {
  displayMessage: function(msg) {
				var messageArea = document.getElementById("messageArea");
				messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
		 var cell = document.getElementById(location);
		 cell.setAttribute("class", "hit");
	},
	displayMiss: function(location) {
	   var cell = document.getElementById(location);
		 cell.setAttribute("class", "miss");
	}
	

}

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thin on?");*/

var model ={
  boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipSunk: 0,
	
	ships: [ {locations: ["06", "16", "26", hits: ["", "", ""] },
	         {locations: ["24", "34", "44", hits: ["", "", ""] },
	         {locations: ["10", "11", "12", hits: ["", "", ""] }],
					 
	fire: function(guess) {
	    
			
			for (var i=0; i < this.numShip; i++){
					var ship = this.ships[i];
					var locations = ship.locations;
					var index = locations.indexOf(guess);
					if (index >= 0) {
					  ship.hits[index] = "hit";
						return true; // We have a hit!
					}
			}
			return: false; 
	}
	
};