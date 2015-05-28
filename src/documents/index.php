
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
			function setOption(id) {
				var canvas = document.getElementById(id);
				var context = canvas.getContext('2d');

				context.clearRect(0, 0, canvas.width, canvas.height);
				var pjs = Processing.getInstanceById(id);
				pjs.setOption();
				coord = pjs.getCoord();
			}
		</script>
	</head>
	<body class="main">
		<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<nav class="nav">
			<ul>
				<li class="menu-item"><a href="about.html">About</a></li>
				<li><a href="index.php"><span class="logo"></span></a></li>
				<li class="menu-item"><a href="gallery.php">Gallery</a></li>
			</ul>
		</nav>
		<div class="explanation" id="_explanation">
			<p>DOT:DOT is a random, yet unique tattoo generator.</p>
			<p>Click on "Hate It" to generate new tattoo and if you like it</p>
			<p>pin it to a Pinterest or save locally with "Love It" button.</p>
		</div>
		<div class="social">
			<a href="" data-pin-do="buttonBookmark"  data-pin-shape="round" data-pin-height="32" id="_pinBtn" target="_blank"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_32.png" /></a>
		</div>

		<canvas id="_tattoo" data-processing-sources="canvas1.pde"></canvas>
		<div class="buttons" id="_buttons">
			<div class="button" id="_btnwant">Love it</div>
			<div class="body-option" id="_arm">ARM</div>
			<div class="body-option" id="_back">BACK</div>
			<div class="button" onclick="setOption('_tattoo')" data-coord="" id="_btnhate">Hate it</div>
		</div>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="assets/bower_components/jquery/dist/jquery.min.js"><\/script>')</script>
		<script src="assets/javascript/main.min.js"></script>
		<script type="text/javascript">
			var canvas = document.getElementById("_tattoo");
			var processingInstance = new Processing(canvas);
		</script>
		<!-- pinit.js for pinterest api -->
		<!--<script type="text/javascript" async defer src="//assets.pinterest.com/js/pinit.js"></script> -->
		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<script>
		(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
		e=o.createElement(i);r=o.getElementsByTagName(i)[0];
		e.src='//www.google-analytics.com/analytics.js';
		r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
		ga('create','UA-XXXXX-X','auto');ga('send','pageview');
		</script>
	</body>
</html>