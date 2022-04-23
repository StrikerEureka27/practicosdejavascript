

class DrawResult {
    constructor({
        result
    }){
        this._result = result
    }

    set result(result){
        this._result = result;
    }

    get result(){
        return this.result;
    }

    drawResult(){
        this.cleanDisplay();
        const displayResult = document.getElementById("displayResult");
        const resultTitle = document.createElement("h2");
        resultTitle.textContent = this._result;
        resultTitle.id = "drawed";
        displayResult.appendChild(resultTitle);
    }
    cleanDisplay(){
        try {
            const tempDrawed = document.getElementById("drawed");
            tempDrawed.remove();
        } catch (error) {
            console.warn("Pantalla limpia");
        }
    }
}



export { DrawResult };


