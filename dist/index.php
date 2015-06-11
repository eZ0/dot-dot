
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>DOT:DOT</title>
		<meta name="description" content="Unique minimal tattoo generator">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Place favicon.ico in the root directory -->
		<link rel="stylesheet" href="assets/stylesheets/main.min.css">
		<script src="assets/javascript/processing.min.js"></script>
		<script>
			var coord;
			var isArm = true;
			var isExist = false;
			var bound = false;
			function bindJavascript(){
				var pjs = Processing.getInstanceById('_tattoo');
				if(pjs!=null){
					pjs.bindJavascript(this);
					bound = true;
				} 
				if(!bound) setTimeout(bindJavascript, 250);
			}
			bindJavascript();
			function setOption(id) {
				var canvas = document.getElementById(id);
				var context = canvas.getContext('2d');

				context.clearRect(0, 0, canvas.width, canvas.height);
				var pjs = Processing.getInstanceById(id);
				coord = pjs.getCoord();

				if(isArm === true){
					pjs.setOptionArm();
				}else{
					pjs.setOptionBack();		
				}
			}

			function showCoord(coord){
				var cc = new CoordinatesChecker('assets/data/checkcoord.php');
				cc.checkCoord(coord, function(data){
					isExist = data;
				});
				return isExist == 'true' ? 1 : 0;
			}

			function showArmTattoo(id){
				var canvas = document.getElementById(id);
				var context = canvas.getContext('2d');

				context.clearRect(0, 0, canvas.width, canvas.height);
				var pjs = Processing.getInstanceById(id);
				pjs.setOptionArm();
			}

			function showBackTattoo(id){
				var canvas = document.getElementById(id);
				var context = canvas.getContext('2d');

				context.clearRect(0, 0, canvas.width, canvas.height);
				var pjs = Processing.getInstanceById(id);
				pjs.setOptionBack();
			}
		</script>
	</head>
	<body class="main">
		<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<nav class="nav">
			<ul>
				<li class="menu-item"><a href="about.php">About</a></li>
				<li><a href="index.php"><span class="logo"></span></a></li>
				<li class="menu-item"><a href="gallery.php">Gallery</a></li>
			</ul>
		</nav>
		<div class="explanation" id="_explanation">
			<p>DOT:DOT is a random, yet unique tattoo generator.</p>
			<p>Click on "Love it" to save the tattoo</p>
			<p>If you "Hate it" - a new one will be generated!</p>
		</div>
		<div class="social">
			<a href="" data-pin-do="buttonBookmark"  data-pin-shape="round" data-pin-height="32" id="_pinBtn" target="_blank"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" /></a>
		</div>

		<canvas id="_tattoo" data-processing-sources="canvas1.pde"></canvas>
		<div class="buttons" id="_buttons">
			<div class="button" id="_btnwant">Love it</div>
			<div class="body-option" id="_arm" onclick="showArmTattoo('_tattoo')" >ARM</div>
			<div class="body-option" id="_back" onclick="showBackTattoo('_tattoo')">BACK</div>
			<div class="button" onclick="setOption('_tattoo')" data-coord="" id="_btnhate">Hate it</div>
		</div>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="assets/javascript/jquery.min.js"><\/script>')</script>
		<script src="assets/javascript/main.min.js"></script>
		<script type="text/javascript">
			var canvas = document.getElementById("_tattoo");
			var processingInstance = new Processing(canvas);
		</script>
		
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-64014022-1', 'auto');
			ga('send', 'pageview');
		</script>
	</body>
</html>