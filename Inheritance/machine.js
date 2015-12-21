/**
 * Created by Admin on 06.12.2015.
 */
function Machine() {
    var enabled = false;

    this.enable = function() {
        enabled = true;
        console.log('Machine is enabled');
    };

    this.disable = function() {
        enabled = false;
        console.log('Machine is disabled');
    };
}

function CoffeeMachine(power) {
    Machine.call(this); // отнаследовать

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;

        alert(enabled);
    };

}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable();