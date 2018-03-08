// mobile_img.js
// checks the screen width and changes the first selected element's src

var breakpoint = 470
var selector = '.logo__img'
var desktop_img = 'templates/263/images/template/header_bg.png'
var mobile_img = 'mobiletemplate/header_normal.png'

function changeLogo(){
	if ($(window).width() <= breakpoint) {
		var source = $(selector).attr('src').replace(desktop_img, mobile_img);
		$(selector).attr('src', source);
	} else if ($(window).width() > breakpoint) {
		var source = $(selector).attr('src').replace(mobile_img, desktop_img);
		$(selector).attr('src', source);
	};
};
var resizeTimer;
window.onresize = function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
	changeLogo();
  }, 250);
};
window.addEventListener('DOMContentLoaded', changeLogo);