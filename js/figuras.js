

const PI = Math.PI;

const calcularPerimetroCudadro = () => {
    const inputLadoCuadrado = document.getElementById("inputLadoCuadrado");
    let perimetroCuadrado = inputLadoCuadrado.value * 4;
    return mostrarInformacion(perimetroCuadrado);
}


const calcularAreaCuadrado = () => {
    const inputBaseCuadrado = document.getElementById("inputBaseCuadrado");
    let areaCuadrado = Math.pow(inputBaseCuadrado.value, 2);
    return mostrarInformacion(areaCuadrado);
}



const calcularPerimetroTriangulo = () => {
    const inputLado1Triangulo = document.getElementById("inputLado1Triangulo");
    const inputLado2Triangulo = document.getElementById("inputLado2Triangulo");
    const inputLado3Triangulo = document.getElementById("inputLado3Triangulo");
    let perimetroTriangulo = parseInt(inputLado1Triangulo.value) + parseInt(inputLado2Triangulo.value) + parseInt(inputLado3Triangulo.value);
    return mostrarInformacion(perimetroTriangulo);
}

const calcularAreaTriangulo = (baseTriangulo, alturaTriangulo) => {
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");
    let areaTriangulo = (parseInt(inputBaseTriangulo.value) * parseInt(inputAlturaTriangulo.value)) / 2;
    return mostrarInformacion(areaTriangulo);
}


const CalcularAlturaIsoseles = () => {
    const inputLadoA = document.getElementById("inputLadoA").value;
    const inputLadoB = document.getElementById("inputLadoB").value;
    let alturaIsoseles = Math.sqrt((Math.pow(inputLadoA, 2) - (inputLadoB, 2 / 4)));
    return mostrarInformacion(alturaIsoseles);
}



const calcularPerimetroCirculo = (radioCirculo) => {
    const inputRadio1Circulo = document.getElementById("inputRadio1Circulo");
    let perimetroCirculo = (inputRadio1Circulo.value * 2) * PI;
    return mostrarInformacion(perimetroCirculo);
}

const calcularAreaCirculo = (radioCirculo) => {
    const inputRadio2Circulo = document.getElementById("inputRadio2Circulo");
    let areaCirculo = Math.pow(inputRadio2Circulo.value, 2) * PI;
    return mostrarInformacion(areaCirculo);
}


const mostrarInformacion = (resultado) => {
    const displayResult = document.getElementById("displayResult");
    const display = document.createElement("h2");
    display.textContent = resultado;
    return displayResult.appendChild(display);
}




