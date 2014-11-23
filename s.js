var logo = document.getElementById('logo');
logo.onclick = function (event) {
	document.body.className = document.body.className === "launcher" ? "" : "launcher"
}