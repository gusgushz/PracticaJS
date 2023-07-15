let edadInput = document.getElementById("edad");
let infoEdad = document.getElementById("infoEdad");
let calificacionInput = document.getElementById("calificacion");
let infoCali = document.getElementById("infoCali");
let cadenaInput = document.getElementById("cadena");
let cadena = [];
let infoCadena = document.getElementById("infoCadena");
let numInput = document.getElementById("numAleatorio");
let infoDNI = document.getElementById("infoDNI");


//Pide la edad y si es mayor de 18 años indica que ya puede conducir.
function mayorEdad () {
    let edad = parseInt(edadInput.value);
    if(edad >= 18) {
        infoEdad.innerHTML = "<p>Puedes conducir</p>";
    } else {
        infoEdad.innerHTML = "<p>¡No puedes conducir!</p>";
    }
};

//Pide una nota (número). Muestra la calificación según la nota:
function sacarNota () {
    let calificacion = parseFloat(calificacionInput.value);
    if (calificacion <= 3) {
        infoCali.innerHTML = "<p>Muy deficiente</p>";
    } else if (calificacion <= 5) {
        infoCali.innerHTML = "<p>Insuficiente</p>";
    } else if (calificacion <= 6) {
        infoCali.innerHTML = "<p>Suficiente</p>";
    } else if (calificacion <= 7) {
        infoCali.innerHTML = "<p>Bien</p>";
    } else if (calificacion <= 9) {d
        infoCali.innerHTML = "<p>Notable</p>";
    } else {
        infoCali.innerHTML = "<p>Sobresaliente</p>";
    }
};

//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -
function concatenar () {
    let valorCadena = cadenaInput.value;
    if (valorCadena === null) {
        cadena.push("")
    } else {
        cadena.push(valorCadena)
    }
};
function mostrarConcat () {
    let union = cadena.join("-");
    infoCadena.textContent= union;
};

//Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).
function calcularDNI () {
    let numAleatorio = parseInt(numInput.value);
    while (numAleatorio > 506) {
        numAleatorio = numAleatorio/23;
    }
    numAleatorio = numAleatorio/23;
    numAleatorio = Math.floor(numAleatorio);

    let letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    infoDNI.innerHTML = letra[numAleatorio];
};