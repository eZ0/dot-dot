$( document ).ready(function() {

	if ($('#_tattoo').length){
		canvas.style.webkitFilter = "blur(1px)";
		var cnvs = document.getElementById('_tattoo');
		var context = cnvs.getContext('2d');
		var cs = new CanvasSaver('assets/data/saveimage.php');
	}

	$('#_btnwant').click(function(){
		//saving image from canvas 
		cs.savePNG( cnvs, 'dotdot', coord, 'true');
		//clearing canvas
		context.clearRect(0, 0, cnvs.width, cnvs.height);
		canvas.style.webkitFilter = "blur(0px)";
		//setting thankyou-text on canvas
		context.fillText("Thank you for using Dot:Dot! <3", 100, 120);
		context.fillText("Enjoy & stay awesome!", 120, 160);
		context.fillText("PS Don't forget to upload your spectacular pic to our gallery!", 20, 180);
		context.fillText("Generate new tattoo's by clicking 'Hate it'!", 80, 200);
	});

	$('#_btnhate').click(function(){
		canvas.style.webkitFilter = "blur(1px)";
		$('#_explanation p').fadeOut();
	});

	$('#_pinBtn').click(function(event) {
		//to do img bg
		cs.savePNG( cnvs, 'dotdot', coord, 'false', function(data){
			// var baseUrl = "http://localhost:8888/dot-dot/";
			var baseUrl = "http://ksenia.be/dot/";
			var newHref = baseUrl + data;
			var url = "//www.pinterest.com/pin/create/link/?url="+ baseUrl +"index.php&media="+newHref;
			$("#_pinBtn").prop("href", url);
		});
	});

	$('#_arm').click(function() {
		isArm = true;
		$('.main').css('background-image', "url('assets/images/bg-2.png')");
	});

	$('#_back').click(function() {
		isArm = false;
		$('.main').css('background-image', "url('assets/images/bg.png')");
	});

	// //video
	var video = $('#video');
	
	video[0].removeAttribute("controls");
	$('.control').fadeIn(500);

	$('.video-wrapper').hover(function() {
		$('.control').stop().fadeIn();
		}, function() {
			$('.control').stop().fadeOut();
		}).on('click', function() {
			$('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
			$(this).unbind('click');
			video[0].play();
		});

	video.on('click', function() {
		playpause(); 
	});

	$('#_btnPlay').on('click', function() {
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