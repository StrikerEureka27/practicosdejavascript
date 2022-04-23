import { DrawResult } from "./DrawResult.mjs";
const PI = Math.PI;

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
        const perimeter = this._side * 4;
        const draw =  new DrawResult({
            result: perimeter
        })
        draw.drawResult();
    }

    calculateAreaSquare() {
        const area = Math.pow(this._base, 2);
        const draw =  new DrawResult({
            result: area
        })
        draw.drawResult();
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
        const perimeter = this._sideA + this._sideB + this._base;
        const draw =  new DrawResult({
            result: perimeter
        })
        draw.drawResult();
    }

    calculateAreaTriangle(){
        const area = (this._base * this._height) / 2;
        const draw =  new DrawResult({
            result: area
        })
        draw.drawResult();
    }

    CalculateAreaIsoseles(){
        let area = (this._base * this._height) / 2;
        const draw =  new DrawResult({
            result: area
        })
        draw.drawResult();
    }


}

class Circle extends Figuras {
    constructor(props){
        super(props);
        this._radio = 0;
        this._diameter = 0;
    }

    set radio(radio){
        this._radio = radio;
    }

    get radio(){
        return this._radio;
    }

    set diameter(diameter){
        this._diameter = diameter;
    }

    get diameter(){
        return this._diameter;
    }

    calculatePerimeterCircle(){
        let perimeter = (this._radio * 2) * PI;
        const draw =  new DrawResult({
            result: perimeter
        })
        draw.drawResult();
    }

    calculateAreaCircle(){
        const area = PI * (Math.pow(this._diameter, 2));
        const draw =  new DrawResult({
            result: area
        })
        draw.drawResult();
    }

}

export { Square, Triangle, Circle };





