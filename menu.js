
// =========================================================
// MENU RESPONSIVO
// =========================================================

// Localizamos o botão do menu e a lista de navegação.
const menuToggle = document.querySelector("#menu-toggle");
const mainMenu = document.querySelector("#main-menu");

// Verificamos se os elementos existem antes de adicionar o evento.
if (menuToggle && mainMenu) {

  // Ao clicar, adicionamos ou removemos a classe "open".
  menuToggle.addEventListener("click", () => {

    const menuAberto = mainMenu.classList.toggle("open");

    // Atualiza o atributo de acessibilidade.
    menuToggle.setAttribute("aria-expanded", menuAberto);

    // Troca o símbolo do botão.
    menuToggle.textContent = menuAberto ? "✕" : "☰";
  });
}
