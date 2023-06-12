
import { validacionPresupuesto } from "./validacionPresupuesto.js";
import { validacionGasto } from "./validacionGastos.js";
import { tablaRegistro } from "./registro.js";
import { actualizacionSaldo } from "./actualizacionSaldo.js";
import { agregarPuntos } from "./validacionPresupuesto.js";

//BOTONES

const presupuestoBtn = document.querySelector(".presupuesto-btn")
const gastoBtn = document.querySelector(".gasto-btn")

//PRESUPUESTO
let presupuestoNumerico
let presupuesto 

presupuestoBtn.addEventListener("click", () => {
    const presupuestoRender = document.querySelector(".p-presupuesto");
    var presupuestoInput = document.querySelector(".presupuesto-input");
    presupuesto = presupuestoInput.value; 
    validacionPresupuesto(presupuesto);
    const presupuestoConPuntos = agregarPuntos(presupuesto);
    presupuestoRender.textContent = presupuestoConPuntos;
    presupuestoNumerico = parseInt(presupuesto.replace(/\./g, ""));
    presupuestoInput.value = "";
});

//GASTO

let gasto 

gastoBtn.addEventListener("click", () => {
    var presupuesto2 = document.querySelector(".presupuesto-input").value;
    validacionPresupuesto(presupuesto2);
    const gastoRender = document.querySelector(".monto-gasto-render");
    const nombreGasto = document.querySelector(".nombre-gasto");
    let gastoInput = document.querySelector(".monto-gasto");
    gasto = gastoInput.value; 
    const gastoConPuntos = agregarPuntos(gasto);
    gastoRender.textContent = gastoConPuntos;
    const gastoNumerico = parseInt(gasto.replace(/\./g, ""));

    tablaRegistro(nombreGasto.value, gastoConPuntos);
    actualizacionSaldo(presupuestoNumerico, gastoNumerico);

    gastoInput.value = "";
    nombreGasto.value = "";
});

export { presupuesto, gasto }; 
