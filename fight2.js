var narutoPic = document.createElement('img');
var backwardNarutoPic = document.createElement('img');
var narutoRunningStep1Pic = document.createElement('img');
var backwardNarutoRunningStep1Pic = document.createElement('img');
var narutoRunningStep2Pic = document.createElement('img');
var backwardNarutoRunningStep2Pic = document.createElement('img');
var backgroundPic = document.createElement('img');
var narutoFallingPic = document.createElement('img');
var narutoFallingBwPic = document.createElement('img');
var narutoCrouch = document.createElement('img');
var narutoCrouchBw = document.createElement('img');
var p1HitSpark = document.createElement('img');
var p2HitSpark = document.createElement('img');
var p1Tag = document.createElement('img');
var p2Tag = document.createElement('img');
var p1Border = document.createElement('img');
var p2Border = document.createElement('img');
var p1Life = document.createElement('img');
var p2Life = document.createElement('img');
var chackraMeter = document.createElement('img');
var stage = document.createElement('img');
var song = document.createElement('audio');  

var player1 = new player(window.innerWidth *.25, 1);
var player2 = new player(window.innerWidth *.65, 2);
var bgMusic = new Audio("Images/magiSong.mp3")
bgMusic.volume = .01;
var hitSound = new Audio("Images/hit.wav")
var noRepeatClone1 = true
var noRepeatClone2 = true
var clone1 = new player(player1.posX + window.innerWidth *.05, player1.change)
var clone2 = new player(player1.posX + window.innerWidth * .1, player1.change)
var clone3 = new player(player1.posX - window.innerWidth * .05, player1.change)
var clone4 = new player(player1.posX - window.innerWidth * .1, player1.change)
var clone5 = new player(player2.posX + window.innerWidth * .05, player2.change)
var clone6 = new player(player2.posX + window.innerWidth * .1, player2.change)
var clone7 = new player(player2.posX - window.innerWidth * .05, player2.change)
var clone8 = new player(player2.posX - window.innerWidth * .1, player2.change)
var player1Clones = [player1]
var player2Clones = [player2]
var p1Wins = false;
var p2Wins = false;
var p1Lives = 5;
var p2Lives = 5;

function fight() { 
	selectScreenFalse()	
	canvasContext.drawImage(backgroundPic, 0, 0, canvas.width, canvas.height);
	canvasContext.drawImage(stage, canvas.width * .2, canvas.height * .6, canvas.width * .6, canvas.height * .4)
	if (mouseX > 0 && mouseX < canvas.width / 4.5 && mouseY > 0 && mouseY < canvas.height / 4.5) {
		canvasContext.drawImage(backwardTouchedArrowPic, 0, 0, canvas.width / 7, canvas.height / 7)
	} else {
		canvasContext.drawImage(backwardUntouchedArrowPic, 0, 0, canvas.width / 7, canvas.height / 7)
	}
	theClones()
	Lives()
	var theFunctions = []
	var first = []
	if(player1.frontMan > player2.frontMan || player1.frontMan == player2.frontMan) {	
		first.push(player1)
	} else {
		first.push(player2)
	}	
	var pushNoRepeat3 = false
	var pushNoRepeat4 = false
	for(var t = 0; t < player1Clones.length;) {	
		player1Clones[t].buttonPressed(71, 65, 83, 68, 82)
		player1Clones[t].buttonFight(70, 67, 86, 66, 87, 65, 83, 68)	
		player1Clones[t].buttonUp(71, 65, 83, 68, 82)	
		player1Clones[t].buttonFightUp(70, 67, 86, 66, 87, 65, 83, 68)
		if(pushNoRepeat3 && first.includes(player1)) {
			theFunctions.push(1)
			pushNoRepeat3 = false
		} else if(pushNoRepeat3) {
			theFunctions.push(2)
			pushNoRepeat3 = false
		}
		theFunctions.push(player1Clones[t])
		if(player1Clones.length > 1) {
		   t++
		} else {
			t = player1Clones.length+1
		}
	}
	for(var t = 0; t < player2Clones.length;) {
		player2Clones[t].buttonPressed(76, 37, 40, 39, 222)
		player2Clones[t].buttonFight(186, 188, 190, 191, 38, 37, 40, 39)
		player2Clones[t].buttonUp(76, 37, 40, 39, 222)
		player2Clones[t].buttonFightUp(186, 188, 190, 191, 38, 37, 40, 39)
		if(pushNoRepeat4 && first.includes(player2)) {
			theFunctions.push(1)
			pushNoRepeat4 = false
		} else if(pushNoRepeat4) {
			theFunctions.push(2)
			pushNoRepeat4 = false
		}
		theFunctions.push(player2Clones[t])
		
		if(player2Clones.length > 1) {
			t++
		} else {
			t = player2Clones.length+1
		}
	}
	for(var p = 0; p < theFunctions.length; p++) {	
		if(theFunctions[0] == 1) {
			if(p+theFunctions.findIndex((players) => {return players == 2}) < theFunctions.length-1 && 
			   theFunctions.findIndex((players) => {return players == 2})-p < 2) {
				functions(theFunctions[p+1+theFunctions.findIndex((players) => {return players == 2})])
			} else if(p < theFunctions.findIndex((players) => {return players == 2})-1) { 
				functions(theFunctions[p+1], theFunctions[1+p+theFunctions.findIndex((players) => {return players == 2})])
			}	
		} else {
			if(1+p+theFunctions.findIndex((players) => {return players == 1}) >= theFunctions.length &&
			   p < theFunctions.findIndex((players) => {return players == 1})-1 || 
			   p+theFunctions.findIndex((players) => {return players == 1}) < theFunctions.length-1 && 
			   theFunctions.findIndex((players) => {return players == 1})-p < 2) {
			   	if(1+p+theFunctions.findIndex((players) => {return players == 1}) >= theFunctions.length) {
			   		functions(theFunctions[1+p])
			   	} else {
			   		functions(theFunctions[p+1+theFunctions.findIndex((players) => {return players == 1})]) 
			   	}
			} else if(p < theFunctions.findIndex((players) => {return players == 1})-1) {
				functions(theFunctions[1+p+theFunctions.findIndex((players) => {return players == 1})], theFunctions[1+p])
				
			}
		}
	}
	bgMusic.play()
}

function theClones() {
	if(player1.disbandClones) {
		player1.multiShadowClone = false
		for(var i = 0; i < player1Clones.length-1; i++) {
			//console.log(clone1.cloneCloud) 
			player1Clones[i+1].cloneCloud = true
			player1Clones[i+1].cloudX = player1Clones[i].posX-50
			player1Clones[i+1].cloudY = player1Clones[i].posY
		} 
		player1Clones = [player1]
	}
	if(player2.disbandClones) {
		player2.multiShadowClone = false
		for(var i = 0; i < player2Clones.length-1; i++) {
			player2Clones[i+1].cloneCloud = true
			player2Clones[i+1].cloudX = player2Clones[i].pos-50
			player2Clones[i+1].cloudY = player2Clones[i].posY
			
		} 
		player2Clones = [player2]
	}
	if(player1.multiShadowClone) {
		clone1 = new player(player1.posX+canvas.width*.05, player1.change)
		clone2 = new player(player1.posX + canvas.width * .1, player1.change)
		clone3 = new player(player1.posX - canvas.width * .05, player1.change)
		clone4 = new player(player1.posX - canvas.width * .1, player1.change)
		player1Clones = [player1, clone1, clone2, clone3, clone4]
		player1.multiShadowClone = false
	} 
	if(player2.multiShadowClone && noRepeatClone2) {
		clone5 = new player(player2.posX + canvas.width * .05, player2.change)
		clone6 = new player(player2.posX + canvas.width * .1, player2.change)
		clone7 = new player(player2.posX - canvas.width * .05, player2.change)
		clone8 = new player(player2.posX - canvas.width * .1, player2.change)
		player2Clones = [player2, clone5, clone6, clone7, clone8]
		player2.multiShadowClone = false
	} 
	var clones = [clone1, clone2, clone3, clone4, clone5, clone6, clone7, clone8]
	var theI = []
	for(var i = 0; i < clones.length; i++) {
		if(clones[i].cloneCloud) {
			canvasContext.drawImage(cloneCloud, clones[i].cloudX, clones[i].cloudY)
			if(theI.includes(i) == false) {
				theI.push(i)
			}	
		} 
		if(theI.length != 0) {
			setTimeout(() => {return clones[theI[0]].cloneCloud = false
						 	 theI.splice(0, 1)}, 300)
		}
	}
}

