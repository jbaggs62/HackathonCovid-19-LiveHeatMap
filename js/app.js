$(function() {
	$('#tabsMainMenu > li:not(:first) > a').addClass('inactive');
	$('.dataHolder').addClass('hidden');
	$('.dataHolder:first').removeClass('hidden');
	    
	$('#tabsMainMenu > li > a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ //this is the start of our condition 
			$('#tabsMainMenu > li > a').addClass('inactive');           
			$(this).removeClass('inactive');
	    
			$('.dataHolder').addClass('hidden');
			$('#'+ t + 'C').hide().removeClass('hidden').fadeIn('slow');
		}
	});
	
	
	
	
	
	$('#tabsStates > li:not(:first) > a').addClass('inactive');
	$('#stateDataC .data').addClass('hidden');
	$('#stateDataC .data:first').removeClass('hidden');
	    
	$('#tabsStates > li > a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ //this is the start of our condition 
			$('#tabsStates > li > a').addClass('inactive');           
			$(this).removeClass('inactive');
	    
			$('#stateDataC .data').addClass('hidden');
			$('#'+ t + 'C').hide().removeClass('hidden').fadeIn('slow');
		}
	});
	
	
	
	
	// UNITED STATES SUMMARY
	$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/summary", function(data) {
		var options = {
				url: data.url,
				container: document.getElementById("usDashboardDetail"),
				parameters: { },
				scrolling: "no",
				height: "AutoFit",
				width: "100%"
		};
		dashboard = QuickSightEmbedding.embedDashboard(options);
	});
	$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/details", function(data) {
		var options = {
				url: data.url,
				container: document.getElementById("usDashboardSummary"),
				parameters: { },
				scrolling: "no",
				height: "AutoFit",
				width: "100%"
		};
		dashboard = QuickSightEmbedding.embedDashboard(options);
	});
	
	// ALABAMA
	$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/summary", function(data) {
		var options = {
				url: data.url,
				container: document.getElementById("alDashboardDetail"),
				parameters: {
					state: 'AL'
				},
				scrolling: "no",
				height: "AutoFit",
				width: "100%"
		};
		dashboard = QuickSightEmbedding.embedDashboard(options);
	});
	$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/details", function(data) {
		var options = {
				url: data.url,
				container: document.getElementById("alDashboardSummary"),
				parameters: {
					state: 'AL'
				},
				scrolling: "no",
				height: "AutoFit",
				width: "100%"
		};
		dashboard = QuickSightEmbedding.embedDashboard(options);
	});
});