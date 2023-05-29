var backgroundPic = document.createElement('img');
var narutoPortraitPic = document.createElement('img');
var touchedNarutoPortraitPic = document.createElement('img');
var player1Pic = document.createElement('img');
var player2Pic = document.createElement('img');
var untouchedArrowPic = document.createElement('img');
var touchedArrowPic = document.createElement('img');
var backwardUntouchedArrowPic = document.createElement('img');
var backwardTouchedArrowPic = document.createElement('img');
var characterSelectWords = document.createElement('img');
var narutoPosePic = document.createElement('img');
var backwardNarutoPosePic = document.createElement('img');

var mouseX = 0;
var mouseY = 0;

var narutoChosen = false;
var botNarutoChosen = false;
var narutoChosenUp = false;
var arrowClicked = false;

let touchedNarutoPortraitPicLoaded = false;
let narutoPortraitPicLoaded = false;
let backwardTouchedArrowPicLoaded = false;
let backwardUntouchedArrowPicLoaded = false;
let touchedArrowPicLoaded = false;
let untouchedArrowPicLoaded = false;
let backgroundPicLoaded = false;
let player1PicLoaded = false;
let player2PicLoaded = false;
let characterSelectWordsLoaded = false;
var selectMusic = new Audio("Images/hxhSong.mp3")
selectMusic.volume = .1

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}

function characterSelect() {

	var imageList = [{pic: backgroundPic, theFile: "backGround.png"},
					{pic: narutoPortraitPic, theFile: "narutoPortrait.png"},
					{pic: touchedNarutoPortraitPic, theFile: "touchedNarutoPortrait.png"},
					{pic: player1Pic, theFile: "player1.png"}, 
					{pic: player2Pic, theFile: "player2.png"},
					{pic: untouchedArrowPic, theFile: "untouchedArrow.png"},
					{pic: touchedArrowPic, theFile: "touchedArrow.png"},
					{pic: backwardUntouchedArrowPic, theFile: "backwardUntouchedArrow.png"},
					{pic: backwardTouchedArrowPic, theFile: "backwardTouchedArrow.png"},
					{pic: characterSelectWords, theFile: "characterSelect.png"},
					{pic: backwardNarutoPosePic, theFile: "backwardNarutoPose.png"},
					{pic: narutoPosePic, theFile: "narutoPose.png"}];				
	
	for(var i=0;i<imageList.length;i++) {	
		beginLoadingImgs(imageList[i].pic, imageList[i].theFile);
	}	
}

function beginLoadingImgs(imgVar, fileName) {
	imgVar.onload = loadCharacterSelect();
	imgVar.src = "images/"+fileName;
}


