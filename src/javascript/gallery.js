$( document ).ready(function() {
	//loading gallery
	$.getJSON('assets/javascript/gallery.json', function(data) {	
		for (var i = data.gallery.length - 1; i >= 0; i--) {
			
			if (i%2 == 0) {
				$('div#gallery-container').append("<div class='col view'>
					<img src='"+data.gallery[i].image+"'>
					<div class='mask'>
						<div class='text-wrap'>
							<p class='person'>"+ data.gallery[i].name+", "+data.gallery[i].country+"</p>
						</div>
					</div>
				</div>

					<div class='col view view-add'>

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

});

