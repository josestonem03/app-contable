import { agregarPuntos } from "./validacionPresupuesto.js";

let basurero = document.querySelector(".basurero-item")
let gastosAcumulados = 0;

export const actualizacionSaldo = (presupuesto, gasto) => {
    const saldoRender = document.querySelector(".saldo-render");
    presupuesto = parseInt(presupuesto);
    gasto = parseInt(gasto);

    
    gastosAcumulados += gasto;

    const saldo = presupuesto - gastosAcumulados;
    const saldoConPuntos = agregarPuntos(saldo.toString());
    saldoRender.textContent = saldoConPuntos;

    basurero.addEventListener("click", () =>{
        console.log( gasto)
    });

    
};

