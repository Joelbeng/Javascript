
/**Ejercicio 1
 * Esta función obtiene todos los números primos desde 1 hasta el número ingresado como argumento.
 * @param {number}  
 */
function getNumerosPrimos(num) {
  // se crea un array para almacenar los números primos.
  const primos = []; 
  if (num <= 0){
    return false;
  } else {
      for (let i = 1; i <= num; i++) {
        if ((i === 2) || (i === 3) || (i ===5)) {
          primos.push(i);
        } else if ((i%2 !== 0) && (i%3 !== 0) && (i%5 !== 0) && (i%1 === 0)){
            primos.push(i);
          } 
      }
    }
  return 'Los números son primos';
}

getNumerosPrimos(75);



