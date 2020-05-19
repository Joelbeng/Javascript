const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "../client")));

app.get("/", function (req, res) {
    res.status(200).sendFile("index.html");
});

app.get("/person", function (req, res) {
    const personList = getPersonList();
    let personResults;

    //Obtengo el valor del checkbox que indica si es case sensitive o no
    let caseVal = req.query.case == "t" ? true : false;
    
    //Obtengo el valor del checkbox que indica si la búsqeda es escricta o no
    let strictSeach = req.query.partial =="t" ? true : false;

    //Si me llegan datos a partir de ambos inputs, filtro la respuesta AJAX en base a los dos queryParameters
    if (req.query.name && req.query.minage) {
        //Evalúo si la búsqueda es estricta o no
        if(strictSeach) {
            personResults = personList.filter(person => 
                //Evalúo si la búsqueda es case sensitive
                caseVal ? 
                    person.name == req.query.name && person.age > req.query.minage :
                    person.name.toLowerCase() == req.query.name.toLowerCase() && person.age > req.query.minage);
        } else {
            personResults = personList.filter(person => 
                caseVal ? 
                    person.name.includes(req.query.name) && person.age > req.query.minage :
                    person.name.toLowerCase().includes(req.query.name.toLowerCase()) && person.age > req.query.minage);
          }
    
    //Si sólo me llega el nombre como dato, filtro la respuesta a partir de sólo de esta información
    } else if (req.query.name) {
        if (strictSeach) {
            personResults = personList.filter(person => 
                caseVal ?    
                    person.name == req.query.name :
                    person.name.toLowerCase() == req.query.name.toLowerCase());
        } else {
            personResults = personList.filter(person =>
                caseVal ?    
                    person.name.includes(req.query.name) :
                    person.name.toLowerCase().includes(req.query.name.toLowerCase()));
          }
    //Si sólo me llega la edad mínima como dato, filtro la respuesta a partir de este queryParameter         
    } else if (req.query.minage) {
        personResults = personList.filter(person => person.age > req.query.minage);
    
    //Si no me llega ningún dato respondo el array completo.
    } else {
       personResults = personList;
    }
    
        res.json(personResults);
    
});

app.listen(8000, () => {
    console.log("El server está corriendo");
})

function getPersonList() {
    return [
        {
            name: "Juana",
            age: 1
        },
        {
            name: "Juan",
            age: 33
        },
        {
            name: "Fernando",
            age: 24
        },
        {
            name: "Fernanda",
            age: 42
        },
        {
            name: "Juana",
            age: 16
        },
        {
            name: "Lucía",
            age: 22
        },
        {
            name: "Alfredo",
            age: 67
        },
        {
            name: "Gustavo",
            age: 50
        }
    ];

}