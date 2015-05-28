$( document ).ready(function() {

	canvas.style.webkitFilter = "blur(1px)";

	var cnvs = document.getElementById('_tattoo');
	var cs = new CanvasSaver('assets/data/saveimage.php');

	$('#_btnwant').click(function(){
		cs.savePNG( cnvs, 'dotdot', coord, 'true');
	});

	$('#_btnhate').click(function(){
		// cs.savePNG( cnvs, 'dotdot', coord, 'pin1');
		$.getJSON("assets/data/saveimage.php").done(function(data){
			cs.savePNG( cnvs, 'dotdot', coord, 'pin');
			// var newHref = data;
			console.log("URL is "+data);
			// var url =  "//www.pinterest.com/pin/create/link/?url=http://ksenia.be/dot/index.html&media="+newHref;
			// $("#_pinBtn").prop("href", url);
			// location.href = url;
		});
	});
	
	$('#_pinBtn').click(function(event) {
		// cs.savePNG( cnvs, 'dotdot', coord, 'pin1');
		$.getJSON("assets/data/saveimage.php").done(function(data){
			cs.savePNG( cnvs, 'dotdot', coord, 'pin1');
			// var newHref = data;
			console.log("URL is "+data);
			// var url =  "//www.pinterest.com/pin/create/link/?url=http://ksenia.be/dot/index.html&media="+newHref;
			// $("#_pinBtn").prop("href", url);
			// location.href = url;
		});

		//$.get('assets/data/saveimage.php', function(data) {
			
			console.log('ets');
			// console.log("URL is "+data.toString());
			//var newHref = data.toString();
			//get an url of this element
			// console.log("current url is " + $('#_pinBtn').attr('href'));
			//get the part from &media=
			//$("#_pinBtn").prop("href", "//www.pinterest.com/pin/create/link/?url=http://ksenia.be/dot/index.html&media="+newHref);
			//replace with new url
			//console.log("current url is " + $('#_pinBtn').attr('href'));
		//}).done(function(data) {
			// var newHref = data;
			// console.log("URL is "+data);
			// var url =  "//www.pinterest.com/pin/create/link/?url=http://ksenia.be/dot/index.html&media="+newHref;
			// $("#_pinBtn").prop("href", url);
			// location.href = url;
		//});
	});

	$('#_arm').click(function() {
		$('.main').css('background-image', "url('assets/images/bg-2.png')");
	});

	$('#_back').click(function() {
		$('.main').css('background-image', "url('assets/images/bg.png')");
	});

	//video
	var video = $('#video');
	
	video[0].removeAttribute("controls");
	$('.control').fadeIn(500);

	$('.video-wrapper').hover(function() {
		$('.control').stop().fadeIn();
		}, function() {
			if(!timeDrag){
				$('.control').stop().fadeOut();
			}
		})
		.on('click', function() {
			$('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
			$(this).unbind('click');
			video[0].play();
		});

	video.on('click', function() {
		playpause(); 
	});

	$('.btnPlay').on('click', function() {
		playpause(); 
	});

	var playpause = function() {
		if(video[0].paused || video[0].ended) {
			$('.btnPlay').addClass('paused');
			$('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
			video[0].play();
		}
		else {
			$('.btnPlay').removeClass('paused');
			$('.btnPlay').find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
			video[0].pause();
		}
	};

});