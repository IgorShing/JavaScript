'use strict';
/**
 * 
 */
/*
var interval = setInterval(function(){
	console.log(new Date());
}, 1000); */

$('#slider .slides').animate({'margin-left': -280}, 1000);


$(function(){
	var width = 280;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;
	
	// Cache DOM (improves the performance because search elements just once)
	// Use $ sign her to show that this is a jQuery object
	var $slider = $('#slider'); 
	var $slideContainer = $slider.find('.slides');
	// The list of slides
	var $slides = $slideContainer.find('.slide');
	
	var interval;
	
	// Starts the slider 
	function startSlider(){
	
			// Set interval 
			interval = setInterval(function(){
				// Move a slide
				$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function (){
					currentSlide++;
					if (currentSlide === $slides.length){
						currentSlide = 1;
						$slideContainer.css('margin-left', '0px');
					}
				});
			}, pause);
	}
	
	// Stops the slider
	function stopSlider(){
		clearInterval(interval);
	}
	// Animate 
	
	// If it is the last slide go to position 1 (0px)
	
	// Listen to mouse enter and pause
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	
	startSlider();
	
	// Resume on mouse leave
	
});