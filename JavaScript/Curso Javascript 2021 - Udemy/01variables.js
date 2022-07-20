/* 
var: no se utiliza mucho por buena práctica, ya que permite
sobreescribir una variables, lo cual no es recomendado.

let: nos permite declararla solamente y luego inicializarla o
hacer ambas cosas a la vez, además nos deja sobreescribir
la variable.

const: es el ideal para declaración de variables, solamente 
que obligatoriamente se tiene que declarar e inicializar a 
la vez, además no nos deja sobreescribir la variable.
*/

let otramascota = "gato";
let mascota;
mascota="perro"; 
mascota="tortuga"
console.log(mascota);

const fruta="banano";
console.log(fruta);