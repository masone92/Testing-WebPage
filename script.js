var form = document.getElementById("form");
var userid = document.getElementById("userid");
var pswrd = document.getElementById("pswrd");


function check(form) {
	if(form.userid.value == "masone92" && form.pswrd.value == "liftedavy03!") {
		window.open("hyperlinks.html")
	} else {
		alert("Error Password or Username")
	}
}
