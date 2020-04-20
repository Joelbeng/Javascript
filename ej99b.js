let myArray = [];

for (let i = 1; i < 201; i++) {
  if (i % 11 === 0) {
    myArray.push(i);
  }
}
console.log(myArray);

//

let numbersArray = [];

let str = myArray.join("");
let mystrArray = str.split("");

for (i = 0; i < mystrArray.length; i++) {
  let number;
  const element = mystrArray[i];
  number = parseInt(element, 10);
  numbersArray.push(number);
}

console.log(numbersArray);

//

let finalValue = 0;

for (i = 0; i < numbersArray.length;i++) {
  let number =numbersArray[i];
  finalValue += number * i;
}

console.log(finalValue);