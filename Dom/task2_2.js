/**
 * Created by Admin on 06.12.2015.
 */

function getAllLabels(){
    var table = document.getElementById('age-table');
    var elements = table.getElementsByTagName('label');

    for (var i =0; i < elements.length; i++){
        var input = elements[i].getElementsByTagName('input');
        console.log(input[0].value + ' : ' + input[0].checked);
    }
}

function getAge(){
    var table = document.getElementById('age-table');
    var cells = table.getElementsByTagName('td');

    // How to get the text from that cell?
    console.log(cells[0]);
}

function getFormById(formName){
    var form = document.getElementsByName(formName);

    if (form != null){
        console.log('The form has been found!');
    }
}

getFormById('search-person');

// getAllLabels();
getAge();