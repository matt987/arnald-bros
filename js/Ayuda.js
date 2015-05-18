$(document).ready(function() {
	 var canvas;
            var ctx;
            var x = 284;
            var y = 130;
            var mx = 0;
            var my = 0;
            var WIDTH =0;
            var HEIGHT=0;
  
                        function circle(x,y,r) {
                          ctx.beginPath();
                          ctx.arc(x, y, r, 0, Math.PI*2, true);
                          ctx.fill();
                        }
                          
                        function clear() {
                          ctx.clearRect(0, 0, WIDTH, HEIGHT);
                        }
                          
                        function init() {
                          canvas = document.getElementById("myCanvas");
                          ctx = canvas.getContext("2d");
                          WIDTH = canvas.width;
                          HEIGHT = canvas.height;
                          window.onkeydown = keydownControl;
                          return setInterval(draw, 1);
                        }
                          
                        function draw() {
                          clear();
                          circle(x, y, 20);
                          
                          if (x + mx > WIDTH || x + mx < 0)
                                mx = -mx;
                          if (y + my > HEIGHT || y + my < 0)
                                my = -my;
                          
                          x += mx;
                          y += my;
                          
                        }
                          
                        function keydownControl(e) {
                                if(e.keyCode==37) {
                                        mx = -2;
                                        my = 0;
                                } else
                                if (e.keyCode==38) {
                                        mx = 0;
                                        my = -2;
                                } else if
                                (e.keyCode==39) {
                                        mx = 2;
                                        my = 0;
                                } else
                                if (e.keyCode==40) {
                                        mx = 0;
                                        my = 2;
                                }
                        }
                          
                        init();
});
function Ayuda(){
  this.pintar = function() {};
};