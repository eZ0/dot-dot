<?php 
	include 'config.php';

	$name = filter_var($_GET["name"], FILTER_SANITIZE_STRING);
	$country = filter_var($_GET["country"], FILTER_SANITIZE_STRING);
	// $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$url = filter_var($_GET["url"], FILTER_SANITIZE_URL);
	$isPublished = 0;

	$message = 'There is a new picture submited!'."\r\n". 

	'Name: '. $name . ' ' . $last_name."\r\n".
	// 'email: '. $email ."\r\n".
	'Country: '. $country ."\r\n". 
	'URL: '. $url ."\r\n";

	$header = 'From: DOT:DOT';
	$to = 'kusksu@gmail.com';
	$subject = 'New picture submited!';
	mail($to, $subject, $message, $header);

	$stmt = $mysqli->prepare("INSERT INTO user_pics (name, country, url, isPublished) VALUES (?,?,?,?)");
	$stmt->bind_param('sssi', $name, $country, $url, $isPublished);
	$stmt->execute();

	$stmt->close();