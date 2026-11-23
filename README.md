# Google Docs Essentials

A static, no-build training site. Plain HTML, CSS and JavaScript.

## Files

- `index.html` – page shell
- `styles.css` – design
- `app.js` – all course content (lessons, quiz, capstone, shortcuts) and the page router
- `netlify.toml` – Netlify settings (publishes the repo root, adds basic security headers)

## Deploy

1. Create a GitHub repository and upload these files at the repo root (or `git init`, `git add .`, `git commit`, `git push`).
2. In Netlify choose **Add new site > Import an existing project**, connect GitHub and pick the repo.
3. Leave the build command empty. Publish directory is `.` (already set in `netlify.toml`).
4. Click **Deploy**. Every push to GitHub redeploys automatically.

## Test locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Edit content

Lessons are the `LESSONS` array at the top of `app.js`. Each has `id`, `t` (title), `goal`, `steps`, `try` and `check` fields. Quiz questions are in `QUIZ` as `[question, [options], correctIndex]`.

## Certificate

The quiz is the final assessment. Students who score `PASS` (default 8 of 10, set in `app.js`) can type their name and get a PNG certificate drawn in the browser. They can download it or, on phones that support it, share the image directly. Nothing is uploaded or stored.

The quiz runs in the student's browser, so it is an honor-system check: a determined student could view the page source or type any name. For graded or official use, collect the capstone link as well.

## Notes

- Progress ticks are saved in the student's own browser (localStorage). They are private to that device and are not collected.
- Pages use `#` links (for example `/#l3`), so no redirect rules are needed.
- Adding the next app (Sheets, Slides, ...): copy the `LESSONS` pattern into new arrays and add them to `PAGES`.
