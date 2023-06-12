const nombreGasto = document.querySelector("nombre-gasto");
const montoGasto = document.querySelector("monto-gasto");
const mensaje = document.querySelector("mensaje-gasto");


export const validacionGasto = ( nombreGasto, montoGasto ) => {
    if( nombreGasto.length == 0 || montoGasto.length == 0 ){
        return mensaje.textContent = " Debes ingresar el nombre y el monto del gasto al mismo tiempo "
    }
    else if( nombreGasto.length == 0 ){
        return  mensaje.textContent = " Debes ingresar el nombre del gasto "
    }
    else if( montoGasto.length == 0 ){
        return mensaje.textContent = " Debes ingresar el monto del gasto"
    }
    else {

    }
};