function Lives() {
	canvasContext.drawImage(p1Border, canvas.width*.067, canvas.height*.8, canvas.width * .17, canvas.height * .15);
	canvasContext.drawImage(p2Border, canvas.width * .73, canvas.height * .8, canvas.width * .17, canvas.height * .15);
	for (i = 0; i < p1Lives; i++) {
		canvasContext.drawImage(p1Life, canvas.width * .15 + i * canvas.width * .017, canvas.height * .85, canvas.width * .012, canvas.height * .02)
	}
	for (i = 0; i < p2Lives; i++) {
		canvasContext.drawImage(p2Life, canvas.width * .8 - i * canvas.width * .017, canvas.height * .85, canvas.width * .012, canvas.height * .02)
	}
	if (p1Lives <= 0) {
		p2Wins = true;
		winner = "Player 2"
		stateOfPlay = 3;
	}
	if (p2Lives <= 0) {
		p1Wins = true;
		winner = "Player 1"
		stateOfPlay = 3;
	}

}

function selectScreenFalse() {
	narutoChosen = false;
	botNarutoChosen = false;
	touchedNarutoPortraitPicLoaded = false;
    narutoPortraitPicLoaded = false;
	backwardTouchedArrowPicLoaded = false;
    backwardUntouchedArrowPicLoaded = false;
	touchedArrowPicLoaded = false;
	untouchedArrowPicLoaded = false;
	backgroundPicLoaded = false;
	player1PicLoaded = false;
	player2PicLoaded = false;
	characterSelectWordsLoaded = false;
}

function loadPics() {
	var imageList = [{pic: narutoPic, theFile: "naruto.png"},
					{pic: backgroundPic, theFile: "bg.jpg"},
					{pic: backwardNarutoPic, theFile: "backwardNaruto.png"},
					{pic: backwardNarutoRunningStep1Pic, theFile: "bwNarutoRunningStep1.png"},
					{pic: narutoRunningStep1Pic, theFile: "narutoRunningStep1.png"},
					{pic: narutoRunningStep2Pic, theFile: "narutoRunningStep2.png"},
					{pic: backwardNarutoRunningStep2Pic, theFile: "backwardNarutoRunningStep2.png"},
					{pic: narutoFallingPic, theFile: "narutoFalling.png"},
					{pic: narutoFallingBwPic, theFile: "narutoFallingbw.png"},
					{pic: narutoCrouch, theFile: "narutoCrouch.png"},
					{pic: narutoCrouchBw, theFile: "narutoCrouchBw.png"},
					{pic: p1HitSpark, theFile: "p1HitSpark.png"},
					{pic: p2HitSpark, theFile: "p2HitSpark.png"},
					{pic: p1Tag, theFile: "p1Tag.png"},
					{pic: p2Tag, theFile: "p2Tag.png" },
					{pic: p1Border, theFile: "Player1Border.png"},
					{pic: p2Border, theFile: "Player2Border.png" },
					{pic: p1Life, theFile: "Player1Life.png" },
					{pic: p2Life, theFile: "Player2Life.png" },
					{pic: stage, theFile: "stage.png" },
					{pic: chackraMeter, theFile: "Chackra.png"}	];

														
	for(let i=0;i<imageList.length;i++) {	
		beginLoadingPics(imageList[i].pic, imageList[i].theFile);
		if(i == imageList.length-1) {
			imageList[i].pic.onload = fight()
		}
	}	
}

function beginLoadingPics(imgVar, fileName) {
	imgVar.src = "images/" + fileName;
}

