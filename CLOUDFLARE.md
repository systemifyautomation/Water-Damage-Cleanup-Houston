# Cloudflare Pages deployment

This is a static HTML site. Deploy the repository root directly to Cloudflare Pages; no build command is needed.

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

The `_redirects` file preserves clean canonical URLs such as `/about` by rewriting them to their static `.html` files. Internal navigation uses direct `.html` paths so it also works in plain static previews.
