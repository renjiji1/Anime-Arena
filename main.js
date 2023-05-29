let entranceScreen = document.createElement('img');
let screenLoaded = false;
let canvas;
let canvasContext;
let framesPerSecond = 30;
let stateOfPlay;

function colorText(showWords, textX, textY, fillColor, size) {
	canvasContext.font = size.toString() + "px Georgia";
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX,textY);
}

function colorRect (topLeft, topRight, boxWidth, boxHeight, fillColor)	{
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect (topLeft, topRight, boxWidth, boxHeight);
}

window.onload = function() {

	canvas = document.getElementById("wenner");
	
	canvasContext = canvas.getContext("2d");
	
	entranceScreen.onload = function() {
		screenLoaded = true;
		drawStartUpScreen();
	}
	entranceScreen.src = "Images/screen.png";
	entranceScreen.height = canvas.height;
	canvasContext.drawImage(entranceScreen, 0, 0);
	
	
	canvas.addEventListener('mousemove', updateMousePos);
	canvas.addEventListener('click', mouseClicked);
	canvas.addEventListener('mouseup', mouseup);
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyUp);
	setInterval(State, 1000/framesPerSecond);
	colorRect(0, 0, canvas.width, canvas.height);
	
}

function drawStartUpScreen() {
	if(screenLoaded == true) {
		stateOfPlay = 0;
	}	
}

winner = "";
function State() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	switch(stateOfPlay) {
		case 0:
			canvasContext.drawImage(entranceScreen, 0, 0, canvas.width, canvas.height);
			break;
		case 1:
			characterSelect()
			loadCharacterSelect();
			break;
		case 2:
			loadPics()
			break;	
		case 3:
			if (winner == "Player 1") {
				colorRect(0, 0, canvas.width, canvas.height, "blue")
			} else {
				colorRect(0, 0, canvas.width, canvas.height, "red")
			}
			colorText(winner + " wins!!!", canvas.width * .4, canvas.height * .45, "black", 50)
			colorText("(Press any button to return to character select)", canvas.width * .28, canvas.height *.55, "black", 40)
			break;
	}
}