function player(distance, startpos) {

this.gravity = 1.5;
this.posX = distance;
this.posY = window.innerWidth *.48;
this.speed = 20;
this.speedY = 0;

this.idle = false;
this.running = false;
this.right = false;
this.left = false;
this.runningBw = false;


this.backward = false;
this.fallingBw = false;
this.falling = false;
this.down = false;
this.downBw = false;
this.leap = false

this.falls = false;
this.change = startpos;
this.ground = true;
this.jumpsLeft = 2;
this.desend = false;// fast fall if down in air

this.jumpPower = 13
this.leapDuration = 0 //tracks air time
this.inWallRight = false //sees if you in a wall
this.inWallLeft = false
this.secondJump = false //checks if leap is true for the second jump
this.firstJump = false // checks if jumpsleft = 2
this.upup = true
this.stepTwoA = false
this.stepTwoD = false
this.animation = []
this.nomation = []
this.frontMan = 0
this.HP = 0
this.hitStun = false
this.moveStun = false
this.HitSpark1 = false
this.HitSpark2 = false
this.multiShadowClone = false
this.cloudY = 0
this.cloudX = 0
this.cloneCloud = false
	functions = function(playerOne, playerTwo) {
		if(playerTwo == undefined) {
			playerOne.animationBasic()
			playerOne.moveAll()
			playerOne.blank()
			playerOne.drawCharacters()
			narutoFight()	
			playerOne.general()
		} else {
			playerOne.animationBasic()
			playerTwo.animationBasic()
			playerOne.moveAll()
			playerTwo.moveAll()
			playerOne.blank()
			playerTwo.blank()
			playerOne.drawCharacters()
			playerTwo.drawCharacters()
			narutoFight()	
			playerOne.general()
			playerTwo.general()
		}
	}
	this.airAttack = []
	this.attack = []
	this.blank = function() {
		this.nothing = false
		this.hitBox = { x: this.posX, y: this.posY, width: canvas.width * .08, height: canvas.height * .12 }
		this.animation = [this.running, this.runningBw, this.down, this.downBw]//checks if any animation is true
		this.thePush(this.animation)
		this.airAttack = []
		this.attack = []
		this.movesFalse()
		this.thePush(this.attack)
		this.thePush(this.airAttack)
		if(this.animation.every((movement) => {return movement == false}) == true) {
			this.nothing = true
		}
		this.nomation = [this.nothing]
		this.triped()
		if(this.nothing && this.ground) {
			if(this.change == 1) {
				canvasContext.drawImage(narutoPic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
				this.idle = true
			}	
			if(this.change == 2) {
				canvasContext.drawImage(backwardNarutoPic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
				this.backward = true
			}
		} 
		if(this.nomation.some((nothing) => {return nothing == true})) {
			this.frontMan++	
		}
		if(this.nomation.every((nothing) => {return nothing == false})) {
			this.frontMan = 0
		}
	}

	this.drawCharacters = function() {	
		canvasContext.drawImage(p1Tag, player1.posX + canvas.width * .025, player1.posY - canvas.height * .07, canvas.width * .03, canvas.height * .05)
		canvasContext.drawImage(p2Tag, player2.posX + canvas.width * .025, player2.posY - canvas.height * .07, canvas.width * .03, canvas.height * .05)
		this.stepTwo()
		if(this.ground) {	
			this.leapDuration = 0
			if(this.stepTwoD) {
				canvasContext.drawImage(narutoRunningStep2Pic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			} else if(this.running) {
				canvasContext.drawImage(narutoRunningStep1Pic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			}	
			if(this.stepTwoA) {
				canvasContext.drawImage(backwardNarutoRunningStep2Pic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			} else if(this.runningBw) {
				canvasContext.drawImage(backwardNarutoRunningStep1Pic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			}	
			if(this.down) {
				canvasContext.drawImage(narutoCrouch, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			}
			if(this.downBw) {
				canvasContext.drawImage(narutoCrouchBw, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			}
			this.falls = false
			this.falling = false
			this.fallingBw = false
		}
		else {
			this.falls = true
			this.leapDuration++
			if(this.airAttack.every((attacks) => {return attacks == false})) {
				if(this.falling) {
					canvasContext.drawImage(narutoFallingPic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
					this.fallingBw = false;
				}
				if(this.fallingBw) {
					canvasContext.drawImage(narutoFallingBwPic, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
					this.falling = false;
				}
			}
		} 
	}
	this.step2 = false
	this.stepTwo = function () {
		
		if(!this.running && !this.runningBw) {
			this.step2 = false
		}
		if(!this.running) {
			this.stepTwoD = false
		}
		if(!this.runningBw) {
			this.stepTwoA = false
		} 
		if(this.running || this.runningBw) {
			setTimeout(() => {return this.step2 = true}, 200)
			
			if(this.step2) {
				if(this.change == 1) {
					this.stepTwoD = true
				}
				if(this.change == 2) {
					this.stepTwoA = true
				}
				setTimeout(() => {return this.step2 = false}, 200)
			}  
		}
		if(!this.step2) {
			this.stepTwoA = false
			this.stepTwoD = false
		}
	}
	this.animationBasic = function() {
		this.setBounds()
		if(this.ground) {
			if(this.right) {
				this.running = true
				this.down = false
				this.downBw = false 
			} else {
				this.running = false
			}
			if(this.left) {
				this.runningBw = true
				this.downBw = false 
				this.down = false
			} else {
				this.runningBw = false
			}
		}
		if (!this.ground || this.moveStun) {  
			this.running = false
			this.runningBw = false
		}
		this.direction()
		if(this.HitSpark1) {
			canvasContext.drawImage(p1HitSpark, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			setTimeout(() => {return this.HitSpark1 = false}, 30)	
		}	
		if(this.HitSpark2) {
			canvasContext.drawImage(p2HitSpark, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
			setTimeout(() => {return this.HitSpark2 = false}, 30)
		}
	}	

	this.direction = function() {
		if(this.running || this.down || this.falling || this.fwNormal || this.backAir) { // change
			this.change = 1
		}	
		if(this.runningBw || this.downBw || this.fallingBw || this.fwNormalBw || this.backAirBw) { 
			this.change = 2
		}		
		if(!this.ground) { // off ground stuff
			if(this.change == 1) {
				this.falling = true
			}
			if(this.change == 2) {
				this.fallingBw = true
			}
		}
	}

	this.setBounds = function() {

		if (this.posX > canvas.width || this.posX < -canvas.width*.08 || this.posY < -canvas.height*.12 || this.posY > canvas.height) {//off map detection and relocation
			this.HP = 0;
			this.posY = canvas.height*.48;
			this.posX = distance;
			this.speedY = 0;
			this.speedX = 0;
			this.jumpsLeft = 2;
			this.change = startpos 
			this.hitTimer = false
			if (this == player1) { p1Lives--; }
			if (this == player2) { p2Lives--; }
			if (this != player1 && this != player2) {
				this.HP = 10
            }
		}
		if (this.posY >= canvas.height * .48 && this.posX >= canvas.width * .15 && this.posX <= canvas.width * .75 && !this.inWallRight && !this.inWallLeft) {// makes the ground 'solid'
			this.falls = false
			this.posY = canvas.height * .48
			this.speedY = 0
			this.jumpsLeft = 2
			this.ground = true;
			this.inWallLeft = false;
			this.inWallRight = false;
		} else if (this.posY >= canvas.height * .48) {
			if (this.posX >= canvas.width * .75 && this.posX <= canvas.width * .76 && !this.ground) {//wall detection
				this.inWallRight = true;
			}
			if (this.posX >= canvas.width * .1 && this.posX <= canvas.width * .15 && !this.ground) {
				this.inWallLeft = true;
			} 
		}
		if (this.posX < canvas.width * .75 || this.posX > canvas.width * .76 || this.posY < canvas.height * .48) {
			this.inWallRight = false;
		}
		if (this.posX < canvas.width * .1 || this.posX > canvas.width * .15 || this.posY < canvas.height * .48) {
			this.inWallLeft = false;
        }
		if (this.posY < canvas.height * .48 || this.posX <= canvas.width * .15 || this.posX >= canvas.width * .75) {
			this.ground = false;
		} else {
			this.ground = true;
        }
	}
	this.jump2 = 1
	this.hops = function() {
		if(this.jumpsLeft == 2) {
			this.jump2 = 1
			this.firstJump = true
		} else {
			this.firstJump = false
		}
		if(this.leap && this.falls && this.jumpsLeft == 1) {
			this.secondJump = true

		} else if(!this.leap || this.ground && this.jumpsLeft != 1){
			this.secondJump = false
		}

		if(!this.leap && this.gravity > 15) {
			this.gravity = 15
		}
	}

	this.moveAll = function() {
		this.hops()
		if(this.right && !this.inWallLeft) {
			this.posX += this.speed * (canvas.height+canvas.width)/3500;
		}
		if(this.left && !this.inWallRight) {
			this.posX -= this.speed * (canvas.height + canvas.width) / 3500;
		}
		/*if(this.desend) {
			this.gravity * 1.01
		} else {
			
		}*/
		this.gravity = 1.5
		if(this.leap && this.firstJump) {//adds jumpPower to speedY your still pressing up and you were only above ground for 50 frames
			this.speedY -= this.jumpPower/1.3
			
		}
		this.gravity += this.leapDuration*2
		if(this.secondJump) {
			if(this.jump2 == 1) {
				this.gravity = 1.5
				this.speedY = -35 //ensures that there is an instant upward draft
				this.leapDuration = 0
				this.jump2--
			}
			if(this.speedY >= -35 && this.speedY < -13) {
				this.speedY -= this.jumpPower
			}
		} 	 

		if(this.falls) {// makes gravity increase slightly proportionaly to air time and it adds gravity when in air
			
			this.speedY += this.gravity	
			if(this.speedY > 40 && !this.desend) {
				this.speedY = 40
			}
		}
		this.posY += this.speedY * (canvas.height + canvas.width) / 3500
	}
	this.turn = false
	this.goRight = 0
	this.goLeft = 0
	this.buttonPressed = function(up, left, down, right, reverse) {
		if(!callings1.includes(this) && !callings2.includes(this)) {
			this.noButtonUp = false
			this.cloneCall = false
		}
		if (stateOfPlay == 2 && !this.moveStun && !this.cloneCall && !this.noButtonUp) {
			console.log(player1.moveStun)
			if(buttons[right]) { // if D
		 		this.right = true;
		 		this.goRight++
		 	}
		 	if(buttons[left]) { // if A
		 		this.left = true; 
		 		this.goLeft++
		 	}
			if(buttons[down] && !this.trip && !this.tripBw) {	// if S		
				if(!this.ground) {
					setTimeout(() => {return this.desend = true}, 125)
				} else {
					this.desend = false
					if(this.change == 1) {
	 					this.down = true
	 				}
	 				if(this.change == 2) {
	 					this.downBw = true
	 				}	
				}
			}	
			if(buttons[right] && buttons[left]) {
				if(this.goLeft < this.goRight) {
					this.right = false				
				}
				if(this.goRight < this.goLeft) {
					this.left = false
				}
			}
			if(buttons[up]) { // if W
				if(this.jumpsLeft > 0 && this.upup) {
					this.leap = true
					this.falls = true
					if(this.jumpsLeft == 1 && this.secondJump || this.jumpsLeft == 2) {
						this.upup = false
					}
					this.jumpsLeft--;	
				}	
			}
			if(buttons[reverse]) {
				if(this.change == 2 && !this.turn) {
					this.turn = true
					this.change = 1
				}
				if(this.change == 1 && !this.turn) {
					this.turn = true
					this.change = 2
				}
			}
		}
	}	
	this.noButtonUp = false
	this.moveFalse = false
	this.makeFalseNoRepeat = true
	this.buttonUp = function(up, left, down, right, reverse) {
		if(callings1.includes(this) && this.makeFalseNoRepeat || callings2.includes(this) && this.makeFalseNoRepeat) {
			this.makeFalse = true
			this.makeFalseNoRepeat = false
		}
		if(stateOfPlay == 2) {
			if(!this.noButtonUp || this.noButtonUp && this.makeFalse) {
				if(!buttons[right] || this.makeFalse) {
					this.right = false;
					this.running = false
					this.goRight = 0
				}	
				if(!buttons[left] || this.makeFalse) {
					this.left = false;
					this.runningBw = false	
					this.goLeft = 0
				}	
				if(!buttons[up] || this.makeFalse) {
		 			this.leap = false
		 			this.upup = true
		 		} 
		 		if(!buttons[down] || this.makeFalse) {
		 			this.desend = false;
		 			this.down = false
		 			this.downBw = false
				}
				if(!buttons[reverse] || this.makeFalse) {
					this.turn = false
				}
			}
	 	}
		this.makeFalse = false 	
	}
	this.cloneCall = false
	var callings1 = []
	var callings2 = []
	var callers1 = []
	var callers2 = []
	this.cloneSet = {called: false, calledFw: false, calledBw: false, caller: false}
	this.callClones = function(playerClones, callers, callings) {
		for(var i = callers.length; i < playerClones.length; i++) {
			if(playerClones == player1Clones) {
				callers1.push(player1Clones[i])
			}
			if(playerClones == player2Clones) {
				callers2.push(player2Clones[i])
			}
		}
		if(callings.length == 0) {
			for(var i = 0; i < callers.length; i++) {
				var filter = playerClones.filter((players) => {players != playerClones[i]})	
				var aNoRepeat = true
				for(var a = 0; a < callers.length && aNoRepeat; a++) {	
					if(!callings.includes(playerClones[i]) && filter.every((players) => {playerClones[i].posX-callers[a].posX > players.posX-callers[a].posX})) {
						aNoRepeat = false
						callers.splice(a, 1)
						callers.splice(callers.indexOf(playerClones[i]), 1)	
						if(i == callers.length-1 && i % 2 != 0 || i != callers.length-1) {
							callings.push(callers[a])
							callings.push(playerClones[i])
						}
					}
				}
			}
		}
		
		for(var i = 0; i < callings.length; i += 2) {
			if(callings[i].change == 1) {
				if(callings[i+1].posX >= callings[i].posX+100) {
					callings[i+1].left = true
				} else {
					callings[i+1].left = false
				}
				if(callings[i+1].posX <= callings[i].posX+60) {
					callings[i+1].right = true
				} else {
					callings[i+1].right = false
				}
				if(callings[i+1].posX < callings[i].posX+100 && callings[i+1].posX > callings[i].posX+60) {
					callings[i+1].cloneSet.called = true	
					callings[i+1].cloneSet.calledBw = true
					callings[i].cloneSet.caller = true
					callings.splice(callings.indexOf(callings[i]), 2)
				}
			} else {
				if(callings[i+1].posX >= callings[i].posX-100) {
					callings[i+1].left = true
				} else {
					callings[i+1].left = false
				}
				if(callings[i+1].posX <= callings[i].posX-60) {
					callings[i+1].right = true
				} else {
					callings[i+1].right = false
				}
				if(callings[i+1].posX < callings[i].posX-100 && callings[i+1].posX > callings[i].posX-60) {
					callings[i+1].cloneSet.called = true
					callings[i+1].cloneSet.calledFw = true
					callings[i].cloneSet.caller = true
					callings.splice(callings.indexOf(callings[i]), 2)
				}
			}
		}	
	}

	this.fwNormal = false
	this.fwNormalBw = false
	this.noInfinites = true
	this.hit = false
	this.upNormal = false
	this.upNormalBw = false
	this.downNormal = false
	this.downNormalBw = false
	this.fwAir = false
	this.fwAirBw = false
	this.moveStunAir = false
	this.moveDone = true
	this.downAir = false
	this.downAirBw = false
	this.backAir = false
	this.backAirBw = false
	this.upAir = false
	this.upAirBw = false
	this.normal = false
	this.normalBw = false
	this.normalAir = false
	this.normalAirBw = false
	this.recharge = false
	this.cloneJitsu = false
	this.cloneJitsuBw = false
	this.disbandClones = false
	this.rasengan = {charge: false, chargeBw: false, charger: false, chargerBw: false, charger2: false, charger2Bw: false,
					 one: false, two: false, Bw1: false, Bw2: false}
	this.buttonFight = function(superSpecial, normal, specialNormal, special, up, left, down, right) {
		if(stateOfPlay == 2 && !this.moveStun && this.noInfinites && !this.hitStun && !this.trip && !this.tripBw && !this.moveStunAir && !this.cloneCall
			&& !this.noButtonUp) {		
			if(buttons[normal] && !this.falls) {
				if(buttons[right] && this.moveDone) {
					this.fwNormal = true
					this.right = false
					this.noInfinites = false
					this.moveDone = false
					setTimeout(() => {return this.fwNormal = false}, 300)
				}
				if(buttons[left] && this.moveDone) {
					this.fwNormalBw = true
					this.left = false
					this.noInfinites = false
					this.moveDone = false
					setTimeout(() => {return this.fwNormalBw = false}, 300)
				}
				if(buttons[up] && this.moveDone) {
					if(this.change == 1) {
						this.upNormal = true
						setTimeout(() => {return this.upNormal = false}, 300)
					}
					if(this.change == 2) {
						this.upNormalBw = true
						setTimeout(() => {return this.upNormalBw = false}, 300)
					}
					this.noInfinites = false
					this.moveDone = false
					
				}
				if(buttons[down] && this.moveDone) {
					if(this.change == 1) {
						this.downNormal = true
						this.down = false
						setTimeout(() => {return this.downNormal = false}, 300)
					}
					if(this.change == 2) {
						this.downNormalBw = true
						this.downBw = false
						setTimeout(() => {return this.downNormalBw = false}, 300)
					}
					this.noInfinites = false
					this.moveDone = false
				} 	
				if(this.moveDone) {
					if(this.change == 1) {
						this.normal = true
						setTimeout(() => {return this.normal = false}, 300)
					}
					if(this.change == 2) {
						this.normalBw = true
						setTimeout(() => {return this.normalBw = false}, 300)
					}
					this.noInfinites = false
					this.moveDone = false
				}	
			}	
			if(this.falls && buttons[normal]) {
				if(buttons[right]) {
					if(this.change == 1 && this.moveDone) {
						this.fwAir = true
						this.moveDone = false
						this.noInfinites = false
						setTimeout(() => {return this.fwAir = false}, 300)
					}
					if(this.change == 2 && this.moveDone) {
						this.backAir = true
						this.moveDone = false
						this.noInfinites = false
						setTimeout(() => {return this.backAir = false}, 300)
					}
					
				} 
				if(buttons[left] ) {
					if(this.change == 2 && this.moveDone) {
						this.fwAirBw = true
						this.moveDone = false
						this.noInfinites = false
						setTimeout(() => {return this.fwAirBw = false}, 300)
					}
					if(this.change == 1 && this.moveDone) {
						this.backAirBw = true
						this.moveDone = false
						this.noInfinites = false
						setTimeout(() => {return this.backAirBw = false}, 300)
					}	
				}
				if(buttons[down] && this.moveDone) {
					this.desend = false
					if(this.change == 1) {
						this.downAir = true
						setTimeout(() => {return this.downAir = false}, 300)
					}
					if(this.change == 2) {
						this.downAirBw = true
						setTimeout(() => {return this.downAirBw = false}, 300)
					}
					this.noInfinites = false
					this.moveDone = false
				}
				if(buttons[up] && this.moveDone) {
					if(this.change == 1) {
						this.upAir = true
						setTimeout(() => {return this.upAir = false}, 260)
					}
					if(this.change == 2) {
						this.upAirBw = true
						setTimeout(() => {return this.upAirBw = false}, 260)
					}
					
					this.noInfinites = false
					this.moveDone = false
				}
				if(this.moveDone) {
					if(this.change == 1) {
						this.normalAir = true
						setTimeout(() => {return this.normalAir = false}, 300)
					}
					if(this.change == 2) {
						this.normalAirBw = true
						setTimeout(() => {return this.normalAirBw = false}, 300)
					}
					this.noInfinites = false
					this.moveDone = false
				}
			}
			if(buttons[special]) {
				if (buttons[right] && this.moveDone) {
					if (this.chackra >= .2) {
						if (player1Clones.includes(this) && player1Clones.length > 1 || player2Clones.includes(this) && player2Clones.length > 1) {
							if (this == player1 || this == player2) {
								this.chackra -= .1
                            }
							
							if(player1Clones.includes(this)) {
								this.callClones(player1Clones, callers1, callings1)
							} else {
								this.callClones(player2Clones, callers2, callings2)
							}
							//console.log(callings1.includes(this) || callings2.includes(this))
							if(callings1.includes(this) || callings2.includes(this)) {
								this.moveStun = true
								this.cloneCall = true
								this.moveDone = false
								this.noInfinites = false
								this.noButtonUp = true
							}
						}
                    }
				}
				if (buttons[down] && this.moveDone) {
					this.recharge = true
					this.moveStun = true
					this.noInfinities = false
					this.moveDone = false
                }
				if (this.moveDone) {
					if (this.chackra > 0) {
						this.moveStun = true
					
						if(this.change == 1) {
							this.cloneJitsu = true
						}
						if(this.change == 2) {
							this.cloneJitsuBw = true
						}
						if(player1Clones.length == 1) {
							setTimeout( () => {this.cloneJitsuBw = false
								   		   this.cloneJitsu = false
										   this.multiShadowClone = true
										   this.disbandClones = false		
								   		   this.moveStun = false}, 800)
						} else {
							setTimeout( () => {this.cloneJitsuBw = false
								   		   this.cloneJitsu = false
										   this.multiShadowClone = false
										   this.disbandClones = true
								   		   this.moveStun = false}, 200)
						}
						this.noInfinites = false
						this.moveDone = false
                    }
					
				}
			}
			
		}
		if(callings1.includes(this)) {	
			this.callClones(player1Clones, callers1, callings1)
		} 
		if(callings2.includes(this)){
			this.callClones(player2Clones, callers2, callings2)
		}
		this.Rasengan()
		if(this.attack.every((move) => {return move == false}) && this.airAttack.every((move) => {return move == false})) {
			this.moveDone = true
		}
	}
	this.buttonFightUp = function (superSpecial, normal, specialNormal, special, up, left, down, right) { 
		if(!buttons[normal]) {
			this.noInfinites = true
		}
		if (!buttons[special] || !buttons[down]) {
			this.recharge = false
			this.moveStun = false
        }
	}
	this.thePush = function(array, noRepeat) {
		if(array == this.airAttack || array == this.animation) {
			array.push(this.fwAir)
			array.push(this.fwAirBw)
			array.push(this.downAir)
			array.push(this.downAirBw)
			array.push(this.backAir)
			array.push(this.backAirBw)
			array.push(this.upAir)
			array.push(this.upAirBw)
			array.push(this.normalAir)
			array.push(this.normalAirBw)
			array.push(this.recharge)
		} 
		if(array != this.airAttack) {
			array.push(this.fwNormal)
			array.push(this.fwNormalBw)
			array.push(this.upNormal)
			array.push(this.upNormalBw)
			array.push(this.downNormal)
			array.push(this.downNormalBw)
			array.push(this.normal)
			array.push(this.normalBw)
			array.push(this.cloneJitsu)
			array.push(this.cloneJitsuBw)
			array.push(this.rasengan.charger)
			array.push(this.rasengan.chargerBw) 
			array.push(this.rasengan.charge)
			array.push(this.rasengan.chargeBw)
			array.push(this.rasengan.one)
			array.push(this.rasengan.Bw1)
			array.push(this.cloneJitsu)
			array.push(this.cloneJitsuBw)
			array.push(this.recharge)
		}
	}
	
	this.hitTimer = false
	this.knockbackPt = { up: 0, forward: 0 }
	this.dmNoRepeat = true
	this.identify
	this.trip = false
	this.tripBw = false
	this.triped = function() {
		this.nomation.push(this.trip)
		this.nomation.push(this.tripBw)
		if(this.running || this.runningBw || this.leap) {
			this.trip = false
			this.tripBw = false
		}
		if(this.ground) {
			if(this.trip && this.change == 1) {
				canvasContext.drawImage(trip, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
				this.moveStun = true
				setTimeout(() => {this.moveStun = false}, 100)
				this.tripBw = false
				this.nothing = false
				this.down = false
			}
			if(this.tripBw && this.change == 2) {
				canvasContext.drawImage(tripBw, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
				this.moveStun = true
				setTimeout(() => {this.moveStun = false}, 100)
				this.trip = false
				this.nothing = false
				this.downBw = false
			}
		}
	}
	this.movesFalse = function() {
		if(this.ground) {
			this.fwAir = false
			this.fwAirBw = false
			this.downAir = false
			this.downAirBw = false
			this.backAir = false
			this.backAirBw = false
			this.upAir = false
			this.upAirBw = false
			this.moveStunAir = false
			this.normalAir = false
			this.normalAirBw = false
		} else {
			this.upNormal = false
			this.upNormalBw = false
			this.fwNormal = false
			this.fwNormalBw = false
			this.downNormal = false 
			this.downNormalBw = false
			this.normal = false
			this.normalBw = false
			this.moveStun = false
		}
		if (this.recharge) {
			this.down = false
			this.downBw = false
			this.moveStun = true
        }
	}	
	this.trueNR = true
	this.trueNR2 = true
	this.Rasengan = function() {

		if(this.cloneSet.called) {
			if(this.cloneSet.calledFw) {
				if(this.trueNR) {
					this.rasengan.charger = true
					this.rasengan.charger2 = true
					this.trueNR = false
				}

				
				if(this.rasengan.charger2) {
					setTimeout(() => {return this.rasengan.charger2 = false}, 200)
				}
				if(!this.rasengan.charger2) {
					setTimeout(() => {return 
					if(this.rasengan.charger) {this.rasengan.charger2 = true}}, 200)
				}
				setTimeout(() => {return this.rasengan.charger = false
								  this.rasengan.charger2 = false}, 800)
			}
			if(this.cloneSet.calledBw) {
				if(this.trueNR) {
					this.rasengan.chargerBw = true
					this.rasengan.charger2Bw = true
					this.trueNR = false
				}
				
				if(this.rasengan.charger2Bw) {
					setTimeout(() => {return this.rasengan.charger2Bw = false}, 200)
				}
				if(!this.rasengan.charger2Bw) {
					setTimeout(() => {return 
					if(this.rasengan.chargerBw) {this.rasengan.charger2Bw = true}}, 200)
				}
				setTimeout(() => {return this.rasengan.chargerBw = false
								  this.rasengan.charger2Bw = false}, 800)

			}
			if(!this.rasengan.charger && !this.rasengan.chargerBw) {
				this.cloneSet.called = false
				this.cloneSet.calledFw = false
				this.cloneSet.calledBw = false
				this.moveStun = false
				
			}
			this.drawMoves(this.rasengan.charger, this.rasengan.chargerBw, rasenganCharger, rasenganChargerBw, 
						   this.rasengan.charger2, this.rasengan.charger2Bw, rasenganCharger2, rasenganCharger2Bw, 2, true)
		} else {
			this.trueNR = true
		}	
		if(this.cloneSet.caller) {
			if(this.change == 1) {
				if(this.trueNR2) {
					this.rasengan.charge = true
					this.trueNR2 = false
				}
				setTimeout(() => {return this.rasengan.charge = false}, 800)
			}
			if(this.change == 2) {
				if(this.trueNR2) {
					this.rasengan.chargeBw = true
					this.trueNR2 = false
				}
				setTimeout(() => {return this.rasengan.chargeBw = false}, 800)
			}
			this.drawMoves(this.rasengan.charge, this.rasengan.chargeBw, rasenganCharge, rasenganChargeBw)
			if(!this.rasengan.charge && !this.rasengan.chargeBw) {
				this.cloneSet.caller = false

				if(this.change == 1) {
					this.rasengan.one = true
					this.rasengan.two = true
					
					setTimeout(() => {return this.rasengan.one = false
									  this.rasengan.two = false
									  this.moveStun = false}, 800)	
				}
				if(this.change == 2) {
					this.rasengan.Bw1 = true
					this.rasengan.Bw2 = true		
					setTimeout(() => {return this.rasengan.Bw1 = false
									  this.rasengan.Bw2 = false
									  this.moveStun = false}, 800)
					
				}
			}
			
		} else {
			this.trueNR2 = true
		}
		if(this.rasengan.one) {
			if(this.rasengan.two) {
				setTimeout(() => {return this.rasengan.two = false}, 200)
			} 	
			if(!this.rasengan.two) {
				setTimeout(() => {return this.rasengan.two = true}, 200)
			} 
		}
		if(this.rasengan.Bw1) {
			if(this.rasengan.Bw2) {
				setTimeout(() => {return this.rasengan.Bw2 = false}, 200)
			} 	
			if(!this.rasengan.Bw2) {
				setTimeout(() => {return this.rasengan.Bw2 = true}, 200)
			} 
		}

	}
	this.moveNum = 0
	this.moveNumNoRepeat = true
	this.hitSwitch = {fw: false, bw: false}
	this.projectPos = []
	this.projectCounter = 0
	var thisH = []
	this.kbUp = 0
	this.kbForward = 0
	this.kbDown = 0
	this.hiterID = ""
	this.spliceNoRepeat1 = true
	this.spliceNoRepeat2 = true
	this.chackra = 1
	this.general = function () {
		if (this == player1 || this == player2) {
			this.HPshow = Math.floor(this.HP).toString()
			if (this == player1) {
				colorText(this.HPshow, canvas.width * .27, canvas.height * .9, "white", (canvas.width + canvas.height) / 30)
			} else {
				colorText(this.HPshow, canvas.width * .67 - (canvas.width + canvas.height) / 60 * (this.HPshow.length - 1), canvas.height * .9, "white", (canvas.width + canvas.height) / 30)
			}

		}
		console.log(this.moveStun)
		canvasContext.drawImage(chackraMeter, canvas.width * .125, canvas.height * .922, canvas.width * .11 * player1.chackra, canvas.height * .018);
		canvasContext.drawImage(chackraMeter, canvas.width * .734 - canvas.width * .11 * (player2.chackra - 1), canvas.height * .922, canvas.width * .11 * player2.chackra, canvas.height * .018);
		if (this == player1 || this == player2) {
			if (player1Clones.includes(this) && player1Clones.length > 1 || player2Clones.includes(this) && player2Clones.length > 1) {
				this.chackra -= .005
			}
			if (this.chackra <= 0) {
				this.disbandClones = true
				this.chackra = 0
			}
		}
		if (this.recharge) {
			if (this.chackra < 1) {
				this.chackra += .003
			} else {
				this.chackra = 1
			}
			this.moveStun = true
		}

		if(this.attack.every((attacks) => {return attacks == false}) && this.airAttack.every((attacks) => {return attacks == false})) {
			this.moveNumNoRepeat = true
			this.projectNoRepeat = true
		}	
		if(this.attack.some((attacks) => {return attacks == true}) || this.airAttack.some((attacks) => {return attacks == true})) {
			if(this.moveNumNoRepeat) {
				this.moveNum += 1
				this.moveNumNoRepeat = false
			}
		}
		if(this.cloneJitsu) {
			canvasContext.drawImage(cloneJitsu, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
		}
		if(this.cloneJitsuBw) {
			canvasContext.drawImage(cloneJitsuBw, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
		}
		this.moveFormat(this.normal, this.normalBw, undefined, undefined, normal, normalBw, undefined, undefined, undefined, 
						this.projectPos, this.projectPos, 10, 6, 4, 1, 1, true, false, false, 0, 0, 0, 'normal'+this.moveNum.toString(),
						0, 0, 17, true, 'normal', cuni, cuniBw)	
		this.moveFormat(this.normalAir, this.normalAirBw, undefined, undefined, normalAir, normalAirBw, undefined, undefined, undefined, 
						this.projectPos, this.projectPos, 10, 6, 8, 1, 1, true, false, false, 0, 0, 0, 'normalAir'+this.moveNum.toString(),
						0, 8, 17, true, 'normalAir', shiriken, shiriken)
		this.moveFormat(this.fwNormal, this.fwNormalBw, undefined, undefined, fwNormal, fwNormalBw, undefined, undefined, undefined, 
						this.posY + canvas.height*.015, this.posX + canvas.width * .05, canvas.height*.05, canvas.width * .05, 2, 2, 7.2, false, false, false, 0, 10, 10, 'fwNormal'+this.moveNum.toString(),
					    0, 0, 0, false)
		this.moveFormat(this.upNormal, this.upNormalBw, undefined, undefined, upNormal, upNormalBw, undefined, undefined, undefined, 
						this.posY, this.posX+canvas.width*.06, canvas.height*.05, canvas.width*.03, 2, 2, 5.3, false, false, false, 0, 30, 1, 'upNormal'+this.moveNum.toString(),
						0, 0, 0, false)
		this.moveFormat(this.downNormal, this.downNormalBw, undefined, undefined, downNormal, downNormalBw, undefined, undefined, undefined, 
						this.posY+canvas.height*.04, this.posX+canvas.width*.04, canvas.height*.07, canvas.width*.05, 2, 2, 4.5, false, true, true, 0, 0, 0, 'downNormal'+this.moveNum.toString(),
						0, 0, 20, false)
		this.moveFormat(this.fwAir, this.fwAirBw, undefined, undefined, fwAir, fwAirBw, undefined, undefined, undefined,
						this.posY+canvas.height*.09, this.posX+canvas.width*.01, canvas.height*.06, canvas.width*.07, 2, 2, 4.9, true, false, false, 0, 16, 4, 'fwAir'+this.moveNum.toString(), 
						0, 0, 0, false)
		this.moveFormat(this.downAir, this.downAirBw, undefined, undefined, downAir, downAirBw, undefined, undefined, undefined, 
						this.posY+canvas.height*.05, this.posX+canvas.width*.04, canvas.height*.07, canvas.width*.065, 2, 2, 6.1, true, true, true, 2, 16, 0, 'downAir'+this.moveNum.toString(), 
						3, 0, 15, false)
		this.moveFormat(this.backAir, this.backAirBw, undefined, undefined, backAir, backAirBw, undefined, undefined, undefined, 
						this.posY+canvas.height*.055, this.posX+canvas.width*.05, canvas.height*.065, canvas.width*.06, 2, 2, 7.5, true, false, false, 0, 6, 12, 'backAir'+this.moveNum.toString(), 
						0, 2, 19, false)
		this.moveFormat(this.upAir, this.upAirBw, undefined, undefined, upAir, upAirBw, undefined, undefined, undefined,
						this.posY, this.posX+canvas.width*.05, canvas.height*.05, canvas.width*.05, 2, 2, 4.7, true, false, false, 0, 26, 2, 'upAir'+this.moveNum.toString(),
						28, 0, 0, false)

		this.moveFormat(this.rasengan.one, this.rasengan.Bw1, this.rasengan.two, this.rasengan.Bw2, rasengan, rasenganBw, rasengan2, rasengan2Bw, 200,
						this.posY+canvas.height*.02, this.posX+canvas.width*.08, canvas.height*.06, canvas.width*.06, 1, 1, 10.9, false, true, false, 0, 10, 20, 'rasengan'+this.moveNum.toString(),
						0, 0, 24, false)
		this.moveFormat(this.recharge, this.recharge, undefined, undefined, meditate, meditate, undefined, undefined, undefined,
						this.posY + canvas.height * .015, this.posX + canvas.width * .05, canvas.height * .05, canvas.width * .05, 0, 0, 0, false, false, false, 0, 0, 0, 'recharge' + this.moveNum.toString(),
						0, 0, 0, false)
		
		for (var g = 0; g < thisH.length; g++) {
			if (thisH[g] != null) {
				if (thisH[g].hitTimer) {
					thisH[g].knockback(thisH[g].kbForward, thisH[g].kbUp, thisH[g].kbDown)
				}
			}
		}
		
		if(this.HP >= 10 && this != player1 && this != player2 && player1Clones.includes(this)) {
			this.cloneCloud = true
			this.cloudX = this.posX-50
			this.cloudY = this.posY
			if(this.spliceNoRepeat1) {
				player1Clones.splice(player1Clones.findIndex((thee) => {return thee == this}), 1)
				this.spliceNoRepeat1 = false	
			} 
			
		} else {
			this.spliceNoRdepeat1 = true
		}	
		if(this.HP >= 10 && this != player1 && this != player2 && player2Clones.includes(this)) {
			this.cloneCloud = true
			this.cloudX = this.posX-50
			this.cloudY = this.posY
			if(this.spliceNoRepeat2) {
				player2Clones.splice(player2Clones.findIndex((thee) => {return thee == this}), 1)
				this.spliceNoRepeat2 = false
			}

		} else {
			this.spliceNoRepeat2 = true
		}
	}
	this.moveStartStun = true
	this.hitTimerOnce = true
	this.moveFormat = function(move1, move2, move1_2, move2_2, drawMove1, drawMove2, drawMove1_2, drawMove2_2, transMove,
							   upB, leftB, downB, rightB, stunTimeM/*in seconds*/, stunTimeH/*in seconds*/, damage, air, stun,
							   trips, down, up, forward, identifier, upM, downM, forwardM, projectile, disjontID, addon1, addon2) {
		this.once = true
			
		for (var g = 0; g != -1;) {
			if (!this.hitTimer) {

				this.kb.forward = false
				this.kb.backward = false
				setTimeout(() => { this.hitStun = false }, stunTimeH * 100)
			} 
			
			if (thisH.length > 0) {
				
				if (thisH[g].hiterID == identifier && this.attack.every((attacks) => { return attacks == false }) && this.airAttack.every((attacks) => { return attacks == false })) {
					thisH[g].dmNoRepeat = true // problem here probably with hiterID
					thisH[g].hitSwitch.bw = false
					thisH[g].hitSwitch.fw = false
					thisH[g].hiterID = ""
					thisH[g].hit = false
				}		
			}
			if(move1 || move2 || thisH.length > 0 && thisH[g].hitTimer && this.identify == identifier || thisH.length > 0 && thisH[g].hit
				&& this.identify == identifier || projectile && this.projectPos.includes(disjontID)) {
				this.identify = identifier 
				this.moved = this.animation.filter( (animates) => {return animates == true})
				if (this.moved.length == 2) {
					move1 = false
					move2 = false
				}

				this.specialSettings(move1, move2, upM, downM, forwardM, projectile, disjontID, addon1, addon2)
				this.drawMoves(move1, move2, drawMove1, drawMove2, move1_2, move2_2, drawMove1_2, drawMove2_2, transMove)
				
				if(move1 || move2) {
					if(air) {
						this.moveStunAir = true
						setTimeout( () => {return this.moveStunAir = false}, stunTimeM*100)
					} 
					if(!air){
						this.moveStun = true
						setTimeout( () => {return this.moveStun = false}, stunTimeM*100)
					}
				}
				this.gotHit(leftB, upB, rightB, downB, move1, move2, projectile, disjontID, identifier)	
				if (thisH.length > 0) {		
					if (thisH[g].hitTimer && thisH[g].hiterID == identifier) {
						thisH[g].stunHit(stun, trips)
					}						
					
				}
			}
			if (thisH[g] != null) {
				thisH[g].damage(damage, projectile)
				if (thisH[g].hitTimerOnce) {
					thisH[g].kbForward = forward
					thisH[g].kbUp = up
					thisH[g].kbDown = down
					thisH[g].knockbackPt = { up: up, forward: forward}
					thisH[g].hitTimerOnce = false
				}
				if (thisH[g].knockbackPt.forward <= 0 && thisH[g].knockbackPt.up <= 0) {
					thisH[g].hit = false
					thisH[g].hitTimer = false
					thisH[g].kb.backwardStop = false
					thisH[g].kb.forwardStop = false
				}
				

            }
				
			
			if(g < thisH.length) {
				g++
			}
			if(thisH.length == 0 || g == thisH.length) {
				g = -1
			}
			this.once = false
		}
			
	}
	this.XY = {x: false, y: false}
	this.drawMoves = function(move1, move2, drawMove1, drawMove2,  move1_2, move2_2, drawMove1_2, drawMove2_2, transMove) {
		if(move1_2) {
			canvasContext.drawImage(drawMove1_2, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
		} else if(move1) {
			canvasContext.drawImage(drawMove1, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
		}
		if(move2_2) {
			canvasContext.drawImage(drawMove2_2, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
		} else if(move2) {
			canvasContext.drawImage(drawMove2, this.posX, this.posY, canvas.width * .08, canvas.height * .12)
		}
	}
	this.gotHit = function(left, up, right, down, move1, move2, projectile, disjontID, ID)  {
		if(player1Clones.includes(this)) {
			this.clonesHit(left, up, right, down, move1, move2, projectile, disjontID, player2Clones, ID)
		}
		if(player2Clones.includes(this)) {
			this.clonesHit(left, up, right, down, move1, move2, projectile, disjontID, player1Clones, ID)
		}
	}
	this.clonesHit = function(left, up, right, down, move1, move2, projectile, disjontID, play, ID) {
		
		for(var i = 0; i < play.length; i++) {
			
			if(move1) {
				this.attackBox = { x: left+canvas.width*.02, y: up, width: right, height: down }
				if (this.attackBox.x - this.attackBox.width <= play[i].hitBox.x + play[i].hitBox.width &&
					this.attackBox.x >= play[i].hitBox.x &&
					this.attackBox.y - this.attackBox.height <= play[i].hitBox.y + play[i].hitBox.height &&
					this.attackBox.y >= play[i].hitBox.y) {
					play[i].hit = true
					play[i].hitTimer = true
					play[i].hitTimerOnce = true
					play[i].hitSwitch.fw = true
					play[i].hiterID = ID
					play[i].kb.forward = true
					if(thisH.includes(play[i]) == false) {
						thisH.push(play[i])
					}
				} else {
					play[i].hitSwitch.fw = false
				}
				
			}	
			for(var a = 0; a < this.projectPos.length && projectile && this.projectPos[a] == 1; a += 6) {
				if(this.projectPos[a+3] == disjontID) {
				   this.attackBox = {x: left[a+1], y: up[a+2], width: right, height: down}
					if(this.attackBox.x+this.attackBox.width >= play[i].hitBox.x &&
					   this.attackBox.x <= play[i].hitBox.x+play[i].hitBox.width &&
					   this.attackBox.y+this.attackBox.height <= play[i].hitBox.y+play[i].hitBox.height &&
						this.attackBox.y >= play[i].hitBox.y) {
					   play[i].hit = true
						play[i].hitTimer = true
						play[i].hitTimerOnce = true
						play[i].hitSwitch.fw = true
						play[i].hiterID = ID
					   play[i].kb.forward = true
					   if(thisH.includes(play[i]) == false)  {
					   		thisH.push(play[i])
					   }
					   
					   this.projectPos.splice(a+4, 1, false)
					} else {
						play[i].hitSwitch.fw = false
					}
				}
			}	
			
			if(move2) {
				this.attackBox = { x: left - canvas.width * .02, y: up, width: right, height: down}
				if(this.attackBox.x-this.attackBox.width <= play[i].hitBox.x+play[i].hitBox.width &&
				   this.attackBox.x >= play[i].hitBox.x && 
				   this.attackBox.y-this.attackBox.height <= play[i].hitBox.y+play[i].hitBox.height &&
				   this.attackBox.y >= play[i].hitBox.y) {
				   play[i].hit = true
					play[i].hitTimer = true
					play[i].hitTimerOnce = true
					play[i].hitSwitch.bw = true
					play[i].hiterID = ID
				   play[i].kb.backward = true
				   if(thisH.includes(play[i]) == false) {
				 	  thisH.push(play[i])
				   }
				} else {
					play[i].hitSwitch.bw = false
				}
			}
			for(var a = 0; a < this.projectPos.length && projectile && this.projectPos[a] == 2; a += 6) {
				if(this.projectPos[a+3] == disjontID) {
				   this.attackBox = {x: left[a+1], y: up[a+2], width: right, height: down}
				   if(this.attackBox.x-this.attackBox.width <= play[i].hitBox.x+play[i].hitBox.width &&
					   this.attackBox.x >= play[i].hitBox.x && 
					   this.attackBox.y-this.attackBox.height <= play[i].hitBox.y+play[i].hitBox.height &&
					   this.attackBox.y >= play[i].hitBox.y) {
				   	   play[i].hit = true
					   play[i].hitTimer = true
					   play[i].hitTimerOnce = true
					   play[i].hitSwitch.bw = true
					   play[i].hiterID = ID
					   play[i].kb.backward = true
					   this.projectPos.splice(a+4, 1, false)
					   if(thisH.includes(play[i]) == false) { 
					   		thisH.push(play[i])
					   }
					} else {
						play[i].hitSwitch.bw = false
					}
				}
			}	 
			if(play[i].hit && player2Clones.includes(this)) {
				play[i].HitSpark1 = true
			}
			if(play[i].hit && player1Clones.includes(this)) {
				play[i].HitSpark2 = true
			}
		}
	}
	this.damage = function (damaged, projectile) {
		if(this.hit && this.dmNoRepeat) {
			if(this.down || this.downBw) {
				damaged = damaged/2
			}
			
			hitSound.play()
			this.HP += damaged
			if (!projectile) {
				this.dmNoRepeat = false
            }
			
		}
	}
	this.kb = {forward: false, backward: false, forwardStop: false, backwardStop: false}
	this.stunHit = function(stun, trips) {
		if(stun) {
			this.hitStun = true
			console.log(trips)
			if (trips && !this.down && this.change == 1) {
				this.trip = true
			} else {
				this.trip = false
            }	
			if (trips && !this.downBw && this.change == 2) {
				this.tripBw = true
			} else {
				this.tripBw = false
            }
			if(!this.hit) {
				this.hitTimer = false
			}
		} else {
			this.hitStun = true// setimeout is broken for loops and knockback only happens when he is tripped once
		} 
	}

	this.knockback = function (forward, up, down) {
		if (this.down && this.hitSwitch.bw || this.downBw && this.hitSwitch.fw) {
			this.knockbackPt = { up: 0, forward: forward / 20.6 }
		}
		if (this.knockbackPt.forward <= 0 && this.kb.forwardStop && this.downBw ||
			this.knockbackPt.forward <= 0 && this.kb.backwardStop && this.down) {
			this.knockbackPt.up = 0
			this.knockbackPt.forward = 0
		}
		if (this.knockbackPt.up < up && this.kb.forwardStop && !this.downBw && !this.falls ||
			this.knockbackPt.up < up && this.kb.backwardStop && !this.down && !this.falls) {
			this.knockbackPt.up = 0
			this.knockbackPt.forward = 0
			if (this.change == 1) {
				this.trip = true
			}
			if (this.change == 2) {
				this.tripBw = true
			}
		}
		if (this.knockbackPt.up > 0) {
			if (down) {
				this.posY += 10 * ((1 + ((this.HP) / 100)) / 1.8) - (this.knockbackPt.up) * (canvas.height + canvas.width) / 3500
			} else {
				this.posY -= 10 * ((1 + ((this.HP) / 100))) + (this.knockbackPt.up) * (canvas.height + canvas.width) / 3500
			}
			this.knockbackPt.up--
			this.falls = true
		}
		if (this.kb.backward) {
			this.kb.backwardStop = true
			if (this.knockbackPt.forward > 0) {
				if (this.down) {
					this.posX -= 10 * ((1 + ((this.HP) / 100)) / 3.3) - (this.knockbackPt.forward / forward) * (canvas.height + canvas.width) / 3500
				} else {
					this.posX -= 10 * (1 + ((this.HP) / 100)) - (this.knockbackPt.forward / forward) * (canvas.height + canvas.width) / 3500
				}
				this.knockbackPt.forward--
			} else {
				this.kb.backward = false
			}
		}
		
		if (this.kb.forward) {
			this.kb.forwardStop = true
			
			if (this.knockbackPt.forward > 0) {
				if (this.downBw) {
					this.posX += 10 * ((1 + ((this.HP) / 100)) / 3.3) - (this.knockbackPt.forward / forward) * (canvas.height + canvas.width) / 3500
				} else {
					this.posX += 10 * (1 + (this.HP / 100)) - (this.knockbackPt.forward) * (canvas.height + canvas.width) / 3500
				}

				this.knockbackPt.forward--
			} else {
				this.kb.forward = false
			}
		}
    }

	this.projectNoRepeat = true
	this.move = {fw: false, bw: false}
	 
	this.specialSettings = function(move1, move2, upM, downM, forwardM, projectile, disjontID, addon1, addon2) {
		if (projectile) {
			console.log(move1 + "," + this.projectileNoRepeat)
			if (move1 && this.projectNoRepeat || move2 && this.projectNoRepeat) {
				
				if(move1) {
					this.projectPos.push(1)
					this.projectPos.push(this.posX+canvas.width*.06)
				}
				if(move2) {
					this.projectPos.push(2)
					this.projectPos.push(this.posX - canvas.width * .02)
				}
				this.projectPos.push(this.posY + canvas.height * .06)
				this.projectPos.push(disjontID)
				this.projectPos.push(true)
				this.projectPos.push(false)
				this.projectNoRepeat = false	
			}
		
			for(var i = 0; i < this.projectPos.length && this.once; i += 6) {
				if(this.projectPos[i+3] == disjontID) {
					if(this.projectPos[i+4]) {
						if(this.projectPos[i] == 1) {
							this.projectPos[i+1] += forwardM	
						}
						if(this.projectPos[i] == 2) {
							this.projectPos[i+1] -= forwardM
						}
						this.projectPos[i+2] -= upM
						this.projectPos[i+2] += downM
						
					} else {
						this.projectPos.splice(i+5, 1, true)
					}
					if(this.projectPos[i+5] || this.projectPos[i+1] > 1900 || this.projectPos[i+1] < -100 ||
					   this.projectPos[i+2] < -200 || this.projectPos[i+2] > 910) {	
						this.projectPos.splice(i, 6)
					}
					if(this.projectPos[i] == 1) {
						canvasContext.drawImage(addon1, this.projectPos[i+1], this.projectPos[i+2], canvas.width*.02, canvas.height*.03)
					}
					if(this.projectPos[i] == 2) {
						canvasContext.drawImage(addon2, this.projectPos[i + 1], this.projectPos[i + 2], canvas.width * .02, canvas.height * .03)
					}
				}
			}
			
		} else if(move1 && this.once || move2 && this.once) {
			this.posY += downM * (canvas.width+canvas.height)/3500
			this.posY -= upM * (canvas.width + canvas.height) / 3500
			if(move1) {
				this.posX += forwardM * (canvas.width + canvas.height) / 3500
			}
			if(move2) {
				this.posX -= forwardM * (canvas.width + canvas.height) / 3500
			}
		}
	}
}
var inputs = [71, 65, 83, 68, 82, 222, 37, 40, 39, 76, 70, 67, 86, 66, 87, 186, 188, 190, 191, 38]
var buttons = []
function keyPressed(evt) {
	if(evt.keyCode && stateOfPlay == 0) {
 		screenLoaded = false;
 		stateOfPlay = 1;
	}
	buttons[evt.keyCode || evt.which] = true
}
function keyUp(evt) {
	if (evt.keyCode && stateOfPlay == 3 && (p2Wins || p1Wins)) {
		stateOfPlay = 1;
		p1Wins = false;
		p2Wins = false;
		p1Lives = 5;
		p2Lives = 5;
	}
	buttons[evt.keyCode || evt.which] = false
}


