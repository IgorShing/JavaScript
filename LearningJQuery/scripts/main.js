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
		
		// Find closest 
		var $panel = $(this).closest('.tab-panels');
		
		$panel.find('.tabs li.active').removeClass('active');
		
		// Make a panel active
		$(this).addClass('active');
		
		// Find what panel to show
		var panelToShow = $(this).attr('rel');
		
		// Hide the active panel and show the selected
		$panel.find('.subpanel.active').slideUp(300, showNextPanel);
		
		function showNextPanel(){
			$(this).removeClass('active');
			
			$('#' + panelToShow).slideDown(300, function(){
				$(this).addClass('active');
			});
		};
		
	})
	
});