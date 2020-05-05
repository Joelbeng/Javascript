const validatebtn = document.getElementById('validate');
const formatebtn = document.getElementById('formate');
const nameInput = document.getElementById('name');
const nameOutput = document.querySelector('p');
let flag = false;
/**
 * Evalúa que exista una única coma, y ejecuta la función checkWords() si se cumple. 
 @returns {boolean}
 */
function getValidation() {
    if ((nameInput.value.indexOf(",") >= 0) &&
        (nameInput.value.indexOf(",") === nameInput.value.lastIndexOf(","))) {
        splitWords(function (name,lastName) {
            if (name.length >= 2 && lastName.length >= 3) {
                flag = true;
            } else {
                flag ;
            }
        });
    } else {
        flag ;
    }
}

/**
 * Evalúa que haya al menos dos caracteres a la izquierda y 3 a la derecha.
 * Esta función es ejecutada por getValidation().
 @returns {boolean}
 */

function splitWords(callback){
    let name = nameInput.value.slice(0, nameInput.value.indexOf(","));
    let lastName = nameInput.value.slice(nameInput.value.indexOf(",") + 1, nameInput.value.length);
    callback(name,lastName);
}

// Al hacer click en el botón "Validar" cambia el color de los bordes del input, dependiendo de la validación.

validatebtn.addEventListener('click', () => { 

    if (flag=== true) {
        nameInput.style.border = "2px solid green";
    } else {
        nameInput.style.border = "2px solid red";
    }
});

//Al hacer click en "Formatear" se muestra el nombre y el apellido (invirtiendo el orden del valor del input) en un <p> si los datos son válidos.

formatebtn.addEventListener('click', () => {
    let validate = getValidation();

    if (validate) {
        let lastName = nameInput.value.slice(0, nameInput.value.indexOf(","));
        let name = nameInput.value.slice(nameInput.value.indexOf(",") + 1, nameInput.value.length);

        nameOutput.textContent = name + " " + lastName;
    } else {
        nameOutput.textContent = "Dato no válido";
    }
});




