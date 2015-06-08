function aleatorio(inferior,superior){
numPosibilidades = superior - inferior
aleat = Math.random() * numPosibilidades
aleat = Math.floor(aleat)
return parseInt(inferior) + aleat
}
function colorAleatorio(){
   return "rgb(" + aleatorio(0,255) + "," + aleatorio(0,255) + "," + aleatorio(0,255) + ")";
}

function img_canvas() {
  //recojemos el canvas poniendo la id del canvas html5 para relacionarlo
  var canvas = document.getElementById("micanvas");
  //Cojemos la 2D para dibujar en él
 var ctx = canvas.getContext("2d");
  //creamos la nueva imagen 
  var img = new Image(50,50);
  //le decimos la ruta de la imagen, en este caso html5.jpg
 img.src = "images/perro.png";
 //pasamos la imagen al 2d del canvas y se dibujará
 //en 0 0 podemos poner las cordenadas de donde empezar a dibujar la imagen
ctx.drawImage(img, 10, 300);
};

function Punto(x, y){
	this.x = x;
	this.y = y;
}

function Linea(p1, p2){
	this.punto1 = p1;
	this.punto2 = p2;
	this.dibujar = function(ctx){
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.closePath();
		ctx.stroke();
	}
}

function Circulo(centro, radio){
	this.centro = centro;
	this.radio = radio;
	this.dibujar = function(contexto){
		contexto.beginPath();
		contexto.arc(this.centro.x, this.centro.y, this.radio, 0, Math.PI*2, true);
		contexto.closePath();
		contexto.stroke();
	}
}
function CirculoRelleno(centro, radio){
	this.centro = centro;
	this.radio = radio;
	this.dibujar = function(contexto){
		contexto.beginPath();
		contexto.arc(this.centro.x, this.centro.y, this.radio, 0, Math.PI*2, true);
		contexto.closePath();
		contexto.fill();
	}
}

	//luna
function Estrella(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.dibujar = function(ctx){
		ctx.fillStyle = "rgb(250, 250, 150)";
		ctx.beginPath();
		ctx.arc(this.x + 14.5/18 * this.w, this.y + 6/18 * this.h, 4/12 * this.w, 0,Math.PI*2, true);
		ctx.closePath(); // Close the path
		ctx.fill(); //

		//ctx.fillStyle = "rgb(100, 90, 100)";
		//ctx.save();
}}
function Montanha(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.dibujar = function(ctx){
		ctx.fillStyle = "rgb(100, 90, 100)";
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo(0, 300);
		ctx.quadraticCurveTo(200, 100, 300, 300);
		ctx.moveTo(250, 300);
		ctx.quadraticCurveTo(400, 100, 500, 300);
		ctx.fill();

}}
function Dibujo(pos, ancho, alto){
	this.p = pos;
	this.a = ancho;
	this.h = alto;

	this.dibujar = function(ctx){

			var image = document.getElementById("myperro");
		//ctx.drawImage(image, 10, 10, 128, 128);
		//dibujo del fondo
				ctx.fillStyle = "rgb(0, 255, 255)";
		ctx.fillRect(this.p.x + 0/28*this.a, 
					   this.p.y + 0/40*this.h, 
					   32/28*this.a, 
					   40/40*this.h);


		//dibujo del sol
		ctx.fillStyle = "rgb(255, 242, 0)"
		ctx.shadowColor = "rgb(255, 200, 0)"; // Red
		ctx.shadowBlur = 100;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;

		var redondo1 = new CirculoRelleno(
						new Punto(this.p.x+2/28*this.a,
								  this.p.y+2/40*this.h),
						3/28*this.a);
		redondo1.dibujar(ctx);

		ctx.shadowColor = "rgb(0, 0, 0)"; // Arajanjado
		ctx.shadowBlur = 0;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;

		

		//montañas
		ctx.fillStyle = "rgb(0, 232, 58)";
		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6/28*this.a,
								  this.p.y+57/40*this.h),
						15/28*this.a);
		redondo2.dibujar(ctx);

		ctx.fillStyle = "rgb(0, 232, 58)";
		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+23/28*this.a,
								  this.p.y+62/40*this.h),
						15/28*this.a);
		redondo2.dibujar(ctx);

		

	}
}

