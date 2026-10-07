# Swetha Creative Neon Portfolio

A responsive React/Vite portfolio for Swetha Santhoshkumar.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

## Contact form email setup

The contact form uses EmailJS. Create an EmailJS account, connect your email service, create a template, and copy `.env.example` to `.env`.

Then fill in:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

The EmailJS template should use these form variables:

- `from_name`
- `reply_to`
- `subject`
- `message`

Set the recipient/to email in your EmailJS template/service to:

`aksharaswetha04@gmail.com`

Restart Vite after changing `.env`.

## Included assets

- `public/resume.pdf` — uploaded resume
- `public/assets/profile.png` — uploaded professional photo
- `public/assets/certificates/` — uploaded certificates

## Portfolio sections

01 Home
02 About Me
03 Skills
04 Projects
05 Experience
06 Education
07 Certifications
08 Contact

The background is an automatically flowing blue/purple wave field. It does NOT bend, pull, tilt, or react to cursor movement.
