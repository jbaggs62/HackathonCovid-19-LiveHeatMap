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
	
	
	
	
	
	var containerDiv = document.getElementById("dashboardContainer");
	var options = {
		url: "https://us-east-1.quicksight.aws.amazon.com/embed/3d48e740a8284893a173cae0a31dd426/dashboards/c84456f6-0fda-4163-9f75-cc6dc81a9bd4?isauthcode=true&identityprovider=quicksight&code=AYABeBTKrYi6l0_h8zDFnLaAVbIAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4P-lAb3AsrVHPwO-wVCEmuFDTp0yz4wFfkrwutzPupewBV3r6CmfpkOCOR84suFcaNQAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDAYHqRNMlsgBAwpHoAIBEIA7qpQe9K1mLKQxRVvKsVeqnLdt4DKfnqYxv8ET7vGZFOyigqyhWHjC0efkiw9vBTKHsOQ_6HMXRW7dRJYCAAAAAAwAABAAAAAAAAAAAAAAAAAAaj6jWlnGSDq1UNrPCfKT-f____8AAAABAAAAAAAAAAAAAAABAAAAm1nNDd3qIgideAiwoaJYQY8sFGJAZdWiS5uX5H3Uk3_tJyuHOLZZWTO0TcIXQml08rSVUl-4nQENHKL3d5Imwb4uV0ZkU9H4f4stl1_7RcKjqkxB-1UuatbXIwtXG3c1xATtE6GeeZZyD-b2XvLdI5XOWZboWrRHP-_t6EfQ7yp2rUKgSE5hrQ13EQ6w3Ih_u2oP9NZ0rsfvBfx_2NHnFl1ZaHrrjSJkiVijtQ%3D%3D",
		container: document.getElementById("usDashboard"),
		parameters: {
			country: 'United States'
		},
		scrolling: "no",
		height: "700px",
		width: "1000px"
	};
	dashboard = QuickSightEmbedding.embedDashboard(options);
});