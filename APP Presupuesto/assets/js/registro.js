import { presupuesto, gasto } from "./app.js";



export const tablaRegistro = (nombre, monto) => {
    const tabla = document.querySelector(".tabla");

    const row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = `
        <div class=" mini-tabla col border border-dark d-flex justify-content-center ">${nombre}</div>
        <div class=" mini-tabla col border border-dark d-flex justify-content-center ">${monto}</div>
        <div class="col">
            <img src="assets/img/dumpster.png" class="basurero-item col item-basurero">
        </div>
    `;

    tabla.appendChild(row);

    
    let basurero = document.querySelector(".item-basurero");
    
    basurero.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
    });
};





    
