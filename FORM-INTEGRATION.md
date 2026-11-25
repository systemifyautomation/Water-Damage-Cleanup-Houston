# Reusable estimate form

Copy the complete contents of `components/estimate-form.html` into a page that already loads `assets/style.css` and `assets/main.js`.

Set `data-form-name` to a unique source label for the new page, for example `data-form-name="memorial_landing_estimate"`. The shared JavaScript then handles phone formatting, multi-select behavior, outside-click closing, GA4 lead tracking, page/UTM attribution, validation, and submission to `/api/estimate`, which forwards the lead to the configured n8n webhook.

Use only one `data-estimate-form` form per page. If the form is copied into a page with another form, change the element IDs and their matching label references to keep IDs unique.
