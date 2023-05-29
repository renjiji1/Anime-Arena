
var fwNormal = document.createElement('img');
var fwNormalBw = document.createElement('img');
var upNormal = document.createElement('img');
var upNormalBw = document.createElement('img');
var downNormal = document.createElement('img');
var downNormalBw = document.createElement('img');
var trip = document.createElement('img');
var tripBw = document.createElement('img');
var fwAir = document.createElement('img');
var fwAirBw = document.createElement('img');
var downAir = document.createElement('img');
var downAirBw = document.createElement('img');
var backAir = document.createElement('img');
var backAirBw = document.createElement('img');
var upAir = document.createElement('img'); 
var upAirBw = document.createElement('img');
var normal = document.createElement('img');
var normalBw = document.createElement('img');
var shiriken = document.createElement('img');
var shiriken2 = document.createElement('img');
var normalAir = document.createElement('img');
var normalAirBw = document.createElement('img');
var cuni = document.createElement('img');
var cuniBw = document.createElement('img');
var cloneJitsu = document.createElement('img');
var cloneJitsuBw = document.createElement('img');
var cloneCloud = document.createElement('img');
var rasenganCharge = document.createElement('img');
var rasenganChargeBw = document.createElement('img');
var rasenganCharger = document.createElement('img');
var rasenganChargerBw = document.createElement('img');
var rasenganCharger2 = document.createElement('img');
var rasenganCharger2Bw = document.createElement('img');
var rasengan = document.createElement('img');
var rasenganBw = document.createElement('img');
var rasengan2 = document.createElement('img');
var rasengan2Bw = document.createElement('img');
var meditate = document.createElement('img');

function narutoFight() {
	loadFights()
}

function loadFights() {
	var imageList = [{pic: fwNormal, theFile: "neatralNormal1.png"},
					{pic: fwNormalBw, theFile: "neatralNormal1Bw.png"},
					{pic: upNormal, theFile: "normalHighKick.png"},
					{pic: upNormalBw, theFile: "normalHighKickBw.png"},
					{pic: downNormal, theFile: "downNormal.png"},
					{pic: downNormalBw, theFile: "downNormalBw.png"},
					{pic: trip, theFile: "narutoTrip.png"},
					{pic: tripBw, theFile: "narutoTripBw.png"},
					{pic: fwAir, theFile: "fwAir.png"},
					{pic: fwAirBw, theFile: "fwAirBw.png"},
					{pic: downAir, theFile: "downAir.png"},
					{pic: downAirBw, theFile: "downAirBw.png"},
					{pic: backAir, theFile: "backAir.png"},
					{pic: backAirBw, theFile: "backAirBw.png"},
					{pic: upAir, theFile: "upAir.png"},
					{pic: upAirBw, theFile: "upAirBw.png"},
					{pic: normal, theFile: "normal.png"},
					{pic: normalBw, theFile: "normalBw.png"},
					{pic: shiriken, theFile: "shiriken.png"},
					{pic: shiriken2, theFile: "shiriken2.png"},
					{pic: normalAir, theFile: "normalAir.png"},
					{pic: normalAirBw, theFile: "normalAirBw.png"},
					{pic: cuni, theFile: "cuni.png"},
					{pic: cuniBw, theFile: "cuniBw.png"},
					{pic: cloneJitsu, theFile: "cloneJitsu.png"},
					{pic: cloneJitsuBw, theFile: "cloneJitsuBw.png"},
					{pic: cloneCloud, theFile: "cloneCloud.png"},
					{pic: rasenganCharge, theFile: "rasenganCharge.png"},
					{pic: rasenganChargeBw, theFile: "rasenganChargeBw.png"},
					{pic: rasenganCharger2, theFile: "rasenganCharger2.png"},
					{pic: rasenganCharger2Bw, theFile: "rasenganCharger2Bw.png"},
					{pic: rasenganCharger, theFile: "rasenganCharger.png"},
					{pic: rasenganChargerBw, theFile: "rasenganChargerBw.png"},
					{pic: rasengan, theFile: "rasengan.png"},
					{pic: rasenganBw, theFile: "rasenganBw.png"},
					{pic: rasengan2, theFile: "rasengan2.png"},
					{pic: rasengan2Bw, theFile: "rasengan2Bw.png" },
					{pic: meditate, theFile: "narutoMeditate.png" }	];
														
	for(var i=0;i<imageList.length;i++) {	
		beginLoadingPics(imageList[i].pic, imageList[i].theFile);
	}	
}

function beginLoadingFights(imgVar, fileName) {
	imgVar.onload = player1.normalNeatral()
	imgVar.onload = player2.normalNeatral();
	imgVar.src = "Images/"+fileName;
}
