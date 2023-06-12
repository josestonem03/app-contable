import { mostrarModal } from "./modal.js";

export const crearDivs = (response, seleccion) => {
  const main = document.querySelector("#main");
  const containerPrincipal = document.createElement("div");
  containerPrincipal.classList.add("contenedor");
  const container = document.createElement("div");
  container.classList.add("shadow");
  container.classList.add("contenedor-interno");

  main.innerHTML = "";
  const elementosHTML = response
    .filter((d) => d.level.toLowerCase() === seleccion.toLowerCase())
    .map((digimon) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");

      const digimonData = {
        name: digimon.name,
        level: digimon.level,
        image: digimon.img,
      };
      cardContainer.dataset.digimon = JSON.stringify(digimonData);

      cardContainer.addEventListener("click", (event) => {
        const digimonDataString = event.currentTarget.dataset.digimon;
        const digimonObj = JSON.parse(digimonDataString);
        mostrarModal(digimonObj);
      });

      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");

      const imgDigimon = document.createElement("img");
      imgDigimon.src = digimon.img;
      imgDigimon.classList.add("image");
      imgContainer.appendChild(imgDigimon);

      const contentContainer = document.createElement("div");
      contentContainer.classList.add("content-container");

      const nombreDigimon = document.createElement("h3");
      nombreDigimon.textContent = digimon.name + "/";
      contentContainer.appendChild(nombreDigimon);

      const nivelDigimon = document.createElement("h3");
      nivelDigimon.textContent = digimon.level;
      contentContainer.appendChild(nivelDigimon);

      cardContainer.appendChild(imgContainer);
      cardContainer.appendChild(contentContainer);

      return cardContainer;
    });

  containerPrincipal.append(...elementosHTML);
  container.appendChild(containerPrincipal);
  main.appendChild(container);
};
