window.addEventListener("load", function () {

    const rowCount = document.getElementById("rowInput");
    const colCount = document.getElementById("columnInput");
    const cellSize = document.getElementById("input-size");
    const containerDiv = document.querySelector(".grid-container");
    const btnReset = document.getElementById("reset");
    const btnBackColor = document.getElementById("backColorInput");
    const btnColor = document.getElementById("colorInput");
    const btnDraw = document.getElementById("pencil");
    const btnErase = document.getElementById("eraser");
    let cellArray = containerDiv.children;

    function showGrid() {
        containerDiv.style.gridTemplateColumns = `repeat(${colCount.value}, 1fr)`;
        containerDiv.style.gridTemplateRows = `repeat(${rowCount.value}, 1fr)`;
        
        for (let i = 0; i < rowCount.value * colCount.value; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");

            newDiv.style.width = `${cellSize.value}px`;
            newDiv.style.height = `${cellSize.value}px`;
            containerDiv.appendChild(newDiv);
            
            // DUDA, ¿cada vez que clickeo para pintar o borrar se ejecuta toda la funcion showGrid? ¿Si es así es mejor hacer un for afuera?
            //Evento que colorea si apretamos el lápiz.
            btnDraw.addEventListener('click',function() {
                if(getComputedStyle.opacity !== 1) this.style.opacity = "1";
                btnErase.style.opacity = "0.5";
                      
                newDiv.addEventListener('click',function() {
                    this.style.backgroundColor = btnColor.value;
                });
            });    

            //Evento que "borra" (colorea con el color de fondo) si apretamos el borrador.
            btnErase.addEventListener('click',function(){
                if(getComputedStyle.opacity !== 1) this.style.opacity = "1";
                btnDraw.style.opacity = "0.5";                            
                
                newDiv.addEventListener('mouseover',function() {
                    this.style.backgroundColor = btnBackColor.value;
                });
                newDiv.addEventListener('click',function() {
                    this.style.backgroundColor = "";
                });
                               
            });        
        }
    }

    showGrid();

    // Antes de volver a ejecutar la función showGrid, se elimina el contenido de containerDiv para que no se vayan sumando.
    btnReset.addEventListener('click', () => {
        containerDiv.innerHTML = '';
        showGrid();
    });
    
    // Cada vez que se cambia el valor del input cellSize se modifica el tamaño de todos las celdas.
    cellSize.addEventListener('change', function() {
        for(let i = 0; i < cellArray.length; i++) {
            const cell = cellArray[i];

            cell.style.width = `${this.value}px`;
            cell.style.height = `${this.value}px`; 
        }                    
    });

    //Cambia el fondo del contenedor de la grilla
    btnBackColor.addEventListener('change', function() {
        containerDiv.style.backgroundColor = `${this.value}`;
    });


    const checkbox = document.getElementById("checkbox");

    //Muestra o no los bordes de las celdas
    checkbox.addEventListener('change', function() { 
        for (let i = 0; i < cellArray.length; i++) {
            cell = cellArray[i];

            if (this.checked !== true) {    
                cell.style.border = "none";
            } else {
                cell.style.border ="1px solid black";
            }
        }    
    });
    
    //Muestra un Alert en caso de que el usuario quiera pintar antes de seleccionar el lápiz
    containerDiv.addEventListener('click', function(){
        if (getComputedStyle(btnDraw).opacity == 1 && getComputedStyle(btnErase).opacity == 1){
            alert("Haga click sobre el lápiz antes de comenzar")
        }
    });
});
