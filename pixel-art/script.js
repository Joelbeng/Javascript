// Selección de elementos del DOM
const btnReset = document.getElementById("reset");
const btnBackColor = document.getElementById("backColorInput");
const btnColor = document.getElementById("colorInput");
const btnDraw = document.getElementById("pencil");
const btnErase = document.getElementById("eraser");

// flag que cambia de valor si clickeamos sobre el botón de dibujar o de borrar.
let paint = true; 

// Una vez que finalice de cargar el DOM, se ejecuta el siguiente bloque de código (la callback function).

    const rowCount = document.getElementById("rowInput");
    const colCount = document.getElementById("columnInput");
    const cellSize = document.getElementById("input-size");
    const containerDiv = document.querySelector(".grid-container");

    /** 
    * Crea y muestra la grilla a partir de los valores ingresados en los inputs de filas y columnas.
    */
    function showGrid() {
        containerDiv.style.gridTemplateColumns = `repeat(${colCount.value}, 1fr)`;
        
        // Crea un div por cada celda y lo asigna como hijo del contenedor
        for (let i = 0; i < rowCount.value * colCount.value; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");

            newDiv.style.width = `${cellSize.value}px`;
            newDiv.style.height = `${cellSize.value}px`;
            
            //Se le añade el atributo draggable con valor false, para que no tome al elemento newDiv como arrastrable. No funciona a la perfección
            newDiv.setAttribute("draggable","false"); 
            
            //Evento que pinta o borra (pinta del color de fondo) dependiendo del valor del flag "paint", si presionamos el click izquierdo sobre una celda
            newDiv.addEventListener("mousedown", function(ev){
                if (paint) {
                    ev.buttons == 1 ? this.style.backgroundColor = btnColor.value : null;
                } else {
                    ev.buttons == 1 ? this.style.backgroundColor = btnBackColor.value : null;
                }
            });

            //Evento que pinta o borra (pinta del color de fondo) dependiendo del valor del flag "paint", si arrastramos el cursor presionando el click izquierdo
            newDiv.addEventListener("mouseenter", function(ev){
                if (paint) {
                    ev.buttons == 1 ? this.style.backgroundColor = btnColor.value : null;
                } else {
                    ev.buttons == 1 ? this.style.backgroundColor = btnBackColor.value : null;
                }
            });

            containerDiv.appendChild(newDiv); 
        }
    }

    showGrid();
    //Event Listeners

    //Haciendo click en "Reiniciar" se borra la grilla (para que no se superpongan) y se ejecuta la función showGrid()
    btnReset.addEventListener('click', () => {
        containerDiv.innerHTML = '';
        // if(!checkbox.checked) checkbox.checked;   --> Esta línea no funciona pero no entiendo por qué.
        showGrid();
    });
    
    btnErase.addEventListener('click', function() {
        paint = false;
        
        this.classList.remove("disabled");
        btnDraw.classList.add("disabled");
    });

    btnDraw.addEventListener('click', function() {
        paint = true;
        
        this.classList.remove("disabled");
        btnErase.classList.add("disabled");
    });
    
    let cells = containerDiv.children;

    // Cada vez que se cambia el valor del input cellSize se modifica el tamaño de todas las celdas.
    cellSize.addEventListener('change', function() {
        for(let i = 0; i < cells.length; i++) {
            const cell = cells[i];

            cell.style.width = `${this.value}px`;
            cell.style.height = `${this.value}px`; 
        }                    
    });

    //Cambia el color de fondo de la grilla
    btnBackColor.addEventListener('change', function() {
        containerDiv.style.backgroundColor = `${this.value}`;
    });

    const checkbox = document.getElementById("checkbox");

    //Muestra o no los bordes de las celdas
    checkbox.addEventListener('change', function() { 
        for (let i = 0; i < cells.length; i++) {
            cell = cells[i];

            if (!this.checked) {    
                cell.style.border = "none";
            } else {
                cell.style.border ="1px solid black";
            }
        }    
    });
