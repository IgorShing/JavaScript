/**
 * Created by Admin on 06.12.2015.
 */

function checkAllStates(){
    var checkBoxes = document.getElementsByName('vehicle');

    for (var i =0; i < checkBoxes.length; i++){
        var element = checkBoxes[i];
        console.log(element.checked);
     }
}

function showInputInfo(){
    var input = document.body.children[0];

    console.log(input.type);
    console.log(input.id);
    console.log(input.value);
}

// checkAllStates();
showInputInfo();

