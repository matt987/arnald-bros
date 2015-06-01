function Fondo(){
  Figura.call(this, 'Fondo');
  this.dibujar = function() {};
};

Fondo.prototype = Object.create(Figura.prototype);    
Fondo.prototype.constructor = Fondo;