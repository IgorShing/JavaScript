/**
 * 
 */

$(function(){
	// $("#panel_1").hide(1000);
	// $("#panel_1").fadeToggle(1000);
	
/*	$('#panel_2').css(
			{color: 'red', 
			 fontWeight: 'bold',
			 opacity: '0.2'}
	);*/
	
	// $("#btn1").html('Load');
	
	$("#btn1").on('mouseover', function(){
		$("#panel_1").fadeOut(200);
	});
	
	$("#btn2").on('mouseover', function(){
		$("#panel_2").fadeOut(200);
	});
	
	$("#btn3").on('mouseover', function(){
		$("#panel_3").fadeOut(200);
	});
	
	$("#btn4").on('mouseover', function(){
		$("#panel_4").fadeOut(200);
	});
	
	// Clicks
	$("#btn1").on('click', function(){
		$("#panel_1").fadeIn(200);
	});
	
	$("#btn2").on('click', function(){
		$("#panel_2").fadeIn(200);
	});
	
	$("#btn3").on('click', function(){
		$("#panel_3").fadeIn(200);
	});
	
	$("#btn4").on('click', function(){
		$("#panel_4").fadeIn(200);
	});

});