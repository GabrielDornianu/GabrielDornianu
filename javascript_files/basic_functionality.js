console.log("script working!");

var colors = ["#3498db ", "#85929e", "#d35400"];

window.scroll({
	behavior: 'smooth'
});

(function(){
	var icons = document.getElementsByClassName('icons');
	for(let i=0; i<icons.length; i++){
		var number = Math.floor(Math.random()*3);
		icons[i].style.backgroundColor = colors[number];
	}
})();
