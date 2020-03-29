$(function() {
	// LOAD UNITED STATES DATA
	$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/summary", function(data) {
		var options = {
				url: data.url,
				container: document.getElementById("usDashboardSummary"),
				parameters: {},
				scrolling: "no",
				height: "AutoFit",
				width: "100%"
		};
		dashboard = QuickSightEmbedding.embedDashboard(options);
	});
	$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/details", function(data) {
		var options = {
				url: data.url,
				container: document.getElementById("usDashboardDetail"),
				parameters: {},
				scrolling: "no",
				height: "AutoFit",
				width: "100%"
		};
		dashboard = QuickSightEmbedding.embedDashboard(options);
	});
	
	
	
	
	
	// INITIALIZE COUNTRY / STATE LINKS
	$('#tabsMainMenu > li:not(:first) > a').addClass('inactive');
	$('.dataHolder').addClass('hidden');
	$('.dataHolder:first').removeClass('hidden');
	$('#tabsMainMenu > li > a').click(function(){
		var t = $(this).attr('id');
		
		// What to do if a non-active link is clicked
		if($(this).hasClass('inactive')){
			$('#tabsMainMenu > li > a').addClass('inactive');           
			$(this).removeClass('inactive');
	    
			$('.dataHolder').addClass('hidden');
			$('#'+ t + 'C').hide().removeClass('hidden').fadeIn('slow');
			
			if($($(this).parent()).hasClass("pure-menu-has-children") && $(this).parent().find(".pure-menu-children > .pure-menu-list > li > a:not(.inactive)").length == 0) {
				$(this).parent().find(".pure-menu-children > .pure-menu-list > li:first-child > a").trigger("click");
			}
		}
	});
	
	
	
	
	
	// LOAD STATE VIEW AND DATA
	var states = $("#tabsStates > li > a");
	$.each(states, function(key, data) {
		var abbreviation = data.id.substr(0, 2);
		var name = data.text;
		var twitter = data.dataset.twitter;
		
		var stateLayout = `<!-- ${name} -->
		<div id="${abbreviation}DataC" class="data hidden">
			<div class="splash-container">
			    <div class="splash">
			    	<div>
				        <h1 class="splash-head">
							<span>Current Status:</span>
							${name}
						</h1>
						
						<section id="${abbreviation}DashboardSummary" class="post"></section>
			    	</div>
					
					<div>
				        <a class="twitter-timeline" data-height="500" href="https://twitter.com/${twitter}"></a>
					</div>
			    </div>
			</div>
			
			<div class="content-wrapper">
			    <div class="content">
			        <h2 class="content-head is-center">${name}</h2>
			        
			        <section id="${abbreviation}DashboardDetail" class="post"></section>
			    </div>
			</div>
		</div>`;
		
		$("#stateDataC")[0].innerHTML += stateLayout;
	});
	
	
	
	
	
	// INITIALIZE STATE PAGE LINKS
	function createSummaryStateView(abbreviation) {
		return function(data) {
			var options = {
					url: data.url,
					container: document.getElementById(abbreviation + "DashboardSummary"),
					parameters: {
						state: abbreviation.toUpperCase()
					},
					scrolling: "no",
					height: "AutoFit",
					width: "100%"
			};
			dashboard = QuickSightEmbedding.embedDashboard(options);
		}
	}
	function createDetailedStateView(abbreviation) {
		return function(data) {
			var options = {
					url: data.url,
					container: document.getElementById(abbreviation + "DashboardDetail"),
					parameters: {
						state: abbreviation.toUpperCase()
					},
					scrolling: "no",
					height: "AutoFit",
					width: "100%"
			};
			dashboard = QuickSightEmbedding.embedDashboard(options);
		}
	}
	$('#tabsStates > li > a').addClass('inactive');
	$('#stateDataC .data').addClass('hidden');
	$('#tabsStates > li > a').click(function(){
		var t = $(this).attr('id');
		
		// What to do if a non-active link is clicked
		if($(this).hasClass('inactive')){
			$('#tabsStates > li > a').addClass('inactive');           
			$(this).removeClass('inactive');
	    
			$('#stateDataC .data').addClass('hidden');
			$('#'+ t + 'C').hide().removeClass('hidden').fadeIn('slow');
			
			var abbreviation = this.id.substr(0, 2);
			$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/summary", createSummaryStateView(abbreviation));
			$.getJSON("https://xn57ih8ghl.execute-api.us-east-1.amazonaws.com/prod/county", createDetailedStateView(abbreviation));
		}
	});
});