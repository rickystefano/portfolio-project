<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8">
<title>Load More</title>
<link rel="stylesheet" href="css/style.css">
<script src="js/jquery-3.2.1.min.js"></script>
<script>
	$(document).ready(function(){
		loadNews();
		var limitNews 	 = 0; 
		var scrollActive = false;

		$('#scrollToggle').on('click', function(){
			scrollActive = !scrollActive;
			if(scrollActive) $('#scrollStatus').html('ON'); 
			else  			 $('#scrollStatus').html('OFF');
		});

		$('#morebutton').on('click', function(){
			loadNews();
		});

		$('#container').scroll(function(){
			// console.log($("#mycontent").height()-$('#container').scrollTop());
			if(scrollActive){
				var scrollChecker = $("#mycontent").height()-$('#container').scrollTop();
				if (scrollChecker < 342){
					loadNews();
				}
			}
		});

		function loadNews() {
			$.ajax({
				url: 'more.php',
				method: 'POST',
				data: {
					from: (limitNews*3)
				}
			}).done(function(news){
				$("#mycontent").append(news);
				limitNews++;
				if (news == ""){
					$("#morebutton").html("Er zijn geen berichten meer!");
				}
				// console.log($("#mycontent").height());
			})
		}
	});
</script>
</head>
<body>

<h1>Nieuwsberichten</h1>
<div id=container>
	<button id="scrollToggle">Scroll Function: <span id="scrollStatus">OFF</span></button>
	<div id="mycontent"></div>
	<button id="morebutton">Toon meer berichten</button>
</div>

</body>
</html>