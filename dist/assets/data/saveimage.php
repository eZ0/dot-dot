<?php 

	//file is a PNG image
	header('Content-type: image/png');

	// file is an attachment (eg download), and we have a name
	header('Content-Disposition: attachment; filename="' . $_POST['name'] .'"');

	//capture, replace any spaces w/ plusses, and decode
	$encoded = $_POST['imgdata'];
	$encoded = str_replace(' ', '+', $encoded);
	$decoded = base64_decode($encoded);


	// write file to disk
	$path = realpath(__DIR__ . '/../images/generated/') . '/naam.png';
	file_put_contents($path, $decoded);

	//write decoded data
	echo $decoded;
	