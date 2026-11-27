function initializeNavigation() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("navlinks");
  if (!toggle || !links) return;
  const storyLink = links.querySelector('a[href="stories"], a[href="stories.html"]');
  const contactLink = links.querySelector('a[href="contact"], a[href="contact.html"]');
  if (storyLink && contactLink) {
    contactLink.closest("li")?.remove();
  } else if (contactLink) {
    contactLink.href = "stories";
    contactLink.textContent = "Stories";
  }
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
