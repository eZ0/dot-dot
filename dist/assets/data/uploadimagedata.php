<?php 
	include 'config.php';

	$id = filter_var($_REQUEST["updatefileid"], FILTER_SANITIZE_STRING);

	$sourcePath = $_FILES['file']['tmp_name'];
	//changing name of the uploaded file
	$filename  = basename($_FILES['file']['name']);
	$extension = pathinfo($filename, PATHINFO_EXTENSION);
	$fName = md5($filename).'.'.$extension;
	// Target path where file is to be stored
	$targetPath = realpath(__DIR__ . '/../images/gallery/').'/'.$fName; 
	// Moving Uploaded file
	move_uploaded_file($sourcePath, $targetPath);
	$updateurl = 'assets/images/gallery/'.$fName;

	echo $updateurl;

	$stmt = $mysqli->prepare("UPDATE user_pics SET url = ? WHERE id =  ?");
	$stmt->bind_param('si', $updateurl, $id);
	$stmt->execute();

	$stmt->close();