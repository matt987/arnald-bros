function Nivel(elementos,fondo, nombre, distancia_actual,){
  this.elementos = elementos;
  this.fondo = fondo;
  this.nombre = nombre;
  this.distancia_actual = distancia_actual
  this.dibujar = function() {
    this.fondo.dibujar;
    for (var i = elementos.length - 1; i >= 0; i--) {
      elementos[i].dibujar();
    };
  };
};
