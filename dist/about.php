<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>: about</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Place favicon.ico in the root directory -->
		<link rel="stylesheet" href="assets/stylesheets/main.min.css">
	</head>
	<body class="main-about">
		<nav class="nav">
			<ul>
				<li class="menu-item"><a href="about.php">: About</a></li>
				<li><a href="index.php"><span class="logo"></span></a></li>
				<li class="menu-item"><a href="gallery.php">Gallery</a></li>
			</ul>
		</nav>
		<div class="wrap">
			<div class="text">
				<p class="leading" >Did you know that computer art is a thing? Dot:Dot generates random, unique tattoos with the help of <a href="http://processingjs.org" class="link">Processing.js</a></p>
				<div class="video-wrapper">
					<video id="video" class="video" preload="auto" width="100%" height="auto">
						<source src="assets/images/test.mpg"  type='video/mpg'/>
					</video>
					<div class="control">
						<div class="btnPlay btn" id="_btnPlay" title="Play/Pause video">
							<span class="icon-play"></span>
						</div>
						<div class="progress-bar">
							<div class="progress">
								<span class="bufferBar"></span>
								<span class="timeBar"></span>
							</div>
						</div>
					</div>
				</div>
				<p>Take a look at the <a href="gallery.php" class="link">gallery</a>  where you can see real tattoos which have been generated by Dot:Dot and you can also <a href="index.php" class="link">produce one</a> yourself!</p><p>Have you already created one? <a href="http://processingjs.org" class="link">Send it</a> to us! We’ll be happy to add your picture to our gallery!</p><p>Dot:Dot was designed by <a href="http://ksenia.be" class="link">Ksenia Karelskaya</a> for her and her friends, who wanted to have simple, minimalistic yet unique tattoos.</p> 
			</div>
		</div>
		<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<!-- Add your site or application content here -->

		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="assets/dist/jquery.min.js"><\/script>')</script>
		<script src="assets/javascript/main.min.js"></script>
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