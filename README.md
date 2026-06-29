# ARTA Personal CV Website

A personal CV and portfolio website for ARTA, focused on medicine, neuroscience, neurotechnology, Python, research, books, and future-facing academic growth.

## Project Overview

This is a static GitHub Pages-ready website. It uses root-level files only, so it is easy to edit, preview, and deploy.

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript

## Preview Locally

Open `index.html` directly in your browser, or run a local server from this folder:

```bash
python -m http.server 8008
```

Then open `http://127.0.0.1:8008/index.html`.

## Deploy On GitHub Pages

1. Upload these files to a GitHub repository.
2. Open the repository settings.
3. Go to Pages.
4. Choose deploy from the `main` branch and `/root` folder.
5. Save and wait for the GitHub Pages link.

## Customize Content

Edit the text directly in the HTML files. The main pages are:

- `index.html`: homepage, skill tree, status panel, Beyond the Lab.
- `research.html`: research interests and future lab direction.
- `projects.html`: project cards and startup descriptions.
- `journey.html`: checkpoint timeline.
- `books.html`: books, reviews, and reading system.
- `cv.html`: strict printable academic CV.
- `contact.html`: email, GitHub, and LinkedIn.

## Add A New Book Review

Open `books.html`, find the commented book card template, copy it into the empty book review section, and replace the title, author, rating, tags, notes, and Goodreads link.

The Goodreads profile link currently points to:

https://www.goodreads.com/user/show/98875928-arta

## Replace Logo Or Favicon

To replace the logo, add `logo.png` to this folder and replace the navbar text mark with:

```html
<img src="logo.png" alt="ARTA logo">
```

To add a favicon, add `favicon.png` and uncomment this line in each page head:

```html
<link rel="icon" type="image/png" href="favicon.png">
```

## Replace Or Disable The Cat Companion

The cat is a tiny CSS shape in `style.css`, moved by `main.js`.

To disable it, remove this line from the non-CV HTML pages:

```html
<div class="cat-companion" aria-hidden="true"></div>
```

Or set this in `style.css`:

```css
.cat-companion { display: none; }
```

To replace it later with an image, add `cat.png` and update `.cat-companion` in `style.css` with a background image.

## Edit The Printable CV

Open `cv.html` and edit the content inside `.cv-document`. Print styling is controlled by `print.css`.

## License

Source code may be licensed under MIT if a LICENSE file exists.

Personal content, CV information, images, biography, branding, book reviews, and written material are Copyright (c) Arta Hashemi / ARTA. All rights reserved.
