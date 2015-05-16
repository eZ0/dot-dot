var data_entered = false;

var name;
var country;
var url;


$( document ).ready(function() {
	//loading gallery
	$.getJSON('assets/javascript/gallery.json', function(data) {	
		for (var i = data.gallery.length - 1; i >= 0; i--) {
			
			if (i%2 == 0) {
				$('div#gallery-container').append(
				"<div class='col view'>
					<img src='"+data.gallery[i].image+"'>
					<div class='mask'>
						<div class='text-wrap'>
							<p class='person'>"+ data.gallery[i].name+", "+data.gallery[i].country+"</p>
						</div>
					</div>
				</div>

				<div class='col view'>
					<img src='assets/images/gallery/pic0.png'>
					<div class='mask add'>
						<div class='text-wrap'>
							<p class='text-add'>Want your picture</br> here too?</p>
							<div class='button btn-add' data-toggle='modal' data-target='#myModal'>Send it</div>
						</div>
					</div>
				</div>");
			}else{
				$('div#gallery-container').append("<div class='col view'>
					<img src='"+data.gallery[i].image+"'>
					<div class='mask'>
						<div class='text-wrap'>
							<p class='person'>"+ data.gallery[i].name+", "+data.gallery[i].country+"</p>
						</div>
					</div>
				</div>");

			}
		}
	});
	
	$('.btn-add').click(function(){
		console.log('got it!');
	});


	initButtons();

});


function initButtons() {
	$('#submit').click(function(e) {
		e.preventDefault();
		checkUserdata();
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
			$('#thanks').fadeIn(800, function() {
				
			});
		});
	} else {
		alert("An error occurred saving to the database.");
	}
}


