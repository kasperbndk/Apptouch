var canvas;
var ctx;

function opdaterCanvas(){
	var vaelgselv = document.getElementById("color").value;
	//den variable der gør man selv kan vælge farve på sin strokeSyle
	var x = event.touches[0].pageX;
	var y = event.touches[0].pageY;
	//variabler får x og y koordinater
	ctx.beginPath();
	// begynder en linje
	ctx.lineTo(x,y);
	//gør så man rykke linjen, hvis det var tal istedet for x,y ville der være et bestemt punkt man tegne ud fra, men ikke frit.
	ctx.lineWidth = document.getElementById("bredde").value
	//javascripten der gør man vælge sin egenfarve
	ctx.strokeStyle = vaelgselv;
	//passer til linje 5
	ctx.lineCap = 'round';
	// bestemmer hvordan linjen ser ud, i dette tilfælde er den rund
	ctx.stroke();

}

function init(){
	var touchzone = document.getElementById("mycanvas");
	// det her hvor man laver en "zone" hvor kan bruge touch
	touchzone.addEventListener("touchmove", opdaterCanvas, false);
	//starter "eventet" opdaterCanvas som er den linje man tegner når man bevæger sin finger/cursor på skærmen
	touchzone.addEventListener("touchend", end, false);
	//slutter "eventet" når man stopper med at rykke sin finger/cursor
	ctx = touchzone.getContext("2d");
	mycanvas.width = mycanvas.width;
	ctx.fillStyle="white";
	// baggrunden for touchzonen
	ctx.fillRect(2, 2, mycanvas.width, mycanvas.height);
	// laver den firkant hvor man bruge touch i
}

function end(e){
	e.preventDefault();
}