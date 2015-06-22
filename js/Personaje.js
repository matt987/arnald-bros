   $(document).ready(function(){


        var canvas = $("#micanvas");
        var context = canvas.get(0).getContext("2d");
        var canvasWidth = canvas.width();
        var canvasHeight = canvas.height();
         imagen_actual = 0;
         y_actual = 300;
        // function comenzar() {
        // 	setTimeout(comenzar, 100);
        // };
        comenzar();        

    })
        //Imagenes.
        var img0 = new Image;
        img0.src = "images/run1.png";
        var img2 = new Image;
        img2.src = "images/run2.png";
        var img3 = new Image;
        img3.src = "images/run3.png";
        var img4 = new Image;
        img4.src = "images/run4.png";
        var img5 = new Image;
        img5.src = "images/run5.png";
        var img6 = new Image;
        img6.src = "images/run6.png";
        var img7 = new Image;
        img7.src = "images/run7.png";
        var img8 = new Image;
        img8.src = "images/run8.png";
        var img9 = new Image;
        img9.src = "images/run9.png";

        var imagenes = [img0 , img2, img3, img4, img5, img6, img7, img8, img9] ;
        
        

        function comenzar(y){
            y_actual = y
            var fin = 0 ;
            micanvas = document.getElementById('micanvas');
            //micanvas.style.background='#666';
            ctx = micanvas.getContext('2d');
            
                console.log(imagen_actual);
            //Dibujo las imágenes en la nueva posición
            //for (var i = 0; i < imagenes.length; i++) {
                var imagen = imagenes[imagen_actual];
                //Borro todo lo que haya en nuestro micanvas
                ctx.clearRect(0,0,micanvas.width,micanvas.height);                
                ctx.drawImage(imagen, 100 + 0*imagen_actual, y_actual, 100, 100);
            //};
                if (imagen_actual >= 8) {
                    imagen_actual = 0;
                    if (y_actual == 100) {
                        y_actual = 300;
                    } else {
                        y_actual = 100;
                    }
                } else {
                    imagen_actual++;
                    y_actual = 300;
                }
                //$(document).keydown(function(e) {
                    // if (e.which == 38) {
                        // animarse(100);        
                    // } else {
                        animarse(300);
                    // }
                // })
                
   
            };

        function animarse(y) {
            setTimeout(comenzar, 40, y);
        }