<?php include 'assets/data/config.php'; ?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>: gallery</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Place favicon.ico in the root directory -->
		<link rel="stylesheet" href="assets/stylesheets/main.min.css">
	</head>
	<body class="gallery-wrap">
		<nav class="nav">
			<ul>
				<li class="menu-item"><a href="about.html">About</a></li>
				<li><a href="index.html"><span class="logo"></span></a></li>
				<li class="menu-item"><a href="gallery.html">: Gallery</a></li>
			</ul>
		</nav>
		<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<!-- Add your site or application content here -->
		<section class="gallery-wrap">
			<div class="gallery" id="gallery-container">
				<?php if ($result = $mysqli->query("SELECT name, country, url FROM user_pics LIMIT 10")) {

   		
		while ($row = $result->fetch_assoc()) {
			
			printf( "<div class='col view'>
					<img src='{$row["url"]}'>
					<div class='mask'>
						<div class='text-wrap'>
							<p class='person'>{$row["name"]}, {$row["country"]}</p>
						</div>
					</div>
				</div>");
		}

		/* free result set */
		$result->close();
	}?>
			</div>
			<div class="clear"> </div>
			
			<!-- Modal -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<p class="close" data-dismiss="modal" aria-label="Close">X</p>
						<form class='pic-form' id='pic-form'  method="POST" enctype="multipart/form-data">
						<p>Send us your awesome picture with DOT:DOT tattoo!</p>
							<input type="text" id="name" name="name" placeholder="What's your name?">
							<input type="text" id="country" name="country" placeholder="Where do you live?">
							<!-- <input type="email" id="email" name="email" placeholder="What's your e-mail?"> -->
							<input type="text" id="url" name="url" placeholder="Link to your picture">
							<input class="button" type="submit" id="submit" name="submit" value="Send!">
						</form>

						<form id="thanks" class="pic-form">
							<p>Thank you for using DOT:DOT! </br> We'll post your pic here asap!</p>
						</form>
					</div>
				</div>
			</div>
		</section>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="assets/bower_components/jquery/dist/jquery.min.js"><\/script>')</script>
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

		<script type="text/javascript">
			$('.btn-add').click(function(){
				console.log('got it!');
			});
		</script>
	</body>
</html>