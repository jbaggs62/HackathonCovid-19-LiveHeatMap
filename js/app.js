$(function() {
	$('#tabsVertical li a:not(:first)').addClass('inactive');
	$('.content').addClass('hidden');
	$('.content:first').removeClass('hidden');
	    
	$('#tabsVertical li a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ //this is the start of our condition 
			$('#tabsVertical li a').addClass('inactive');           
			$(this).removeClass('inactive');
	    
			$('.content').addClass('hidden');
			$('#'+ t + 'C').hide().removeClass('hidden').fadeIn('slow');
		}
	});
	
	
	
	
	
	$('#tabsStates li a:not(:first)').addClass('inactive');
	$('#stateDataC .data').addClass('hidden');
	$('#stateDataC .data:first').removeClass('hidden');
	    
	$('#tabsStates li a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ //this is the start of our condition 
			$('#tabsStates li a').addClass('inactive');           
			$(this).removeClass('inactive');
	    
			$('#stateDataC .data').addClass('hidden');
			$('#'+ t + 'C').hide().removeClass('hidden').fadeIn('slow');
		}
	});
});