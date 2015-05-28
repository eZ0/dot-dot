var data_entered = false;

var name;
var country;
var url;


$( document ).ready(function() {

	initButtons();
	calcHeight();
	
	
});

function calcHeight(){
	//gallery height

	var vH = $('.view').height();
	var iH = $('.view img').height();
	var diff = vH - iH;

	$('.view').height(vH - diff);
}


function initButtons() {

	$('#submit').click(function(e) {
		e.preventDefault();
		checkUserdata();
	});

	$('.btn-add').click(function(){
		$('.view').addClass('isBlured');
	});

	$('.close').click(function(){
		$('.view').removeClass('isBlured');
	});
}

function checkUserdata() {
	if(!data_entered) {
		name = encodeURIComponent($('#pic-form input[name="name"]').val());
		country = encodeURIComponent($('#pic-form input[name="country"]').val());
		url = encodeURIComponent($('#pic-form input[name="url"]').val());
		
		data_entered = true;

		saveRegistration();
	}
}

function saveRegistration() {
	$.ajax({
		url: "assets/data/savedata.php?&name="+name+"&country="+country+"&url="+url
	}).done(function(data) {
		onRegistrationSaved(data_entered);
	});
}

function onRegistrationSaved(data) {
	if(data_entered) {
		$('#pic-form').fadeOut(500, function() {
			$('#thanks').css({
				opacity: '1'
			});
		});
	} else {
		alert("An error occurred saving to the database.");
	}
}


