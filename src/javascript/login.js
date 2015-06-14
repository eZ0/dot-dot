var loginDataEntered = false;

var username;
var password;


initButtonsLogin();


function initButtonsLogin() {

	$('#login').click(function(e) {
		e.preventDefault();
		checkLoginData();
	});
}

function checkLoginData() {
	if(!loginDataEntered) {
		username = encodeURIComponent($('#login-form input[name="username"]').val());
		password = encodeURIComponent($('#login-form input[name="password"]').val());

		loginDataEntered = true;

		checkIfRegistered();
	}
}

function checkIfRegistered() {
	$.ajax({
		type: "POST",
		async: false,
		url: "assets/data/login.php",
		data: {'username': username, 'password': password}
	}).done(function(data) {
		console.log("succes " + data);
		if(data === 'login'){
			document.location.href = 'admin.php';
		}else{
			$('#_notification').append("No such a username or combination");
		}
	});
}


