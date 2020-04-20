//Averiguar si hay unr menor
const edades = [52,17,68,15,22];
let total = 0;
let menores= 0;

for (let i = 0 ; i < edades.length ; i++){
  if(edades[i] < 18){
    console.log("Hay un menor");
    break; // si no cumple la condición if, termina el bucle FOR, deja de iterar.
  }
}

for (let i = 0 ; i < edades.length ; i++){
  if(edades[i] < 18){
    menores++;
    continue; // si no cumple la condición if, no ejecuta lo que resta de la iteración, y ejecuta el siguiente i (i++).
  }
  if (edades[i] > 65){
    total += 0;
  } else if (edades[i] > 40){
    total +=150;
  }  else if (edades[i] <=40){
    total += 250;
  }
}
console.log(`El total a pagar es ${total} y hay ${menores} menores que no pueden entrar`);

