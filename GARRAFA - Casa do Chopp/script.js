
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");

    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
    toggle.setAttribute(
      "aria-label",
      open ? "Fechar menu" : "Abrir menu"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");

      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
      toggle.textContent = "☰";
    });
  });
}







const checkboxes = document.querySelectorAll(
  'input[name="opcao"]'
);

const feedback = document.querySelector(
  "#selecao-feedback"
);

const botaoWhatsApp = document.querySelector(
  "#enviar-whatsapp"
);

// Atualiza o texto conforme as opções selecionadas.
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selecionadas = Array.from(checkboxes)
      .filter((item) => item.checked)
      .map((item) => item.value);

    if (selecionadas.length === 0) {
      feedback.textContent = "Nenhuma opção selecionada.";
    } else {
      feedback.textContent =
        `Opções selecionadas: ${selecionadas.join(", ")}`;
    }
  });
});

// Abre o WhatsApp com a mensagem preenchida.
botaoWhatsApp.addEventListener("click", () => {
  const selecionadas = Array.from(checkboxes)
    .filter((item) => item.checked)
    .map((item) => item.value);

  if (selecionadas.length === 0) {
    feedback.textContent =
      "Selecione pelo menos uma opção antes de continuar.";

    return;
  }

  const numeroWhatsApp = "5511978855755";

  const mensagem =
  `Olá! Gostaria de saber sobre:\n\n- ${selecionadas.join("\n- ")}`;

  const url =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});
