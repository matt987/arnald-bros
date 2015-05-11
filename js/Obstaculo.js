function Obstaculo(tipo){
  Figura.call(this, 'Obstaculo');
  this.tipo = tipo;
  this.dibujar = function() {};
};

Obstaculo.prototype = Object.create(Figura.prototype);    
Obstaculo.prototype.constructor = Obstaculo;