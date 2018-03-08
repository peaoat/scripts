$(document).ready( function() {
	var $sel = $('.category img[src*="/v/vspfiles/photos/"]');

	$sel
		.css('width', $sel[0].width + 'px')
		.on('mouseover', function (element) {
			var img2 = new Image();
			img2.onload = function () { element.target.src = element.target.src.replace('-1.jpg', '-3T.jpg'); }
			img2.src = element.target.src.replace('-1.jpg', '-3T.jpg')
		})
		.on('mouseout', function (element) {
			var img1 = new Image();
			img1.onload = function () { element.target.src = element.target.src.replace('-3T.jpg', '-1.jpg'); }
			img1.src = element.target.src.replace('-3T.jpg', '-1.jpg');
		});
});