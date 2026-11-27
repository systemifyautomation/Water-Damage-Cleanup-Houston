# Story Page Standard

Use this exact page sequence for every new homeowner story. Michael's page, `michaels-story.html`, is the reference implementation.

## Fixed Page Structure

1. **Story hero**
   - Eyebrow: `Homeowner Story`
   - H1: `[First Name]'s Story`
   - One-sentence outcome-focused introduction
   - Use `class="hero story-hero"`

2. **Story introduction and images**
   - Intro: `This is [First Name]'s story.`
   - Two images side by side:
     - Portrait or personal image of the homeowner
     - Image showing the initial damage
   - Use `story-image-pair story-image-pair--intro`

3. **Narrative**
   - One first-person story inside `<blockquote class="story-quote">`
   - Keep the story in paragraphs; do not add subsection headings inside the narrative.
   - Use opening and closing quotation marks.

4. **Before and After**
   - H2: `Before and After`
   - A one-sentence introduction
   - Two interactive comparison sliders using the `comparison` component:
     - Pair one: before and after image set
     - Pair two: before and after image set
   - Every slider needs meaningful labels, alt text, titles, and a caption.

5. **CTA**
   - H2: `Need Help With Water Damage?`
   - One short, practical sentence
   - `Get a Free Estimate` button linking to `estimate`

6. **Shared site footer**

## What Changes Per Story

- Person's first name and story title
- Hero introduction
- First-person narrative
- Portrait and initial-damage images
- Two before-and-after image pairs
- Image filenames, alt text, titles, captions, and image-sitemap entries

## Image Requirements

Store every story's files in its own directory:

```text
assets/images/stories/[person-slug]/
```

For each image:

- Use a descriptive filename.
- Add concise, specific `alt` text.
- Add a helpful `title` attribute.
- Add the unique image URL and title to `sitemap-images.xml` under that story page's URL.

## Page Requirements

- Add the page URL to `sitemap.xml`.
- Add a card linking to the new story from `stories.html`.
- Use a unique title, meta description, canonical URL, and one H1.
- Run `npm.cmd run test:site` after creating or updating a story.
