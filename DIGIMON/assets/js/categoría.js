import { crearDivs } from "./crearDivs.js";

const traerSeleccion = (seleccion) => {
  $.ajax({
    type: "get",
    url: `https://digimon-api.vercel.app/api/digimon`,
    dataType: "json",
    success: function (response) {
      console.log(response)
      crearDivs(response, seleccion);
    },
  });
};

const selecciones = document.getElementById("seleccion");

selecciones.addEventListener("change", () => {
  const opcionSeleccionada = selecciones.options[selecciones.selectedIndex];
  const seleccion = opcionSeleccionada.textContent;

  traerSeleccion(seleccion);
  
});

   

