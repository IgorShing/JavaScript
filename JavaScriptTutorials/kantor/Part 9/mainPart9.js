/**
 * 
 */
function Animal(name, speed, birthday){
	this.name = "";
	this.speed = 0;
	this.birthday = null;
	
	// Getters and setters
	
	// Calculate age via birthday
	  Object.defineProperty(this, "age", {
	    get: function() {
	      var todayYear = new Date().getFullYear();
	      return todayYear - this.birthday.getFullYear();
	    }
	  });
	
	this.getName = function(){
		return this.name;
	}
	
	this.setName = function(name){
		if (typeof name === "string"){
			this.name = name;
		} else {
			console.log("Error while setting the name.");
		}
	}
	
	this.getSpeed = function(){
		return this.speed;
	}
	
	this.setSpeed = function(speed){
		if (typeof speed === "number" && speed >= 0){
			this.speed = speed;
		} else {
			console.log("Error while setting the speed.");
		}
	}
	
	this.getBirthday = function(){
		return this.birthday;
	}
	
	this.setBirthday = function(date){
		if (date instanceof Date){
			this.birthday = date;
		} else {
			console.log("Error while setting the birthday.");
		}
	}
	
	// Methods
	this.run = function(speed){
		this.speed +=speed;
		alert(this.name + " runs, the speed is = " + this.speed);
	}
	
	this.stop = function(){
		this.speed = 0;
		alert(this.name + " has stopped.");
	}
	
	// Set values
	
	this.setName(name);
	this.setSpeed(speed);
	this.setBirthday(birthday);
}

console.log("Running...");

// Create an object
var animal = new Animal("rabbit", 2, new Date(2015, 6, 1));

console.log(animal.getName());
console.log(animal.getSpeed());
console.log(animal.getBirthday());

console.log("Done.");
