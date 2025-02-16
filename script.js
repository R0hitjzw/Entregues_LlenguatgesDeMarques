/* TASCA 1 -----------------------------------------------------------------------------------------*/
let span1 = document.querySelector("#doraemon")
span1.addEventListener("click", button1)

let span2 = document.querySelector("#doraemon")
span2.addEventListener("contextmenu", button2)

let span3 = document.querySelector("#doraemon")
span3.addEventListener("mouseenter", button3)

// SPAN 4
document.addEventListener("keydown", button4)

// SPAN 5
document.addEventListener("keydown", button5)

// SPAN 6
document.addEventListener("keydown",button6)

function button1(event)
{
    let span1 = document.querySelector("#span1");
    span1.innerHTML++;
}

function button2(event)
{
    let span2 = document.querySelector("#span2");
    span2.innerHTML++;
    event.preventDefault();
}

function button3(event)
{
    let span3 = document.querySelector("#span3")
    span3.innerHTML++;
}

function button4(event)
{
    let span4 = document.querySelector("#span4")
    span4.innerHTML++;
}

function button5(event)
{
    let span5 = document.querySelector("#span5")
    span5.innerHTML=event.key;
}

function button6(event)
{
    let span6 = document.querySelector("#span6")
    if (event.key=="g") 
    {
        span6.innerHTML++;
    }
}

/* TASCA 2 -----------------------------------------------------------------------------------------*/

let buttonLi = document.querySelector(".buttonCrear")
buttonLi.addEventListener("click", afegirLi)

let numElement=0;
function afegirLi ()
{
    numElement++;

    let divTasca2 = document.querySelector("#divTasca2")

    let nav = document.createElement("nav")
    nav.classList.add("navTasca2")
    divTasca2.append(nav)

    let llista = document.createElement("ul")
    llista.classList.add("ulTasca2")
    nav.append(llista)

    let nouElement = document.createElement("li")
    nouElement.innerHTML="Aquest és l'element " + numElement + " de la llista"
    nouElement.classList.add("li")
    nouElement.id="element"+numElement 
    llista.append(nouElement)

}

/* TASCA 3 -----------------------------------------------------------------------------------------*/

window.onload = function()
{
    generarCard();
}

let user = { 
    nombre: "Roberto", 
    apellido: "Heras", 
    edad: 35, 
    aficiones: ["Escalada","Sushi","Papiroflexia"] 
}

    
    
function generarCard ()
{
    let tasca3 = document.querySelector("#divTasca3")
    let targetaCard = document.createElement("div")
    targetaCard.classList.add("targetaTasca3")
    let body=document.querySelector("body")
    tasca3.append(targetaCard)

    let nomCognom = document.createElement("h2")  // Nom i Cognom
    nomCognom.classList.add("nomCognomClass")
    nomCognom.innerHTML=user.nombre + " " + user.apellido
    targetaCard.append(nomCognom)

    let edat = document.createElement("h4")       // Edat
    edat.classList.add("edatClass")
    edat.innerHTML="Edad: " + user.edad + " años";
    targetaCard.append(edat)

    let aficionsTitol=document.createElement("h3")   // Aficions (Títol)
    aficionsTitol.classList.add("aficionsTitol")
    aficionsTitol.innerHTML="Aficiones"
    targetaCard.append(aficionsTitol)

    let aficionsNav =document.createElement("nav")    // Element NAV
    aficionsNav.classList.add("aficionsNav")

    let aficionsUl=document.createElement("ul")       // Element Ul on aniran els li (aficions)
    aficionsUl.classList.add("aficionsUl")

    for (let index = 0; index < user.aficiones.length; index++) // bucle FOR per crear li (aficiosn)
    {
        let aficionsLi = document.createElement("li")
        aficionsLi.classList.add("aficionsLi")
        aficionsLi.innerHTML=user.aficiones[index];
        aficionsUl.append(aficionsLi)
    }

    aficionsNav.append(aficionsUl)
    
    targetaCard.append(aficionsNav)
}

/* TASCA 4 -----------------------------------------------------------------------------------------*/

const filosofos = [ 
    { 
        nombre: "Platón", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg", 
        pais: "Grecia", 
        corriente: "Idealismo", 
        arma: "Dialéctica" 
    },
    { 
        nombre: "Aristóteles", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU", 
        pais: "Grecia", 
        corriente: "Naturalismo", 
        arma: "Lógica" 
    },
    { 
        nombre: "Descartes", 
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg", 
        pais: "Francia", 
        corriente: "Racionalismo", 
        arma: "Meditación" 
    }, 
    { 
        nombre: "Kant", 
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg", 
        pais: "Alemania", 
        corriente: "Trascendentalismo", 
        arma: "Crítica", 
    }, 
    { 
        nombre: "Hume", 
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s", 
        pais: "Escocia", 
        corriente: "Empirismo", 
        arma: "Escepticismo"         
    } 
]

let crearTargetes = document.querySelector("#buttonTargetes")
crearTargetes.addEventListener("click", generarTargetesFilosof)

function generarTargetesFilosof()
{

    for (let i = 0; i < filosofos.length; i++) 
    {
        let divTask4 = document.querySelector("#divTasca4")
        let cardFilosof = document.createElement("div")
        cardFilosof.classList.add("tasca4Card")

        let divPiImatge=document.createElement("div")
        divPiImatge.classList.add("divPiImatge")

        let divElementsP = document.createElement("div")
        divElementsP.classList.add("divElementsP")
    
        let nomFilosof= document.createElement("h1")
        nomFilosof.classList.add("nomFilosof")
        nomFilosof.innerHTML="Nombre: "+filosofos[i].nombre
        cardFilosof.append(nomFilosof)

        let paisFilosof= document.createElement("p")
        paisFilosof.classList.add("paisFilosof")
        paisFilosof.innerHTML="País: "+filosofos[i].pais
        divElementsP.append(paisFilosof)

        let corrienteFilosof= document.createElement("p")
        corrienteFilosof.classList.add("correntFilosof")
        corrienteFilosof.innerHTML="Corriente: "+filosofos[i].corriente
        divElementsP.append(corrienteFilosof)

        let armaFilosof= document.createElement("p")
        armaFilosof.classList.add("armaFilosof")
        armaFilosof.innerHTML="Arma: "+filosofos[i].arma
        divElementsP.append(armaFilosof)

        let imatge = document.createElement("img")
        imatge.src=filosofos[i].imagen;
        imatge.classList.add("imatge")

        divPiImatge.append(imatge)
        divPiImatge.append(divElementsP)
        cardFilosof.append(divPiImatge)
        divTask4.append(cardFilosof)

        document.querySelector("#buttonTargetes").disabled=true; // Per a desactivar el botó (una cop s'hagi utilitzat).
    }
}