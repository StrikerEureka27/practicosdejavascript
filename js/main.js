import { Square, Triangle } from "./figuras.mjs";

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
        name: "Trinagle", 
    });
    objectTrinagle.base = parseInt(inputBaseTriangle.value);
    objectTrinagle.height = parseInt(inputHeightTriangle.value);
    objectTrinagle.calculatePerimeterTriangle();
}




