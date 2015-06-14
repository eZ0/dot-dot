<?php 
	include 'config.php';

	$name = filter_var($_GET["name"], FILTER_SANITIZE_STRING);
	$country = filter_var($_GET["country"], FILTER_SANITIZE_STRING);
	$isPublished = 0;

	if(is_uploaded_file($_FILES['file']['tmp_name'])){
		// Storing source path of the file in a variable
		$sourcePath = $_FILES['file']['tmp_name'];
		//changing name of the uploaded file
		$filename  = basename($_FILES['file']['name']);
		$extension = pathinfo($filename, PATHINFO_EXTENSION);
		$fName = md5($filename).'.'.$extension;
		// Target path where file is to be stored
		$targetPath = realpath(__DIR__ . '/../images/uploads/').'/'.$fName; 
		// Moving Uploaded file
		move_uploaded_file($sourcePath, $targetPath);
		$url = 'assets/images/uploads/'.$fName;
	}else{
		$url = filter_var($_GET["url"], FILTER_SANITIZE_URL);
	}
	
	
	$stmt = $mysqli->prepare("INSERT INTO user_pics (name, country, url, isPublished) VALUES (?,?,?,?)");
	$stmt->bind_param('sssi', $name, $country, $url, $isPublished);
	$stmt->execute();

	$stmt->close();