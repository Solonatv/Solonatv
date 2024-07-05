//Prevent right click
document.oncontextmenu = () => {
	alert("Jangan diklik kanan yah")
	return false
}

document.onekeydown = e => {
	//Prevent F12 key
	if(e.key == "F12") {
		Alert(Jangan tekan F12 yah")
		return false
	}

	//Prevent F12 key
	if(e.ctrlkey && e.key == "u") {
		Alert(Jangan tekan tekan ctrl + u yah")
		return false
	}
}