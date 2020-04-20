/* Para que responda adecuadamente la consola, comentar todos los ejercicios, menos el que se quiere ver. Tampoco comentar las variables */

const myText ="En el inframundo, Sísifo fue obligado a cumplir su castigo, que consistía en empujar una piedra enorme cuesta arriba por una ladera empinada, pero antes de que alcanzase la cima de la colina la piedra siempre rodaba hacia abajo, y Sísifo tenía que empezar de nuevo desde el principio, una y otra vez.";

const myText10 = "gratidad";

let answer ="";

// 01

answer += (myText.indexOf(" ") >= 0) ? "En el texto hay más de una palabra" : "En el texto hay una palabra"; 
console.log(answer);

// 02

myText.length > 10 ? console.log("El texto tiene más de 10 letras") : console.log("El texto tiene menos de 10 letras");


// 03

(myText.length % 2 == 0) ? console.log("la cantidad de letras es par") : console.log("La cantidad de letras es impar"); 

//04

answer += myText.slice(0,4);
console.log(answer);

//05

if (myText === myText.toLowerCase()){
    console.log("Mi texto está en minúscula");
} else {
  if (myText === myText.toUpperCase()){
      console.log("Mi texto está en mayúscula");
  } else{
    console.log("El texto contiene letras mayúsculas y minúsculas");
  }
} 

//06

console.log(myText.slice(myText.lastIndexOf(" ") + 1 , myText.length - 1)); 
// se le suma 1 para que no imprima el espacio, y se le resta uno para que no se imprima el punto.

//07

if (myText.charAt(myText.length / 2) === " ") {
    console.log(myText.charAt((myText.length/2) -1));
} else{
  console.log(myText.charAt(myText.length / 2));
}

//08

if ((myText.charAt(myText.length / 2) === "a") || 
    (myText.charAt(myText.length / 2) === "u") || 
    (myText.charAt(myText.length / 2) === "i") || 
    (myText.charAt(myText.length / 2) === "o") || 
    (myText.charAt(myText.length / 2) === "e")) {
  console.log("La letra del medio es vocal");
} else{
  console.log("la letra del medio no es vocal");
}

//09

answer += (myText.indexOf("?")>=0) ? console.log("Hay al menos una pregunta en el texto") : console.log("No hay preguntas en el texto");
console.log(answer);

//10

myNewText = myText10.replace("dad","tud");
console.log(myNewText);

//11

  if (myText.indexOf(" ") < 0){
      console.log(myText.toUpperCase());
  } else {
    if ((myText.indexOf(" ")) === (myText.lastIndexOf(" "))) {
        let secondFirstL = myText.indexOf(" ")+ 1;
        console.log((myText.slice(0 , myText.indexOf(" "))).toLowerCase() + 
                    (myText.charAt(secondFirstL).toUpperCase()) + 
                    (myText.slice(secondFirstL + 1 , myText.length)));   
    } else{
      console.log(myText.slice(myText.lastIndexOf(" ") + 1 , myText.length).toLowerCase());
    }
  }