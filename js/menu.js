//let gamburger = document.getElementById("gamburger");
//let menu = document.getElementsByClassName("menu")[0];

/*gamburger.onclick = function() {
	if (menu.style.display == "none") {
		menu.style.display = "block";
	}
	else
		menu.style.display = "none"
}*/

//let gamburger1 = document.getElementById("menu");
//let menu1 = document.getElementsByClassName("menu1")[0];

/*gamburger1.onclick = function() {
	if (menu1.style.display == "none")
		menu1.style.display = "block";
	else
		menu1.style.display = "none"
}*/


$("#gamburger").click(function() {
	if($("#1").css('display') == "none") {
		$("#1").show(200);
	}
	else {
		$("#1").hide(200);
	}
})

$("#menu").click(function() {
	if($("#2").css('display') == "none") {
		$("#2").show(200);
	}
	else {
		$("#2").hide(200);
	}
})