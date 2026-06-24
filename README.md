# Nav Can Movers Express · Nav Can Déménagement Express

Bilingual (FR/EN) marketing site for **Nav Can Movers Express** — Marketplace pickup & furniture delivery across Montreal.

Single-page static site: `index.html` + `site.js`, no build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8170
# then visit http://localhost:8170
```

## Structure

- `index.html` — page markup + inline styles
- `site.js` — i18n (FR/EN), scroll motion, parallax, frosted header, scroll progress
- `assets/img/` — photography (pristine white pickup + cargo van fleet)
- `assets/video/hero.mp4` — hero background clip
- `generate_images.py` / `generate_hero_video.py` — fal.ai generation scripts (require a `FAL_KEY` environment variable)

## Contact

📞 514-999-9176 · ✉️ navcanmovers@gmail.com · Montreal, QC
