// Constantes

const CM = " CM";

// Codigo del cuadrado
console.group("Cuadrados");


const calcularPerimetroCudadro = () => {
    const inputLadoCuadrado = document.getElementById("inputLadoCuadrado");
    let perimetroCuadrado = inputLadoCuadrado.value * 4;
    return  mostrarInformacion(perimetroCuadrado);
}


const calcularAreaCuadrado = ()=> {
     const inputBaseCuadrado = document.getElementById("inputBaseCuadrado");
     let areaCuadrado =  Math.pow(inputBaseCuadrado.value, 2);
     return  mostrarInformacion(areaCuadrado);
}



console.groupEnd();
// Codigo del trinagulo

console.group("Trinagulos");

/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
*/

const calcularPerimetroTriangulo = () => {
    const inputLado1Triangulo = document.getElementById("inputLado1Triangulo");
    const inputLado2Triangulo = document.getElementById("inputLado2Triangulo");
    const inputLado3Triangulo = document.getElementById("inputLado3Triangulo");
    let perimetroTriangulo = parseInt(inputLado1Triangulo.value) + parseInt(inputLado2Triangulo.value) + parseInt(inputLado3Triangulo.value);
    return mostrarInformacion(perimetroTriangulo);
}

const calcularAreaTriangulo =  (baseTriangulo, alturaTriangulo) => {
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");
    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");
    let areaTriangulo = (parseInt(inputBaseTriangulo.value) * parseInt(inputAlturaTriangulo.value)) / 2;
    return mostrarInformacion(areaTriangulo);
}



/*console.log("Los lados del triangulo: ");
console.log("Lado 01: " + ladoTriangulo1 + CM);
console.log("Lado 02: " + ladoTriangulo2 + CM);
console.log("Base triangulo: " + baseTriangulo + CM);*/

console.groupEnd();

console.group("Circulos");

const PI = Math.PI;



const calcularPerimetroCirculo = (radioCirculo) => {
    const inputRadio1Circulo = document.getElementById("inputRadio1Circulo");
    let perimetroCirculo = (inputRadio1Circulo.value*2) * PI;
    return mostrarInformacion(perimetroCirculo);
}

const calcularAreaCirculo = (radioCirculo) => {
    const inputRadio2Circulo = document.getElementById("inputRadio2Circulo");
    let areaCirculo = Math.pow(inputRadio2Circulo.value,2) * PI;
    return mostrarInformacion(areaCirculo);
}


console.groupEnd();


const mostrarInformacion = (resultado) =>{
    const displayResult = document.getElementById("displayResult");
    const display = document.createElement("h2");
    display.textContent = resultado;
    return displayResult.appendChild(display);
}




