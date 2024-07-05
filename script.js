//Prevent right click
document.oncontextmenu = () => {
	alert("Jangan diklik kanan yah")
	return false
}

/* Still anyone can inspect element by F12 key. view page source by ctrl + u key. Let's prevent these*/

document.onekeydown = e => {
	//Prevent F12 key
	if(e.key == "F12") {
		Alert(Jangan tekan F12 yah")
		return false
	}
	//Prevent showing page source by ctrl + u
	if(e.ctrlkey && e.key == "u") {
		Alert(Jangan tekan tekan ctrl + u yah")
		return false
	}
}
