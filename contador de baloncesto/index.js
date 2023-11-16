let resultadoI = document.getElementById("sumaI");
let resultadoD = document.getElementById("sumaD");
let contadorIzq = 0;
let contadorDer = 0;

function suma1I(){
    contadorIzq++
    resultadoI.textContent = contadorIzq
}

function suma2I() {
    contadorIzq += 2
    resultadoI.textContent = contadorIzq
}

function suma3I() {
    contadorIzq += 3
    resultadoI.textContent = contadorIzq
}


function suma1D(){
    contadorDer++
    resultadoD.textContent = contadorDer
}

function suma2D(){
    contadorDer += 2;
    resultadoD.textContent = contadorDer
}

function suma3D(){
    contadorDer += 3;
    resultadoD.textContent = contadorDer
}