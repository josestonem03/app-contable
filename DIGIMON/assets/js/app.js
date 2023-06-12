const mensajeError = () => {
    const errorMensaje = document.querySelector("#mensaje-error");
    errorMensaje.innerText = "Por favor, ingresa un nombre de Digimón válido";
}

const traerDigimon = (nombreDigimon) => {
    const nameDigimon = document.getElementById("display-name-digimon");
    const imgContainer = document.getElementById("img-dg");
    const nivelDigimon = document.getElementById("nivel-digimon");
    $.ajax({
        type: "get",
        url: `https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`,
        dataType: "json",
        success: function (response) {
            console.log(response)
            const digimon = response.find(d => d.name.toLowerCase() === nombreDigimon.toLowerCase());
            if (digimon) {
                nameDigimon.innerText = `Nombre: ${digimon.name}`;
                nivelDigimon.innerText = `Nivel: ${digimon.level}`;
                const imgDigimon = document.createElement("img");
                imgDigimon.src = digimon.img;
                imgContainer.innerHTML = ''; // Limpiar el contenido previo del contenedor
                imgContainer.appendChild(imgDigimon);
            } 
            
        }
    });
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const nombreDigimon = document.querySelector("#nombre-digimon").value;
    nombreDigimon.length !== 0 ? traerDigimon(nombreDigimon) : mensajeError();
});



let i = 0;
let txt = 'Ingrese el nombre del Digimon que deseas...'; 
let speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("nombre-digimon").placeholder += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter; 
