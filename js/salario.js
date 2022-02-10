// Lista de personas por pais

const guatemala = [
    {
        name: "Pablo",
        salary: 8000
    },
    {
        name: "Daniel",
        salary: 4500
    },
    {
        name: "Juan",
        salary: 3500
    },
    {
        name: "Lolo",
        salary: 5000
    }
];

const salvador = [
    {
        name: "Karyna",
        salary: 13000
    },
    {
        name: "Dorian",
        salary: 4500
    },
    {
        name: "Elio",
        salary: 9000
    }
];

const honduras = [
    {
        name: "Jose",
        salary: 1800
    },
    {
        name: "Renata",
        salary: 7000
    },
    {
        name: "Andrea",
        salary: 9800
    }
]


// Este codigo se puede optimizar muchisimo, pero lo hice un poco deprisa. 

const addElementGuatemala = () => { 
    const name = document.getElementById("nameGuatemala").value;
    const salary = parseInt(document.getElementById("salaryGuatemala").value);
    const elemento = { name, salary };
    mostrarListadoGuatemala(elemento);
    return guatemala.push(elemento);
 }

 const addElementSalvador= () => { 
    const name = document.getElementById("nameSalvador").value;
    const salary = parseInt(document.getElementById("salarySalvador").value);
    const elemento = { name, salary};
    mostrarListadoSalvador(elemento);
    return salvador.push(elemento);
 }

 const addElementHonduras = () => { 
    const name = document.getElementById("nameHonduras").value;
    const salary = parseInt(document.getElementById("salaryHonduras").value);
    const elemento = { name, salary};
    mostrarListadoHonduras(elemento);
    return honduras.push(elemento);
 }



const calcularTotalSalario = () => {
    const sumaGuatemala = guatemala.reduce((acc, ele, index) => (index > 1) ? acc + ele.salary : acc.salary + ele.salary);
    const sumaSalvador = salvador.reduce((acc, ele, index) => (index > 1) ? acc + ele.salary : acc.salary + ele.salary);
    const sumaHonduras = honduras.reduce((acc, ele, index) => (index > 1) ? acc + ele.salary : acc.salary + ele.salary);
    const resultadoSumaSalarial = sumaGuatemala + sumaSalvador + sumaHonduras;
    mostrarInformacion(resultadoSumaSalarial);
    return resultadoSumaSalarial;
}


const calcularTotalPromedio = () => {
    const promedio = calcularTotalSalario() / 3;
    console.log(promedio);
    return mostrarInformacion(promedio);
}


const calcularMediana = () => {

    const salaryGuatemala = guatemala.map((ele) => ele.salary);
    const salarySalvador = salvador.map((ele) => ele.salary);
    const salaryHonduras = honduras.map((ele) => ele.salary);

    const serieMedianaSalarios = salaryGuatemala.concat(salarySalvador).concat(salaryHonduras);


    const seriMedianaOrdenada = serieMedianaSalarios.sort((a, b) => a - b);
    if (seriMedianaOrdenada.length % 2 == 0) {
        let medianaValor1 = seriMedianaOrdenada[(seriMedianaOrdenada.length / 2)];
        let medianaValor2 = seriMedianaOrdenada[((seriMedianaOrdenada.length / 2) - 1)];
        mediana = (medianaValor1 + medianaValor2) / 2;
        return mostrarInformacion(mediana);
    } else {
        mediana = seriMedianaOrdenada[((seriMedianaOrdenada.length / 2) - 0.5)];
        return mostrarInformacion(mediana);
    }
}

const mostrarInformacion = (resultado) =>{
    const displayResult = document.getElementById("displayResult");
    const display = document.createElement("h2");
    display.textContent = resultado;
    return displayResult.appendChild(display);
}


const mostrarListadoGuatemala = (info) =>{
    const cuponesGenerados = document.getElementById("GuatemalaGenerados");
    cuponesGenerados.classList.remove("listaGuatemala");
    const templateCupones = document.getElementById("templateListaGuatemala");
    const elemento = document.createElement("h4");
    elemento.textContent = `Nombre: ${ info.name } Salario:  ${info.salary}`;
    return templateCupones.appendChild(elemento);
}

const mostrarListadoSalvador= (info) =>{
    const cuponesGenerados = document.getElementById("SalvadorGenerados");
    cuponesGenerados.classList.remove("listaSalvador");
    const templateCupones = document.getElementById("templateListaSalvador");
    const elemento = document.createElement("h4");
    elemento.textContent = `Nombre: ${ info.name } Salario:  ${info.salary}`;
    return templateCupones.appendChild(elemento);
}

const mostrarListadoHonduras = (info) =>{
    const cuponesGenerados = document.getElementById("HondurasGenerados");
    cuponesGenerados.classList.remove("listaHonduras");
    const templateCupones = document.getElementById("templateListaHonduras");
    const elemento = document.createElement("h4");
    elemento.textContent = `Nombre: ${ info.name } Salario:  ${info.salary}`;
    return templateCupones.appendChild(elemento);
}

const calcularTop = () => {
    const salaryGuatemala = guatemala.map((ele) => ele.salary);
    const salarySalvador = salvador.map((ele) => ele.salary);
    const salaryHonduras = honduras.map((ele) => ele.salary);
    const serieSalarios = salaryGuatemala.concat(salarySalvador).concat(salaryHonduras);
    const serieSalariosOrdenados = serieSalarios.sort((a,b)=> a-b).reverse();
    const posTop = (serieSalariosOrdenados.length*10)/100;
    const topSalary = serieSalariosOrdenados.filter((ele, index)=> {if(index<=posTop){ return ele }});
    return mostrarInformacion(topSalary);
}
 


/* Analisis: Total, promedio, mediana, General, Top 10% */