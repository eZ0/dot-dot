<?php 
	//connect to database
	if($_SERVER['HTTP_HOST'] == "localhost:8888" || $_SERVER['HTTP_HOST'] == "localhost" ){
		$mysqli = new mysqli("localhost", "root", "root", "dotdot");
	}
	else{
		// $mysqli = new mysqli("localhost", "deb74595_dot", "dotdot", "deb74595_dot");
		$mysqli = new mysqli("localhost", "dotdot1q", "nu@a%AnAnAbY", "dotdot1q_db");

	}	

	/* check connection */
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}