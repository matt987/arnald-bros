$(document).ready(function() {

	var canvas = $("#micanvas");
	var context = canvas.get(0).getContext("2d");

	var canvasWidth = canvas.width()+4; 
	var canvasHeight = canvas.height()+4;
	
	

	var playAnimation = true;

	var startButton = $("#startAnimation");
	var stopButton = $("#stopAnimation");
	
	startButton.hide();
	startButton.click(function() {
		$(this).hide();
		stopButton.show();
		playAnimation = true;
		animate();
	});

	stopButton.click(function() { 
		$(this).hide();
		startButton.show(); 
		playAnimation = false;
	});

	var x = y = 0;

	function aleatorio(){
   		numPosibilidades = 350 - 150 + 1;
   		aleat = Math.random() * numPosibilidades;
   		aleat = Math.floor(aleat);
   		return parseInt(150) + aleat;
	}

	var Shape = function(x, y, width, height)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	};

	var shapes = new Array();

	function draw() {
		// context.clearRect(0, 0, canvasWidth, canvasHeight);

		shapes.push(new Shape(0, aleatorio(), 30, 30));
		animate();
	}
	
	function animate() {
		//limpiar
		context.clearRect(0, 0, canvasWidth, canvasHeight);

		//controlar si llega al final del canvas
		for (var i = 0; i < shapes.length; i++)
		{
			var tmpShape = shapes[0];
			context.fillRect(tmpShape.x, tmpShape.y, tmpShape.width, tmpShape.height);
			//velocidad
			tmpShape.x -= 20;
			//llega al final, limpiar y crear nuevo obstaculo
			if (tmpShape.x + tmpShape.width <= 0)
			{
				
				tmpShape.x = canvasWidth + 100;
				tmpShape.y = aleatorio();
			};
		};
		// animar obstaculo
		if (playAnimation) {
			setTimeout(animate, 39);
		};
	};
	//dibujar primer obstaculo
	draw();
});