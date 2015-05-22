<?php 
	include 'config.php';

	//file is a PNG image
	header('Content-type: image/png');

	// file is an attachment (eg download), and we have a name
	header('Content-Disposition: attachment; filename="' . $_POST['name'] .'"');

	//capture, replace any spaces w/ plusses, and decode
	$encoded = $_POST['imgdata'];
	$encoded = str_replace(' ', '+', $encoded);
	$decoded = base64_decode($encoded);

	// write file to disk
	$name = '/'.uniqid().'.png';
	$path = realpath(__DIR__ . '/../images/generated/') . $name;
	file_put_contents($path, $decoded);

	//write decoded data
	echo $decoded;
	
	$coord = $_POST['coord'];
	$time = date("F j Y, g:i a");

	$stmt = $mysqli->prepare("INSERT INTO uniq_coord (coord, time) VALUES (?,?)");
	$stmt->bind_param('is', $coord, $time);
	$stmt->execute();

	$stmt->close();