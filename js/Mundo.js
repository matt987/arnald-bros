function Mundo(ayuda, niveles, personaje, nivel_actual){
  this.ayuda = ayuda;
  this.niveles = niveles;
  this.personaje = personaje;
  this.nivel_actual = nivel_actual;
  this.iniciar = function() {};
  this.reiniciar = function() { this.iniciar()};
  };