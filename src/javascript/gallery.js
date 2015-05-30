var data_entered = false;

var name;
var country;
var url;


$( document ).ready(function() {

	initButtons();
	calcHeight();
	$('.main').bind('touchstart', function() {});


	// modal window clicks on upload
	$('#url').hide();
	$('#file').hide();

	$('#_url').click(function() {
		$('#url').toggle();
		$('#file').hide();
	});
	$('#_file').click(function() {
		$('#file').toggle();
		$('#url').hide();
	});

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
		file = encodeURIComponent($('#pic-form input[name="file"]').val());

		data_entered = true;

		saveRegistration();
	}
}

function saveRegistration() {
	var fd = new FormData(document.getElementById("pic-form"));
	fd.append("CustomField", "This is some extra data");
	$.ajax({
		url: "assets/data/savedata.php?&name="+name+"&country="+country+"&url="+url+"&file="+file,
		type: "POST",
		data: fd,
		processData: false,  // tell jQuery not to process the data
		contentType: false   // tell jQuery not to set contentType
	}).done(function(data) {
		console.log(data);
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


