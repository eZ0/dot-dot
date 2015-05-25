var data_entered = false;

var name;
var country;
var url;


$( document ).ready(function() {

	initButtons();
	
});



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



$( document ).ready(function() {

	canvas.style.webkitFilter = "blur(1px)";

	var cnvs = document.getElementById('_tattoo');
	var cs = new CanvasSaver('assets/data/saveimage.php');

	$('#_btnwant').click(function(){
		cs.savePNG( cnvs, 'dotdot', coord, true);
	});
	
	$('#_pinBtn').click(function(event) {
		$.getJSON('../dist/assets/data/saveimage.php', function(data) {
			cs.savePNG( cnvs, 'dotdot', coord, false);
			console.log("URL is "+data.toString());
			//get an url of this element
			//get the part from &media=
			//replace with new url
		});
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
/* ========================================================================
* Bootstrap: modal.js v3.2.0
* http://getbootstrap.com/javascript/#modals
* ========================================================================
* Copyright 2011-2014 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */


+function ($) {
	'use strict';

// MODAL CLASS DEFINITION
// ======================

var Modal = function (element, options) {
	this.options        = options
	this.$body          = $(document.body)
	this.$element       = $(element)
	this.$backdrop      =
	this.isShown        = null
	this.scrollbarWidth = 0

	if (this.options.remote) {
		this.$element
		.find('.modal-content')
		.load(this.options.remote, $.proxy(function () {
			this.$element.trigger('loaded.bs.modal')
		}, this))
	}
}

Modal.VERSION  = '3.2.0'

Modal.DEFAULTS = {
	backdrop: true,
	keyboard: true,
	show: true
}

Modal.prototype.toggle = function (_relatedTarget) {
	return this.isShown ? this.hide() : this.show(_relatedTarget)
}

Modal.prototype.show = function (_relatedTarget) {
	var that = this
	var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

	this.$element.trigger(e)

	if (this.isShown || e.isDefaultPrevented()) return

		this.isShown = true

	this.checkScrollbar()
	this.$body.addClass('modal-open')

	this.setScrollbar()
	this.escape()

	this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

	this.backdrop(function () {
		var transition = $.support.transition && that.$element.hasClass('fade')

		if (!that.$element.parent().length) {
that.$element.appendTo(that.$body) // don't move modals dom position
}

that.$element
.show()
.scrollTop(0)

if (transition) {
that.$element[0].offsetWidth // force reflow
}

that.$element
.addClass('in')
.attr('aria-hidden', false)

that.enforceFocus()

var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

transition ?
that.$element.find('.modal-dialog') // wait for modal to slide in
.one('bsTransitionEnd', function () {
	that.$element.trigger('focus').trigger(e)
})
.emulateTransitionEnd(300) :
that.$element.trigger('focus').trigger(e)
})
}

Modal.prototype.hide = function (e) {
	if (e) e.preventDefault()

		e = $.Event('hide.bs.modal')

	this.$element.trigger(e)

	if (!this.isShown || e.isDefaultPrevented()) return

		this.isShown = false

	this.$body.removeClass('modal-open')

	this.resetScrollbar()
	this.escape()

	$(document).off('focusin.bs.modal')

	this.$element
	.removeClass('in')
	.attr('aria-hidden', true)
	.off('click.dismiss.bs.modal')

	$.support.transition && this.$element.hasClass('fade') ?
	this.$element
	.one('bsTransitionEnd', $.proxy(this.hideModal, this))
	.emulateTransitionEnd(300) :
	this.hideModal()
	$('.view').removeClass('isBlured');
}

Modal.prototype.enforceFocus = function () {
	$(document)
.off('focusin.bs.modal') // guard against infinite focus loop
.on('focusin.bs.modal', $.proxy(function (e) {
	if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
		this.$element.trigger('focus')
	}
}, this))
}

Modal.prototype.escape = function () {
	if (this.isShown && this.options.keyboard) {
		this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
			e.which == 27 && this.hide()
		}, this))
	} else if (!this.isShown) {
		this.$element.off('keyup.dismiss.bs.modal')
	}
}

Modal.prototype.hideModal = function () {
	var that = this
	this.$element.hide()
	this.backdrop(function () {
		that.$element.trigger('hidden.bs.modal')
	})
}

Modal.prototype.removeBackdrop = function () {
	this.$backdrop && this.$backdrop.remove()
	this.$backdrop = null
}

Modal.prototype.backdrop = function (callback) {
	var that = this
	var animate = this.$element.hasClass('fade') ? 'fade' : ''

	if (this.isShown && this.options.backdrop) {
		var doAnimate = $.support.transition && animate

		this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
		.appendTo(this.$body)

		this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
			if (e.target !== e.currentTarget) return
				this.options.backdrop == 'static'
			? this.$element[0].focus.call(this.$element[0])
			: this.hide.call(this)
		}, this))

