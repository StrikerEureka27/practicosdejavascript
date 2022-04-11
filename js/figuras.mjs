
class Figuras {
    constructor({
        name,
        area = 0,
        perimeter = 0
    }) {
        this._name = name,
            this._area = area,
            this._perimeter = perimeter
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

}


class Square extends Figuras {
    constructor(props) {
        super(props);
        this._side = 0;
        this._base = 0;
    }

    get side() {
        return this._side;
    }

    set side(side) {
        isNaN(side) ? console.warn("No a ingresado ningun valor!") : this._side = side;
    }

    get base() {
        return this._base;
    }

    set base(base) {
        isNaN(base) ? console.warn("No a ingresado ningun valor!") : this._base = base;
    }

    calculatePerimeterSquare() {
        return console.log(this._side * 4);
    }

    calculateAreaSquare() {
        return console.log(Math.pow(this._base, 2));
    }
}

class Triangle extends Figuras {
    constructor(props) {
        super(props);
        this._sideA = 0;
        this._sideB = 0;
        this._base = 0;
        this._height = 0;
    }

    get sideA() {
        return this._sideA;
    }

    set sideA(sideA) {
        isNaN(sideA) ? console.warn("No a ingresado ningun valor!") : this._sideA = sideA;
    }

    get sideB() {
        return this._sideB;
    }

    set sideB(sideB) {
        isNaN(sideB) ? console.warn("No a ingresado ningun valor!") : this._sideB = sideB;
    }

    get sideC() {
        return this._sideC;
    }

    set sideC(sideC) {
        isNaN(sideC) ? console.warn("No a ingresado ningun valor!") : this._sideC = sideC;
    }

    get base() {
        return this._sideC;
    }

    set base(base) {
        this._base = base;
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }



    calculatePerimeterTriangle() {
        return console.log(this._sideA + this._sideB + this._base);
    }

    calculateAreaTriangle(){
        return console.log((this._base * this._height) / 2); 
    }
}

export { Square, Triangle };


const PI = Math.PI;






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




