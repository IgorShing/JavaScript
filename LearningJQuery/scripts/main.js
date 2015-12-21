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
	$('.sublist li').on('click', function(){
		if ($(this).parent().is('.sublist')){
			$(this).hide();
		}
	});
		
	// Tab Panel Widget
	$('.tab-panels .tabs li').on('click', function(){
		var panelToShow = $(this).attr('rel');
		
		$('.tab-panels .subpanel.active').slideUp(300, function(){
			
			$('#' + panelToShow).slideDown(300, function(){
				alert($(this).attr('rel'));
			});
			
		});
	})
	
});