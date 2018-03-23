if (window.location.pathname.includes('category')) {
	window.addEventListener("load", function () {
		var sel = document.querySelectorAll('.category img[src*="v/vspfiles/photos/"]');
		var replaced = '-1.jpg';
		var replacer = '-3T.jpg';
		var wid = sel[0].width + 'px';
		for (e in sel){
			sel[e].style.width = wid;
			sel[e].onmouseover = function (element) {
				var img2 = new Image();
				img2.onload = function () { element.target.src = element.target.src.replace(replaced, replacer) }
				img2.src = element.target.src.replace(replaced, replacer);
			}
			sel[e].onmouseout = function (element) {
				var img1 = new Image();
				img1.onload = function () { element.target.src = element.target.src.replace(replacer, replaced) }
				img1.src = element.target.src.replace(replacer, replaced);
			}
		}
	});
}