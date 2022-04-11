

class DrawResult {
    constructor(DomElementId, resultToPrint){
        this.DomElement = DomElementId;
        this.resultToPrint - resultToPrint;
    }
    HolaMundo(){
        return "Hola mundo!";
    }
    DisplayResult(){
        const display = document.getElementById(`${this.DomElementId}`);
        console.log(display);
        let displayResult = document.createElement(`h2`);
        displayResult.textContent = this.resultToPrint;
        return display.appendChild(displayResult);
    }
}