function loadCharacterSelect() {

	if(stateOfPlay == 1) {
		selectMusic.play()
		canvasContext.drawImage(backgroundPic, 0, 0, canvas.width, canvas.height);
		canvasContext.drawImage(player1Pic, 0, canvas.height * .7, canvas.width/2.5, canvas.height/3);
		canvasContext.drawImage(player2Pic, canvas.width*.6, canvas.height*.7, canvas.width/2.5, canvas.height/3)
		canvasContext.drawImage(characterSelectWords, canvas.width*.3, canvas.height*.05, canvas.width / 3, canvas.height / 4);
		backgroundPicLoaded = true;
	    player1PicLoaded = true;
	    player2PicLoaded = true;
	    characterSelectWordsLoaded = true;
	
		if (mouseX > canvas.width / 2 - canvas.width / 9 && mouseY > canvas.height / 2 - canvas.height / 5 && mouseX < canvas.width / 2 + canvas.width / 18 && mouseY < canvas.height / 2 + canvas.height / 10) {
			canvasContext.drawImage(touchedNarutoPortraitPic, canvas.width / 2 - canvas.width / 9, canvas.height / 2 - canvas.height / 5, canvas.width/6, canvas.height/5);
			touchedNarutoPortraitPicLoaded = true;
		} else {
			canvasContext.drawImage(narutoPortraitPic, canvas.width / 2 - canvas.width / 9, canvas.height / 2 - canvas.height / 5, canvas.width / 6, canvas.height / 5)
			narutoPortraitPicLoaded = true
		}
		if (mouseX > 0 && mouseX < canvas.width / 4.5 && mouseY > 0 && mouseY < canvas.height / 4.5) {
			canvasContext.drawImage(backwardTouchedArrowPic, 0, 0, canvas.width/4.5, canvas.height /4.5)
			backwardTouchedArrowPicLoaded = true
		} else {
			canvasContext.drawImage(backwardUntouchedArrowPic, 0, 0, canvas.width / 4.5, canvas.height / 4.5)
			backwardUntouchedArrowPicLoaded = true
		}
		if (mouseX > canvas.width * .75 && mouseX < canvas.width && mouseY > 0 && mouseY < canvas.height / 4.5) {
			canvasContext.drawImage(touchedArrowPic, canvas.width*.75, 0, canvas.width / 4.5, canvas.height / 4.5);
			touchedArrowPicLoaded = true;
		} else {
			canvasContext.drawImage(untouchedArrowPic, canvas.width * .75, 0, canvas.width / 4.5, canvas.height / 4.5)
			untouchedArrowPicLoaded = true
		}
		if(narutoChosen == true) {
			canvasContext.drawImage(narutoPosePic, canvas.width*.05, canvas.height*.55, canvas.width / 3, canvas.height / 2);
		}
		if(botNarutoChosen == true) {
			canvasContext.drawImage(backwardNarutoPosePic, canvas.width*.6, canvas.height*.55, canvas.width / 3, canvas.height / 2);
		} 

		colorRect(canvas.width*.05, canvas.height*.3, canvas.width / 4, canvas.height / 4, "grey");
		colorText("[W, A, S, D] - directions", canvas.width * .06, canvas.height * .33, "white", (canvas.width+canvas.height)/100);
		colorText("[G] - Jump", canvas.width * .06, canvas.height * .37, "white", (canvas.width + canvas.height) / 100);
		colorText("[C] - Normal Attacks", canvas.width * .06, canvas.height * .41, "white", (canvas.width + canvas.height) / 100);
		colorText("[B] - Special Attacks", canvas.width * .06, canvas.height * .45, "white", (canvas.width + canvas.height) / 100);

		colorRect(canvas.width * .65, canvas.height * .3, canvas.width / 4, canvas.height / 4, "grey");
		colorText("[Arrow Keys] - directions", canvas.width * .66, canvas.height * .33, "white", (canvas.width + canvas.height) / 100);
		colorText("[L] - Jump", canvas.width * .66, canvas.height * .37, "white", (canvas.width + canvas.height) / 100);
		colorText("[,] - Normal Attacks", canvas.width * .66, canvas.height * .41, "white", (canvas.width + canvas.height) / 100);
		colorText("[/] - Special Attacks", canvas.width * .66, canvas.height * .45, "white", (canvas.width + canvas.height) / 100);
	} 
}	

function mouseClicked(evt) {
	
	if (stateOfPlay == 1) {
		if (mouseX > 0 && mouseX < canvas.width / 4.5 && mouseY > 0 && mouseY < canvas.height / 4.5) {
			if (!narutoChosen && !botNarutoChosen) {
				stateOfPlay = 0;
            }
			if (botNarutoChosen == false) {
				narutoChosen = false;
			}
			if (botNarutoChosen == true) {
				botNarutoChosen = false;
    		} 
        }
		if (mouseX > canvas.width * .75 && mouseX < canvas.width && mouseY > 0 && mouseY < canvas.height / 4.5 && narutoChosen == true && botNarutoChosen == true) {
			stateOfPlay = 2;
			arrowClicked = true;
			selectMusic.pause()
		}

		if (mouseX > canvas.width / 2 - canvas.width / 9 && mouseY > canvas.height / 2 - canvas.height / 5 && mouseX < canvas.width / 2 + canvas.width / 18 && mouseY < canvas.height / 2 + canvas.height / 10 && !narutoChosen) {
			narutoChosen = true;
		} else if (mouseX > canvas.width / 2 - canvas.width / 9 && mouseY > canvas.height / 2 - canvas.height / 5 && mouseX < canvas.width / 2 + canvas.width / 18 && mouseY < canvas.height / 2 + canvas.height / 10 && narutoChosenUp) {
			botNarutoChosen = true;		
		}

	}
	if (stateOfPlay == 2) {
		if (mouseX > 0 && mouseX < canvas.width / 4.5 && mouseY > 0 && mouseY < canvas.height / 4.5) {
			stateOfPlay = 1;
		}
	}
}

function mouseup(evt) {
	if(narutoChosen == true) {
		narutoChosenUp = true;
	}
	
}
