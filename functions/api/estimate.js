const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8" },
});

const clean = (value, maxLength = 2000) => String(value || "").trim().slice(0, maxLength);
const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"];

const cleanTracking = (tracking) => Object.fromEntries(
  trackingKeys
    .filter((key) => tracking && tracking[key])
    .map((key) => [key, clean(tracking[key], 500)]),
);

export async function onRequestPost(context) {
  let input;
  try {
    input = await context.request.json();
  } catch {
    return json({ ok: false, message: "Please submit the form again." }, 400);
  }

  if (clean(input.website)) return json({ ok: true });

  const lead = {
    name: clean(input.name, 120),
    phone: clean(input.phone, 60),
    email: clean(input.email, 160),
    services: (Array.isArray(input.services) ? input.services : [input.service])
      .map((service) => clean(service, 120))
      .filter(Boolean)
      .slice(0, 10),
    details: clean(input.details),
    submittedAt: new Date().toISOString(),
    source: "website estimate form",
    page: clean(input.page, 200),
    pageUrl: clean(input.pageUrl, 2000),
    domain: clean(input.domain, 255),
    referrer: clean(input.referrer, 2000),
    trafficSource: clean(input.trafficSource, 120),
    tracking: cleanTracking(input.tracking),
  };

  if (!lead.name || !lead.phone || !lead.email || !lead.services.length) {
    return json({ ok: false, message: "Please complete all required fields." }, 400);
  }

  const webhookUrl = context.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return json({ ok: false, message: "The estimate form is not configured yet." }, 503);
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
  } catch {
    return json({ ok: false, message: "We could not send your request. Please call us instead." }, 502);
  }

  return json({ ok: true, message: "Thanks - we received your estimate request." });
}
