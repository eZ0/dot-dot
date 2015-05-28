<?php 

	include 'config.php';
	
	//file is a PNG image
	header('Content-type: image/png');

	// file is an attachment (eg download), and we have a name
	header('Content-Disposition: attachment; filename="' . $_POST['name'] .'"');

	// unique coordinates and time
	$coord = $_POST['coord'];
	$time = date("F j Y, g:i a");
	

	//capture, replace any spaces w/ plusses, and decode
	$encoded = $_POST['imgdata'];
	$encoded = str_replace(' ', '+', $encoded);
	$decoded = base64_decode($encoded);

	$down = $_POST['down'];

	// sent path back or an image
	if ($down == 'pin1'){
		//write decoded data
		$path = "I'm in a wierd place!";
		echo json_encode($path);
		//echo $decoded;
	}
	if ($down == 'pin'){
		// write file to disk
		$name = '/'.uniqid().'.png';
		$path = realpath(__DIR__ . '/../images/generated/') . $name;
		file_put_contents($path, $decoded);
		// do not send image back
		echo json_encode($path);
	}else{
		$path = 'path-test-rrr!';
		echo json_encode($path .' en down: '. $down);
	}
	

	$stmt = $mysqli->prepare("INSERT INTO uniq_coord (coord, time) VALUES (?,?)");
	$stmt->bind_param('is', $coord, $time);
	$stmt->execute();

	$stmt->close();
