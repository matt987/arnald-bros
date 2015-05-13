function Nivel(elementos,fondo, nombre, distancia_actual, x, y, w, h){
  this.elementos = elementos;
  this.fondo = fondo;
  this.nombre = nombre;
  this.distancia_actual = distancia_actual
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.dibujar = function(context){
      context.strokeRect(this.x, this.y, this.w, this.h);
      var x_actual= 0;
      for (var i=0; i < elementos.length ; i++) {
        var elemento = elementos[i];
        elemento.dibujar(context, this.x + x_actual);
        x_actual += elemento.w+1;

      };

      //dividir el ancho en 500 partes

      //dividir la altura en 10 partes iguales
  }
};
