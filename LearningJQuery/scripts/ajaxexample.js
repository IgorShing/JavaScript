/**
 * 
 */

$(function(){
	$.ajax({
		type: 'GET',
		url: 'https://www.google.by',
		headers:{
		},
		success: function(data){
			console.log(data);
		}
	})
});