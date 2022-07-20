//Ambito superglobal: tenemos acceso desde cualquier archivo

//Ambito global: tenemos acceso desde cualquier lado del archivo
let perro="Perla";
console.log("Variable global "+perro);

//Ambito local: tenemos acceso desde la función donde se declare
function saltar(){
  let gato="Bigotes";
}

//console.log("Llamando variable local de manera global "+gato)

//Ambito de bloque: tenemos acceso desde un bucle o un condicional
let nombre="Maria";
if(nombre=="Maria"){
  let apellido="Gonzales"
}
//console.log("Llamando variable de bloque de manera global "+apellido);
