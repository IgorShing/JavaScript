/**
 * 
 */

$(function(){
	
	// Clears the content of a panel
	$("#clearPanelContent").on('click', function(){
		$(".panel-content").html('');
	});
	
	var content = "New panel content";

	// Clicks on the buttons
	$(".panel-button").on('click', function(){
		var panelId = $(this).attr('data-panelid');
		$('#' + panelId).toggle();
		$('#' + panelId + ' .panel-content').html(content);
	});

	// Clicks on list elements
	$('li').on('click', function(){
		$(this).removeClass('special')
		$(this).siblings().addClass('special');
	});
	
});