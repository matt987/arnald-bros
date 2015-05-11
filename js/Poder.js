function Poder(){
  Figura.call(this, 'Poder');
  this.dibujar = function() {};
};

Poder.prototype = Object.create(Figura.prototype);    
Poder.prototype.constructor = Poder;