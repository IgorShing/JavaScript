var machine{
	var name = 'Default machine';

	function getName(){
		return name;
	}

	this.getName:getName;
}
/*
function Auto(maxSpeed){
	this.maxSpeed = maxSpeed;
}

Auto.prototype = machine;

var auto = new Auto(300);
*/
alert(machine.getName());

var animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true