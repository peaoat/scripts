var path = window.location.pathname.search(/category/)
if(path > 0) {
	$('.category img[src*="/v/vspfiles/photos/"]')
		.mouseover( function() {
			var img2 = $(this).attr('src').replace('-1.jpg', '-3T.jpg');
			$(this).css('max-width', $(this).width());
			$(this).attr('src', img2);
		})
		.mouseout( function() {
			var img1 = $(this).attr('src').replace('-3T.jpg', '-1.jpg');
			$(this).attr('src', img1);
		})
	}