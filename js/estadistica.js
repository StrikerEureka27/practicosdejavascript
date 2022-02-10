console.log("Conectado");

let serieMedia = [];
let serieMediana = [];
let serieModa = [];
let serieArmonica = [];

const AgregarSerieMedia = () => {
    const numeroSerieMedia = document.getElementById("numeroSerieMedia").value;
    agregarSerie(parseInt(numeroSerieMedia), "MEDIA")
    return mostrarSerie(numeroSerieMedia, "MEDIA");
}

const AgregarSerieMediana = () => {
    const numeroSerieMediana = document.getElementById("numeroSerieMediana").value;
    agregarSerie(parseInt(numeroSerieMediana), "MEDIANA");
    return mostrarSerie(numeroSerieMediana, "MEDIANA");
}

const AgregarSerieModa = () => {
    const numeroSerieModa = document.getElementById("numeroSerieModa").value;
    agregarSerie(parseInt(numeroSerieModa), "MODA");
    return mostrarSerie(numeroSerieModa, "MODA");
}

const AgregarSerieArmonica = () => {
    const numeroSerieArmonica = document.getElementById("numeroSerieArmonica").value;
    agregarSerie(parseInt(numeroSerieArmonica), "ARMONICA");
    return mostrarSerie(numeroSerieArmonica, "ARMONICA");
}




const agregarSerie = (valor, tipo) => {
    switch (tipo) {
        case "MEDIA":
            serieMedia.push(valor);
        case "MEDIANA":
            serieMediana.push(valor);
        case "MODA":
            serieModa.push(valor);
        case "ARMONICA":
            serieArmonica.push(valor);
    }
}

const seleccionPlantilla = (tipo) => {
    switch (tipo) {
        case "MEDIA":
            return document.getElementById("serieGeneradaMedia");
        case "MEDIANA":
            return document.getElementById("serieGeneradaMediana");
        case "MODA":
            return document.getElementById("serieGeneradaModa");
        case "ARMONICA":
            return document.getElementById("serieGeneradaArmonica");
    }
}


const mostrarSerie = (info, tipo) => {
    const serieGenerada = seleccionPlantilla(tipo);
    let itemSerie = document.createElement("h4");
    itemSerie.textContent = info;
    return serieGenerada.appendChild(itemSerie);
}


const calcularMedia = () => {
    const sumaSerie = serieMedia.reduce((acum, item) => (acum += item));
    const media = sumaSerie / serieMedia.length;
    return mostrarInformacion(media);
}

const calcularModa = () => {
    let noRepetidos = [];
    let contadorRepetidos = {};
    serieModa.map((ele) => {
        if (!noRepetidos.includes(ele)) {
            contadorRepetidos[ele] = 1;
            return noRepetidos.push(ele);
        } else {
            if (noRepetidos.includes(ele)) {
                contadorRepetidos[ele] += 1;
            }
        }
    });

    const arrayAux = Object.entries(contadorRepetidos).sort((elementoA, elementoB) => elementoA[1] - elementoB[1]);
    const moda = arrayAux[arrayAux.length - 1];

    return mostrarInformacion(moda);

}

const calcularMediana = () => {
    // 5, 2, 2, 2, 9, 3
    let mediana = 0;
    const seriMedianaOrdenada = serieMediana.sort((a, b) => a - b);
    if (seriMedianaOrdenada.length % 2 == 0) {
        let medianaValor1 = seriMedianaOrdenada[(seriMedianaOrdenada.length / 2)];
        let medianaValor2 = seriMedianaOrdenada[((seriMedianaOrdenada.length / 2) - 1)];
        mediana = (medianaValor1 + medianaValor2) / 2;
        mostrarInformacion(mediana);
    } else {
        mediana = seriMedianaOrdenada[((seriMedianaOrdenada.length / 2) - 0.5)];
        mostrarInformacion(mediana);
    }
}

const calcularMediaArmonica = () => {

    let unidad = serieArmonica.length;
    let inverso = serieArmonica.reduce((accum, ele, index) => {
        if (index > 1) { return (accum) + (1 / ele) } else { return (1 / accum) + (1 / ele) }
    });
    const mediaArmonica = unidad / inverso;
    mostrarInformacion(mediaArmonica);
}



const mostrarInformacion = (resultado) => {
    const displayResult = document.getElementById("displayResult");
    const display = document.createElement("h2");
    display.textContent = resultado;
    return displayResult.appendChild(display);
}