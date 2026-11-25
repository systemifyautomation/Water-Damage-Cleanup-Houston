const form = document.querySelector("[data-estimate-form]");

if (form) {
  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector("button[type=submit]");
  const servicesSummary = form.querySelector("[data-services-summary]");
  const serviceInputs = [...form.querySelectorAll("input[name=services]")];

  const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"];
  const query = new URLSearchParams(window.location.search);
  const tracking = Object.fromEntries(
    trackingKeys
      .filter((key) => query.has(key))
      .map((key) => [key, query.get(key)]),
  );

  const pageName = window.location.pathname === "/" || window.location.pathname.endsWith("/index.html")
    ? "home"
    : window.location.pathname.replace(/^\/+|\/+$/g, "") || "home";

  const referrerHost = document.referrer ? new URL(document.referrer).hostname : "";
  const trafficSource = tracking.utm_source
    || (tracking.gclid ? "google-ads" : "")
    || (tracking.fbclid ? "facebook" : "")
    || (/google\./i.test(referrerHost) ? "google-organic" : "")
    || (/(facebook|instagram)\./i.test(referrerHost) ? "meta-organic" : "")
    || (referrerHost ? "referral" : "direct");

  const updateServicesSummary = () => {
    const selected = serviceInputs.filter((input) => input.checked).map((input) => input.value);
    servicesSummary.textContent = selected.length ? selected.join(", ") : "Select one or more services";
  };

  serviceInputs.forEach((input) => input.addEventListener("change", updateServicesSummary));

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.hidden = true;
    submit.disabled = true;
    submit.textContent = "Sending...";

    const formData = new FormData(form);
    const values = {
      ...Object.fromEntries(formData),
      services: formData.getAll("services"),
      page: pageName,
      pageUrl: window.location.href,
      domain: window.location.hostname,
      referrer: document.referrer,
      trafficSource,
      tracking,
    };
    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      status.textContent = result.message || "Please try again.";
      status.hidden = false;
      if (response.ok && result.ok) {
        window.trackSiteEvent?.("generate_lead", {
          lead_type: "estimate_form",
          form_name: "homepage_estimate",
          service_count: values.services.length,
          services: values.services.join(", "),
        });
        form.reset();
        updateServicesSummary();
      }
    } catch {
      status.textContent = "We could not send your request. Please call us instead.";
      status.hidden = false;
    } finally {
      submit.disabled = false;
      submit.textContent = "Request My Free Estimate";
    }
  });
}
