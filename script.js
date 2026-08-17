const header = document.querySelector("[data-header]");
const story = document.querySelector("[data-story]");
const steps = [...document.querySelectorAll("[data-step]")];
const number = document.querySelector("[data-stage-number]");
const label = document.querySelector("[data-stage-label]");
const progress = document.querySelector(".stage-progress i");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const chapters = [
  ["01", "Organizar o ritmo"],
  ["02", "Conhecer cada atleta"],
  ["03", "Controlar o financeiro"],
  ["04", "Fazer crescer o teu espaço"],
];

function setStoryState() {
  if (!story || reducedMotion) return;
  const max = story.offsetHeight - window.innerHeight;
  const raw = (window.scrollY - story.offsetTop) / Math.max(max, 1);
  const bounded = Math.max(0, Math.min(0.999, raw));
  const active = Math.min(3, Math.floor(bounded * 4));
  story.dataset.active = active;
  number.textContent = chapters[active][0];
  label.textContent = chapters[active][1];
  progress.style.width = `${(bounded * 100).toFixed(1)}%`;
  steps.forEach((step, index) => step.classList.toggle("is-active", index === active));
}

function onScroll() {
  header?.classList.toggle("scrolled", window.scrollY > 24);
  setStoryState();
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", setStoryState);
onScroll();

document.querySelector("[data-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  const email = values.get("email");
  const status = form.querySelector(".form-status");
  if (!form.checkValidity()) {
    status.textContent = "Preenche o nome e um email válido para entrares na lista.";
    form.reportValidity();
    return;
  }
  const subject = encodeURIComponent(`Pedido de acesso Racket360 — ${values.get("name")}`);
  const body = encodeURIComponent([
    `Nome: ${values.get("name")}`,
    `Email: ${email}`,
    `Perfil: ${values.get("role")}`,
    "",
    "Enviado através de racket360.com"
  ].join("\n"));
  status.textContent = "A abrir o teu email para enviares o pedido…";
  window.location.href = `mailto:suporte@racket360.com?subject=${subject}&body=${body}`;
});
