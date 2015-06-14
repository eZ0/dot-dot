<?php 
	session_start();
	if(!$_SESSION['login']) {
		die('Nice try, smartass');
	}
	include 'assets/data/config.php'; 
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>: administration</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Place favicon.ico in the root directory -->
		<link rel="stylesheet" href="assets/stylesheets/main.min.css">
	</head>
	<body>
		<!-- <p><a href="gallery.php">Gallery</a><a href="login.php">Logout</a></p> -->
		<section class="admin">
			<p class='admin-nav'><a href="gallery.php" class='link'>Gallery</a><a href="login.php" class='link'>Logout</a></p>
			<table class="table table-hover table-bordered">
				<thead>
					<th>#</th>
					<th>Name</th>
					<th>Country</th>
					<th>Showed</th>
					<th>URL - upload/download</th>
					<th>Preview</th>
					<th>Actions</th>
				</thead>
				<tbody>
					<?php 
					if ($result = $mysqli->query("SELECT * FROM user_pics ") ) {
						$i = 0;
						while ($row = $result->fetch_assoc()) {
							$i++;
							$sid='s' . $row['id'];
							printf("<tr id={$row['id']}-row> 
									<td>{$i}</td>
									<td id={$row['id']}-name>{$row["name"]}</td>
									<td id={$row['id']}-country>{$row["country"]}</td>
									<td id={$row['id']}-isPublished>");
									if($row["isPublished"] == 0){
										printf("<input class='{$row['id']}_chkupd' type='checkbox' value='0' disabled >");
									}else{
										printf("<input class='{$row['id']}_chkupd' type='checkbox' checked value='1' disabled>");
									}printf("</td>
									<td>
										<p id={$row['id']}-url>
											<a href={$row["url"]} download={$row["url"]}>{$row["url"]}</a> 
										</p>
										<p>
											<form id='{$row['id']}-form' name='uploade-form'  method=POST enctype=multipart/form-data>
												<input class='no-border' id={$row['id']}-image type=file name=file>
												<input type='button' class='btnuploadedited'  value='Upload' data-id={$row['id']}>
											</form>
										</p>
									</td>
									<td id={$row['id']}-preview>
										<img src={$row["url"]} width='50px'>
									</td>
									<td>
										<input type='button' class='btnedit'  value='Edit' data-id={$row['id']}>
										<input type='button' class='btnupdate'  value='Update' data-id={$row['id']}>
										<input type='button' class='btndelete'  value='Delete' data-id={$row['id']}>
									</td>
								</tr>");
						}
					}
					/* free result set */
					$result->close();
					?>
				</tbody>

			</table>
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
	</body>
</html>