# Cloudflare Pages deployment

This is a static HTML site. Deploy the repository root directly to Cloudflare Pages; no build command is needed.

## Estimate-form webhook

The homepage estimate form submits to the Pages Function at `/api/estimate`, which forwards leads to n8n without exposing the webhook URL to the browser.

For local development, put the n8n webhook URL in the ignored `.env` file:

```dotenv
N8N_WEBHOOK_URL=https://your-n8n-instance.example/webhook/your-webhook-id
```

For deployed environments, add `N8N_WEBHOOK_URL` as an encrypted secret in **Workers & Pages → this project → Settings → Variables and Secrets**. Set it for both Preview and Production before deploying.

## Project setup

1. Install dependencies with `npm install`.
2. Run `npm run cloudflare:login` and complete the Cloudflare browser authorization.
3. Run `npm run cloudflare:dev`, then open `http://127.0.0.1:8788/` to preview the Pages routing locally.
4. Run `npm run cloudflare:deploy` to create (if needed) and deploy the Pages project named `water-damage-cleanup-houston` from the repository root.
5. Confirm the generated `pages.dev` URL works before attaching the production hostname.

## Domain setup

1. Open the Pages project, then choose **Custom domains** > **Set up a domain**.
2. Enter `water-damage-cleanup-houston.com` and let Cloudflare create or confirm the required DNS record.
3. Add `www.water-damage-cleanup-houston.com` as a second custom domain and redirect it to the apex domain with a Cloudflare Redirect Rule.
4. Wait for the domain status to become **Active** and Cloudflare SSL to finish provisioning.

## Included Pages support

Cloudflare Pages automatically serves each static HTML page at its clean URL, such as `/about` for `about.html`, and redirects direct `.html` requests to that canonical URL. Internal navigation retains direct `.html` paths so the site also works in plain static previews.
