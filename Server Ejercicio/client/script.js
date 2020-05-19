//Manipulación del DOM
const submitBtn = document.getElementById("submit");
const nameInput = document.getElementById("nameInput");
const container = document.getElementById("container");
const ageInput = document.getElementById("ageInput");
const caseCheck = document.getElementById("caseCheck");
const searchCheck = document.getElementById("searchCheck");

submitBtn.addEventListener('click', () => {

    const xhr = new XMLHttpRequest();
    // Ejecuto las funciones así que me retornan el valor del input actualizado. Guardo el retorno en variables.
    let searchName = getPerson();
    let minAge = getMinAge();
    let strictSearch = getSearchCheck();
    let caseVal = getCaseCheck();
    
    xhr.addEventListener("load", function(){
        if (this.status == 200) {
            
            //formateo el container por si tiene resultados anteriores
            container.innerHTML= "";

            //Una vez que el request fue exitoso, elimino el contenido de los inputs.
            nameInput.value = "";
            ageInput.value = "";
            
            //Convierto en un objeto el JSON que recibo del pedido AJAX.
            let personResults = JSON.parse(this.responseText);
            
            let year; //flag 
            const ul = document.createElement("ul");

            //recorro el array que contiene los objetos con nombre y edad de cada persona
            personResults.forEach( person => {
                const li = document.createElement("li");
                
                //varío el flag si la edad de la persona es mayor o no a 1
                person.age > 1 ? year =" años" : year =" año"
                li.textContent = person.name + ", " + person.age + year;
                
                ul.appendChild(li);
                container.appendChild(ul);
            });
        } else {
            showModal();
        }
    });

    xhr.open("GET", "/person?" + searchName + minAge + caseVal + strictSearch); 
    xhr.send();
});

/**
 @returns{string}
 *
 *Obtiene el valor del input donde ingreso el nombre, y se lo convierte en queryString.
 *Si no ingreso nada, retorno un string vacío para evitar que retorne undefined
 */
function getPerson() {
    if (nameInput.value) {
        const key = "&name=";
        return key + nameInput.value;
    } else {
        return "";
    }
}
/**
 @returns{string}
 *
 *Obtiene el valor del input donde ingreso la edad, y se lo convierte en queryString.
 */
function getMinAge() {
    if (ageInput.value) {
        const key ="&minage=";
        return key + ageInput.value;
    } else {
        return "";
    }
}

function getCaseCheck() {
    if (caseCheck.checked){
        return "&case=t";
        } else {
            return "&case=f";
        }
}

function getSearchCheck() {
    if (searchCheck.checked){
        return "&partial=t";
        } else {
            return "&partial=f";
        }
}

function showModal() {
    alert("No se pudo realizar la búsqueda");
}
