console.log("Conectado");

let cupones = [];



const calcularPrecioAhorrado = () =>{
    const precioNormal = document.getElementById("precioNormal").value;
    const descuentoAplicado = document.getElementById("descuentoAplicado").value;

    const precioAhorrado = (precioNormal * descuentoAplicado)/100;
    const precioAPagar = precioNormal - precioAhorrado;
    return mostrarInformacion(precioAPagar);
}

const generaCupon = () => {
    const nombreCupon = document.getElementById("nombreCupon").value;
    const valorDescuento = document.getElementById("valorDescuento").value;
    const infoCupon = { nombreCupon, valorDescuento };
    cupones.push(infoCupon);
    return mostrarCupones(infoCupon);
}

const calcularAhorroConCupon = () => {
    const precioNormalCupones = document.getElementById("precioNormalCupones").value;
    const codigoCupon = document.getElementById("codigoCupon").value;
    cupones.forEach(item => {
        if(item.nombreCupon != codigoCupon){
            return mostrarInformacion("CUPON INVALIDO");
        }else{
            const totalDescuentoCupon = (precioNormalCupones * item.valorDescuento)/100;
            const precioApagar = precioNormalCupones - totalDescuentoCupon;
            return mostrarInformacion(precioApagar);
        }
        
    });

}

const mostrarCupones = (info) =>{
    const cuponesGenerados = document.getElementById("CuponesGenerado");
    cuponesGenerados.classList.remove("cuponesGenerados");
    const templateCupones = document.getElementById("templateCupones");
    const cupon = document.createElement("h4");
    cupon.textContent = `Nombre: ${ info.nombreCupon } Descuento:  ${info.valorDescuento}%`;
    return templateCupones.appendChild(cupon);
}


const mostrarInformacion = (resultado) =>{
    const displayResult = document.getElementById("displayResult");
    const display = document.createElement("h2");
    display.textContent = resultado;
    return displayResult.appendChild(display);
}
