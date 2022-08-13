
canvas = document.getElementById("mycanvas");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		aplhabetkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla do alfabeto";
		console.log("alphabet key")
	}
	if((keyPressed >=48 && keyPressed<=57)){
		numberkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla de numero";
		console.log("number key")
	}
	if((keyPressed >=37 && keyPressed<=40)){
		arrowkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional";
		console.log("arrow key")
	}
	if((keyPressed == 17)|| (keyPressed == 18)|| (keyPressed == 27)){
		specialkey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla especial";
		console.log("special key")
	}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="Você pressionou o símbolo ou outra tecla";
	}
}

function aplhabetkey()
{
	img_image="otherkey.png";
	add();
}
function numberkey()
{
	img_image="número.png";
	add();
}
function arrowkey()
{
	img_image="direcional.png";
	add();
}
function specialkey()
{
	img_image="especial.png";
	add();	
}
function otherkey()
{
	img_image="outras.png";
	add();
}
	
