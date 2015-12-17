/**
 * 
 */

var form = document.getElementsByTagName('form');

var registeredCheckBox = form[0].getElementsByName('registered');

function onRegisteredChange() {
  alert("Alert");
  document.write('<strong>Just a peace of text</strong>');
}

// var divElement = document.querySelector('.message');
var divElement = document.getElementById('message');

divElement.style.width = '100px'; 
document.body.style.color = '#abc';
