$(document).ready(function() {

	var canvas = $("#micanvas");
	var context = canvas.get(0).getContext("2d");

	var canvasWidth = canvas.width(); 
	var canvasHeight = canvas.height();

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

	var Shape = function(x, y, width, height)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	};

	var shapes = new Array();

	function draw(){
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		shapes.push(new Shape(0, Math.random()*550, 30, 30));
		animate();
	}
	
	function animate() {
		//limpiar
		context.clearRect(0, 0, canvasWidth, canvasHeight);

		//controlar si llega al final del canvas
		for (var i = 0; i < shapes.length; i++)
		{
			var tmpShape = shapes[i];
			context.fillRect(tmpShape.x, tmpShape.y, tmpShape.width, tmpShape.height);

			//velocidad
			tmpShape.x += 10;
			//llega al final, limpiar y crear nuevo obstaculo
			if (tmpShape.x + tmpShape.width > canvasWidth + 100)
			{
				console.log('crear nuevo obstaculo');
				tmpShape.x = 0;
				tmpShape.y = Math.random()*200;
			};
		};
		// animar obstaculo
		if (playAnimation) {
			setTimeout(animate, 20);
		};
	};
	
	//dibujar primer obstaculo
	draw();
});