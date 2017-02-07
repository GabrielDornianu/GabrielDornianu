console.log("script working!");

function parallax(e){
	var y_position = window.pageYOffset;
	var page_background = document.getElementsByClassName("page_background")[0];
	page_background.style.top = Math.floor(y_position/5)+"px";

	}
