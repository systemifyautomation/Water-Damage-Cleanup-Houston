const comparisons = document.querySelectorAll("[data-comparison]");

comparisons.forEach((comparison) => {
  const range = comparison.querySelector("[data-comparison-range]");
  const setPosition = (value) => {
    comparison.style.setProperty("--comparison-position", `${value}%`);
  };

  setPosition(range.value);
  range.addEventListener("input", () => setPosition(range.value));
});
