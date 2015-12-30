/**
 * 
 */

if (typeof (Calculation) === "undefined")
{
	Calculation = {};
}

function runExample(){
	
	var user = new User();
	
	user.setFirstName("Peter");
	user.setSurname("Johnson");
	
	
	var calc = new Calculation.Profit(200);
	alert(calc);
}

function User(){
	
	var firstName;
	var surname;
	
	this.setFirstName = function(newName){
		firstName = newName;
	}
	
	this.setSurname = function(newSurname){
		surname = newSurname;		
	}
	
	this.getFullName = function() {
		return firstName + ' ' + surname;
	}
}

Calculation.Profit = function(input){
	return 100*input;
}
