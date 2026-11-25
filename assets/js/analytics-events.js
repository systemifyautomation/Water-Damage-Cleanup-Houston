const pageContext = () => ({
  page_location: window.location.href,
  page_path: window.location.pathname,
  page_title: document.title,
});

// Kept as a no-op until the installed Google tag exposes gtag(). This lets the
// site work normally in local development and with privacy-blocking browsers.
window.trackSiteEvent = (eventName, parameters = {}) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, { ...pageContext(), ...parameters });
};

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.trackSiteEvent("phone_call_click", {
      link_location: link.closest("header") ? "header" : link.closest("footer") ? "footer" : "content",
      link_text: link.textContent.trim().slice(0, 80),
    });
  });
});
