$( document ).ready(function() {

	canvas.style.webkitFilter = "blur(1px)";

	$('#_btnwant').click(function(){
		var cnvs = document.getElementById('_tattoo');
		var cs = new CanvasSaver('assets/data/saveimage.php');
		cs.savePNG( cnvs, 'dotdot', coord);
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