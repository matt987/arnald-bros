function Personaje(){
  Figura.call(this, 'Personaje');
  this.dibujar = function() {};
  this.colisionar = function(figura) {};
  this.saltar = function() {};
  this.agacharse = function() {};
};

Personaje.prototype = Object.create(Figura.prototype);    
Personaje.prototype.constructor = Personaje;