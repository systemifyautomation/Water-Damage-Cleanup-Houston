function initializeNavigation() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("navlinks");
  if (!toggle || !links) return;
  toggle.setAttribute("aria-controls", "navlinks");
  toggle.setAttribute("aria-expanded", "false");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.innerWidth <= 900) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeNavigation, { once: true });
} else {
  initializeNavigation();
}
