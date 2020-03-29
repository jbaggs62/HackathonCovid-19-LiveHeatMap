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
	
	
	
	
	
	$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod", function(data) {
		var containerDiv = document.getElementById("dashboardContainer");
		var options = {
				url: data.url,
				container: document.getElementById("usDashboard"),
				parameters: {
					country: 'United States'
				},
				scrolling: "no",
				height: "AutoFit",
				width: "100%"
		};
		dashboard = QuickSightEmbedding.embedDashboard(options);
	});
});