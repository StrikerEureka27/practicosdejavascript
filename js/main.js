import { Square, Triangle , Circle} from "./figuras.mjs";
import { DrawResult } from "./DrawResult.mjs";

const inputSideSquare = document.getElementById("inputSideSquare");
const btnCalculatePerimeter = document.getElementById("btnCalculatePerimeter");

const inputBaseSquare = document.getElementById("inputBaseSquare");
const btnCalculateArea = document.getElementById("btnCalculateArea");

const inputSideATriangle = document.getElementById("inputSideATriangle");
const inputSideBTriangle = document.getElementById("inputSideBTriangle");
const inputBaseTriangle = document.getElementById("inputBaseTriangle");
const inputHeightTriangle = document.getElementById("inputHeightTriangle");
const btnCalculatePerimeterTriangle = document.getElementById("btnCalculatePerimeterTriangle");
const btnCalculateAreaTriangle = document.getElementById("btnCalculateAreaTriangle");

const inputBaseIsoseles = document.getElementById("inputBaseIsoseles");
const inputHeightIsoseles = document.getElementById("inputHeightIsoseles");
const btnCalculateAreaIsoseles = document.getElementById("btnCalculateAreatIsoseles");

const inputRadio1Circle = document.getElementById("inputRadio1Circle");
const btnInputRadio1Circle = document.getElementById("btnInputRadio1Circle");

const inputRadio2Circle = document.getElementById("inputRadio2Circle");
const btnInputRadio2Circle = document.getElementById("btnInputRadio2Circle");

const btnClean = document.getElementById("btnClean");


btnCalculatePerimeter.onclick = ()=> {
    const objectSquare = new Square({
        name: "Square", 
    });
    objectSquare.side = parseInt(inputSideSquare.value);
    objectSquare.calculatePerimeterSquare();
}

btnCalculateArea.onclick = ()=> {
    const objectSquare = new Square({
        name: "Square", 
    });
    objectSquare.base = parseInt(inputBaseSquare.value);
    objectSquare.calculateAreaSquare();
}

btnCalculatePerimeterTriangle.onclick = () => {
    const objectTrinagle = new Triangle({
        name: "Trinagle", 
    });
    objectTrinagle.sideA = parseInt(inputSideATriangle.value);
    objectTrinagle.sideB = parseInt(inputSideBTriangle.value);
    objectTrinagle.base = parseInt(inputBaseTriangle.value);
    objectTrinagle.calculatePerimeterTriangle(); 
}

btnCalculateAreaTriangle.onclick = () => {
    const objectTrinagle = new Triangle({
        name: "Triangle", 
    });
    objectTrinagle.base = parseInt(inputBaseTriangle.value);
    objectTrinagle.height = parseInt(inputHeightTriangle.value);
    objectTrinagle.calculatePerimeterTriangle();
}


btnCalculateAreaIsoseles.onclick =()=> {
    const objectTrinagle = new Triangle({
        name: "Triangle"
    })
    objectTrinagle.base = inputBaseIsoseles.value;
    objectTrinagle.height = inputHeightIsoseles.value;
    objectTrinagle.CalculateAreaIsoseles();
}

btnInputRadio1Circle.onclick = () => {
    const objectCircle = new Circle({
        name: "Circle"
    })
    objectCircle.radio = inputRadio1Circle.value;
    objectCircle.calculatePerimeterCircle();
}

btnInputRadio2Circle.onclick = () => {
    const objectCircle = new Circle({
        name: "Circle"
    })
    objectCircle.diameter = inputRadio2Circle.value;
    objectCircle.calculateAreaCircle();
}

btnClean.onclick = () => {
    const clean = new DrawResult({
        result: 0
    });
    clean.cleanDisplay();
}