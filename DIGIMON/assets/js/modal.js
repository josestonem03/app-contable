const mostrarModal = (digimon) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>${digimon.name}</h2>
        <img src="${digimon.image}" alt="${digimon.name}" class="modal-image">
        <h3>Nivel: ${digimon.level}</h3>
        </div>
    `;
  
    const closeButton = modal.querySelector(".close");
    closeButton.addEventListener("click", () => {
      modal.remove();
    });
  
    document.body.appendChild(modal);
  };
  
  export { mostrarModal };
  