function DibujoArbol(pos, ancho, alto){
	this.p = pos;
	this.a = ancho;
	this.h = alto;

	this.dibujar = function(ctx){

//dibujar arbol
		//tronco del arbor

		ctx.fillStyle = "rgb(128, 64, 0)";
		ctx.fillRect(this.p.x + 5.5/28*this.a, 
					   this.p.y + 28/40*this.h, 
					   3/28*this.a, 
					   12/40*this.h);
		//parte de arriba
		ctx.fillStyle = "rgb(63, 169, 5)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+5/28*this.a,
								  this.p.y+23/40*this.h),
						3/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+9/28*this.a,
								  this.p.y+23/40*this.h),
						3/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7/28*this.a,
								  this.p.y+20/40*this.h),
						2.5/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6/28*this.a,
								  this.p.y+27/40*this.h),
						1/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+8/28*this.a,
								  this.p.y+27/40*this.h),
						1/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7/28*this.a,
								  this.p.y+27/40*this.h),
						1/28*this.a);
		redondo2.dibujar(ctx);



		//dibujar flor

		

		ctx.fillStyle = "rgb(236, 0, 0)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+8.4/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);

		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7.5/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+8/28*this.a,
								  this.p.y+40.6/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+8.2/28*this.a,
								  this.p.y+39.4/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7.64/28*this.a,
								  this.p.y+39.44/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);

		
		ctx.fillStyle = "rgb(255, 131, 6)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+8/28*this.a,
								  this.p.y+40/40*this.h),
						0.3/28*this.a);
		redondo2.dibujar(ctx);
		
		




		
		//dibujar flor

		

		ctx.fillStyle = "rgb(255, 0, 255)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7.4/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6.5/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7/28*this.a,
								  this.p.y+40.6/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7.2/28*this.a,
								  this.p.y+39.4/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6.64/28*this.a,
								  this.p.y+39.44/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);

		
		ctx.fillStyle = "rgb(255, 131, 6)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+7/28*this.a,
								  this.p.y+40/40*this.h),
						0.3/28*this.a);
		redondo2.dibujar(ctx);
		


		//dibujar flor

		

		ctx.fillStyle = "rgb(255, 255, 6)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6.4/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+5.5/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6/28*this.a,
								  this.p.y+40.6/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6.2/28*this.a,
								  this.p.y+39.4/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+5.64/28*this.a,
								  this.p.y+39.44/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);

		
		ctx.fillStyle = "rgb(255, 131, 6)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6/28*this.a,
								  this.p.y+40/40*this.h),
						0.3/28*this.a);
		redondo2.dibujar(ctx);



		
	}
}

function DibujoFlor(pos, ancho, alto){
	this.p = pos;
	this.a = ancho;
	this.h = alto;

	this.dibujar = function(ctx){

		//dibujar flor

		

		ctx.fillStyle = "rgb(128, 0, 128)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6.4/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+5.5/28*this.a,
								  this.p.y+40.2/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6/28*this.a,
								  this.p.y+40.6/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6.2/28*this.a,
								  this.p.y+39.4/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);


		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+5.64/28*this.a,
								  this.p.y+39.44/40*this.h),
						0.4/28*this.a);
		redondo2.dibujar(ctx);

		
		ctx.fillStyle = "rgb(236, 0, 0)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+6/28*this.a,
								  this.p.y+40/40*this.h),
						0.3/28*this.a);
		redondo2.dibujar(ctx);



		
	}
}


function DibujoNuve1(pos, ancho, alto){
	this.p = pos;
	this.a = ancho;
	this.h = alto;

	this.dibujar = function(ctx){
		ctx.fillStyle = "rgb(0, 200, 255)";

//dibujar nubes 1
		ctx.fillStyle = "rgb(0, 200, 255)";
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+8/28*this.a,
								  this.p.y+8/40*this.h),
						2/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo3 = new CirculoRelleno(
						new Punto(this.p.x+11/28*this.a,
								  this.p.y+8/40*this.h),
						3/28*this.a);
		redondo3.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo4 = new CirculoRelleno(
						new Punto(this.p.x+14/28*this.a,
								  this.p.y+8/40*this.h),
						2/28*this.a);
		redondo4.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+16/28*this.a,
								  this.p.y+8/40*this.h),
						1/28*this.a);
		redondo2.dibujar(ctx);

		 }

		}


function DibujoNuve2(pos, ancho, alto){
	this.p = pos;
	this.a = ancho;
	this.h = alto;

	this.dibujar = function(ctx){
			

		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+20/28*this.a,
								  this.p.y+6/40*this.h),
						2/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+23/28*this.a,
								  this.p.y+6/40*this.h),
						3/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+26/28*this.a,
								  this.p.y+6/40*this.h),
						2/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+22/28*this.a,
								  this.p.y+8/40*this.h),
						2/28*this.a);
		redondo2.dibujar(ctx);

		ctx.globalAlpha = 1.0;
		var redondo2 = new CirculoRelleno(
						new Punto(this.p.x+24/28*this.a,
								  this.p.y+8/40*this.h),
						2/28*this.a);
		redondo2.dibujar(ctx);

}
}



