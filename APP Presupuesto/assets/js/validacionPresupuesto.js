export const validacionPresupuesto = ( valor ) => {
    // valor = parseInt( valor )
    const mensaje = document.querySelector(".presupuesto-mensaje");
    
    ( !isNaN(valor) ? "" : mensaje.textContent= " Asegúrate de ingresar tu presupuesto en el formato correcto" )
    const puntuacion = ( valor ) => {

        const numeroStr = [];
        
        for(let n = 0 ; n < valor.length ; n++ ){
            numeroStr.shift(n)
        }
    } 

}
const agregarPuntos = (cadena) => {
    if (typeof cadena === 'string') {
        const digitos = cadena.replace(/\D/g, "");
        const digitosConPuntos = [];

        for (let i = digitos.length - 1; i >= 0; i--) {
            digitosConPuntos.unshift(digitos[i]);
            if ((digitos.length - i) % 3 === 0 && i > 0) {
                digitosConPuntos.unshift(".");
            }
        }

        const cadenaConPuntos = digitosConPuntos.join("");
        return cadenaConPuntos;
    } else {
        console.error("La variable 'cadena' no es una cadena de texto.");
        return cadena; 
    }
};




export {agregarPuntos};

