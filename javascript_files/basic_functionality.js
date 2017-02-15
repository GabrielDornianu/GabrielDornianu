console.log("script working!");

window.scroll({
	behavior: 'smooth'
});

function parallax(e){
	var y_position = window.pageYOffset;
	var page_background = document.getElementsByClassName("page_background")[0];
	page_background.style.top = y_position * .4 + "px";

	}