if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

	this.$backdrop.addClass('in')

if (!callback) return

	doAnimate ?
this.$backdrop
.one('bsTransitionEnd', callback)
.emulateTransitionEnd(150) :
callback()

} else if (!this.isShown && this.$backdrop) {
	this.$backdrop.removeClass('in')

	var callbackRemove = function () {
		that.removeBackdrop()
		callback && callback()
	}
	$.support.transition && this.$element.hasClass('fade') ?
	this.$backdrop
	.one('bsTransitionEnd', callbackRemove)
	.emulateTransitionEnd(150) :
	callbackRemove()

} else if (callback) {
	callback()
}
}

Modal.prototype.checkScrollbar = function () {
	if (document.body.clientWidth >= window.innerWidth) return
		this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
}

Modal.prototype.setScrollbar = function () {
	var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
}

Modal.prototype.resetScrollbar = function () {
	this.$body.css('padding-right', '')
}

Modal.prototype.measureScrollbar = function () { // thx walsh
	var scrollDiv = document.createElement('div')
	scrollDiv.className = 'modal-scrollbar-measure'
	this.$body.append(scrollDiv)
	var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	this.$body[0].removeChild(scrollDiv)
	return scrollbarWidth
}


// MODAL PLUGIN DEFINITION
// =======================

function Plugin(option, _relatedTarget) {
	return this.each(function () {
		var $this   = $(this)
		var data    = $this.data('bs.modal')
		var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

		if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
			if (typeof option == 'string') data[option](_relatedTarget)
				else if (options.show) data.show(_relatedTarget)
			})
}

var old = $.fn.modal

$.fn.modal             = Plugin
$.fn.modal.Constructor = Modal


// MODAL NO CONFLICT
// =================

$.fn.modal.noConflict = function () {
	$.fn.modal = old
	return this
}


// MODAL DATA-API
// ==============

$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	var $this   = $(this)
	var href    = $this.attr('href')
var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

if ($this.is('a')) e.preventDefault()

	$target.one('show.bs.modal', function (showEvent) {
if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	$target.one('hidden.bs.modal', function () {
		$this.is(':visible') && $this.trigger('focus')
	})
})
Plugin.call($target, option, this)
})

}(jQuery);

/*
class for saving canvas as png and renaming it
communicates with saveimage.php which sets headers
*/
function CanvasSaver(url) {

	this.url = url;

	this.savePNG = function(cnvs, fname, coord, download) {
		//if no canvas or url to .php - do nothing
		if(!cnvs || !url) return;

		//name file 'picture.png' if there is no file name given
		fname = fname || 'picture';

		//saving canvas element
		var data = cnvs.toDataURL("image/png");
		data = data.substr(data.indexOf(',') + 1).toString();

		//unique coordinates
		coord = coord || 0;

		//creating hidden form for sending our data for image to php and back
		var dataInput = document.createElement("input") ;
		dataInput.setAttribute("name", 'imgdata') ;
		dataInput.setAttribute("value", data);
		dataInput.setAttribute("type", "hidden");

		var nameInput = document.createElement("input") ;
		nameInput.setAttribute("name", 'name') ;
		nameInput.setAttribute("value", fname + '.png');

		//sending unique coordinate of saved image
		var coordInput = document.createElement("input") ;
		coordInput.setAttribute("name", 'coord') ;
		coordInput.setAttribute("value", coord);
		coordInput.setAttribute("type", "hidden");

		var downloadInput = document.createElement("input") ;
		downloadInput.setAttribute("name", 'download') ;
		downloadInput.setAttribute("value", download);
		downloadInput.setAttribute("type", "hidden");

		var myForm = document.createElement("form");
		myForm.method = 'post';
		myForm.action = url;
		myForm.appendChild(dataInput);
		myForm.appendChild(nameInput);
		myForm.appendChild(coordInput);
		myForm.appendChild(downloadInput);

		//communicating with php via submiting form
		document.body.appendChild(myForm);
		myForm.submit() ;
		document.body.removeChild(myForm);
	};
}