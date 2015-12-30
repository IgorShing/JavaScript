/**
 * 
 */
function Machine(power){
	
	this._enabled = false;
	// Protected field
	this._power = power;
	
	var self = this;	
	
	this.enable = function(){
		self._enabled = true;
	};
	
	this.disable = function(){
		self._enabled = false;
	}
}

function CoffeeMachine(power){
	
	// Machine.call(this, power);  // Inheritance
    Machine.apply(this, arguments);
	
	var waterAmount = 0;
	
	this.setWaterAmount = function(amount){
		waterAmount = amount;
	}
	
	this.run(){
		console.log("Method run");
	}
	
	var parentEnable = this.enable;
	this.enable = function(){
		parentEnable();
		this.run();
	}
}

function runCoffeeMachineExample(){
	
	var power = 400;
	var waterAmount = 1000;
	
	var coffeeMachine = new  CoffeeMachine(power);
	
	coffeeMachine.enable();
	coffeeMachine.setWaterAmount(waterAmount);
	alert(coffeeMachine._power);
	coffeeMachine.disable();
}
