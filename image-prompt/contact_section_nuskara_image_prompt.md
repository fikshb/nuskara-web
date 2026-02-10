# Contact Section — AI Image Generation Prompt

> **Project**: Nuskara Holding Website (nuskara.co.id)
> **Section**: Contact Us — full section background
> **Dimension**: 1920 x 800 px (landscape wide, ~2.4:1)
> **Prepared by**: Senior Designer — Nuskara Brand Team

---

## Design Rationale

Gambar ini menempati **kolom kiri** section Contact Us, di bawah informasi email dan alamat kantor. Section ini adalah titik akhir sebelum footer — kesan terakhir yang diterima pengunjung.

### Tujuan gambar:
1. **Humanize the brand** — setelah seluruh halaman penuh dengan data, statistik, dan diagram, section ini harus terasa "hangat" dan approachable
2. **Kesan melayani** — "kami siap membantu Anda", bukan "kami terlalu besar untuk Anda"
3. **Ramah tapi profesional** — senyum natural, bukan senyum berlebihan. Corporate warmth, bukan customer service generic
4. **Indonesian identity** — model harus terlihat Indonesian/Southeast Asian

### Konteks di website:
- Section background: `bg-neutral-950` (sangat gelap)
- Teks: putih dan putih transparan
- Aksen: crimson (`#B91C1C`)
- Gambar akan ditampilkan dalam container `rounded-lg` dengan kemungkinan gradient overlay di bagian bawah
- Di sebelah kanan ada form card gelap (`bg-neutral-900`)

### Komposisi:
- **Framing**: Half-body atau chest-up (dada ke atas)
- **Subject**: Satu wanita profesional, bukan group photo
- **Gaze**: Melihat ke arah kamera (engaging eye contact) atau sedikit ke samping kanan (arah form)
- **Background**: Blurred office interior atau solid neutral — tidak boleh ramai

---

## Prompt Utama (Recommended)

```json
{
  "prompt": "Professional corporate portrait of a young Indonesian woman in her late 20s to early 30s, wearing a tailored dark blazer over a white blouse, smiling warmly and naturally at the camera. She has neat dark hair, minimal professional makeup, and a confident yet approachable expression. Shot from chest up in a modern office environment with soft, warm ambient lighting. The background is a blurred premium office interior with warm neutral tones and subtle hints of glass and wood. The lighting is soft and flattering, coming from the left side, creating gentle shadows. The overall mood is welcoming, professional, and trustworthy. Studio-quality corporate headshot photography, shallow depth of field, warm color grading with neutral and amber tones, portrait orientation.",
  "negative_prompt": "Western face, Caucasian, blonde hair, heavy makeup, overly glamorous, fashion model pose, casual clothing, t-shirt, outdoor, nature, blue tones, cold lighting, harsh shadows, cartoon, illustration, anime, watermark, text, logo, low quality, blurry, noisy, full body, legs visible, sitting, multiple people, group photo, dental ad smile, exaggerated expression",
  "dimensions": {
    "width": 600,
    "height": 700
  },
  "style": "photorealistic",
  "tags": ["corporate portrait", "Indonesian woman", "professional", "warm", "approachable", "headshot"]
}
```

---

## Variasi Alternatif

### Variasi A — Hijab Professional (inklusif)

```json
{
  "prompt": "Professional corporate portrait of a young Indonesian woman wearing a neatly styled hijab in dark neutral color, paired with a tailored dark blazer and white blouse. She has a warm, genuine smile and confident posture, looking directly at the camera. Shot from chest up against a softly blurred modern office background with warm lighting. The hijab is elegantly styled in a professional manner suitable for a corporate environment. Soft directional lighting from the left creates a flattering, editorial quality. The mood is welcoming, competent, and approachable. High-end corporate photography, shallow depth of field, warm neutral color palette with subtle amber highlights, portrait orientation.",
  "negative_prompt": "Western face, casual hijab style, outdoor, bright colors, neon, heavy makeup, fashion editorial, full body, multiple people, cartoon, illustration, text, watermark, cold tones, blue lighting, low quality, blurry, harsh shadows, overexposed",
  "dimensions": {
    "width": 600,
    "height": 700
  },
  "style": "photorealistic",
  "tags": ["corporate portrait", "hijab", "Indonesian woman", "professional", "inclusive", "warm"]
}
```

### Variasi B — Warmer Tone with Crimson Accent (lebih branded)

```json
{
  "prompt": "Professional corporate portrait of a young Indonesian woman in her late 20s, wearing a dark charcoal blazer with a subtle deep crimson blouse underneath, smiling naturally with a confident and welcoming expression. She has dark hair pulled back neatly, light professional makeup, and is looking slightly to her right with a friendly gaze. Shot from chest up in a premium corporate setting. The background is a soft bokeh of a modern office with warm amber and deep crimson accent lighting visible as gentle color reflections. The key light is warm and soft from the left, with a subtle rim light on the right side creating depth. The overall atmosphere is premium, institutional, and human. High-end studio portrait photography, rich warm tones with deep red undertones matching corporate branding, portrait composition.",
  "negative_prompt": "Western face, Caucasian, blonde, casual, outdoor, nature, cold tones, blue, green dominant, harsh flash, flat lighting, cartoon, illustration, anime, text, watermark, full body, sitting, multiple people, over-retouched, plastic skin, fashion pose, exaggerated smile",
  "dimensions": {
    "width": 600,
    "height": 700
  },
  "style": "photorealistic",
  "tags": ["corporate portrait", "branded", "crimson accent", "Indonesian", "premium", "warm lighting"]
}
```

### Variasi C — Soft Smile, Lebih Subtle (paling institutional)

```json
{
  "prompt": "Elegant corporate portrait of a composed Indonesian woman in her early 30s, wearing a perfectly tailored black blazer, with a soft, subtle smile that conveys quiet confidence and professionalism. Her expression is calm and assured rather than broadly smiling. She has dark hair styled in a professional low bun or straight shoulder-length cut, minimal jewelry, and natural makeup. Shot from chest up with a clean, minimalist background — soft warm gray gradient or subtly lit neutral wall. The lighting is refined and directional, creating gentle dimensionality. The mood is institutional, trustworthy, and quietly welcoming — the face of a company you would trust with serious matters. Premium editorial corporate photography, muted warm tones, shallow depth of field, portrait orientation.",
  "negative_prompt": "Western face, big toothy grin, laughing, casual, colorful clothing, busy background, outdoor, cartoon, illustration, text, watermark, full body, fashion model, overly retouched, cold blue tones, harsh shadows, low quality, noisy",
  "dimensions": {
    "width": 600,
    "height": 700
  },
  "style": "photorealistic",
  "tags": ["institutional", "subtle smile", "elegant", "Indonesian", "corporate", "composed"]
}
```

---

## Parameter untuk Berbagai Platform

### Midjourney

```
/imagine prompt: [paste prompt] --ar 6:7 --style raw --s 200 --q 2 --no Western face, Caucasian, cartoon, blue tones, full body
```

### DALL-E 3 / ChatGPT

Gunakan prompt langsung. Set ukuran ke **portrait (1024x1792)** lalu crop/resize ke 600x700.

### Stable Diffusion (SDXL / Flux)

```json
{
  "positive_prompt": "[prompt utama atau variasi]",
  "negative_prompt": "[negative prompt]",
  "width": 576,
  "height": 704,
  "cfg_scale": 7,
  "steps": 35,
  "sampler": "DPM++ 2M Karras",
  "model": "juggernautXL / realvisXL / flux-dev"
}
```

> Note: SDXL optimal di kelipatan 64. Gunakan 576x704 lalu resize ke 600x700.

### Leonardo AI / Ideogram

Gunakan prompt utama, pilih style **"Photography"** atau **"Portrait"**, aspect ratio **portrait**.

---

## Post-Processing Notes

1. **Color Grading** — Push warm tones, pastikan skin tone natural (jangan terlalu orange atau pink)
2. **Background** — Jika terlalu terang, darken sedikit supaya harmoni dengan section gelap
3. **Bottom fade** — Optional: gradient gelap di bottom 10% untuk transisi smooth ke container edge
4. **Skin retouching** — Minimal, jangan over-smooth. Harus terlihat natural dan real
5. **Contrast** — Pastikan cukup kontras supaya terlihat baik di dark background section

### Color Reference

| Token | Hex | Relevansi |
|-------|-----|-----------|
| Primary Crimson | #B91C1C | Aksen pakaian (Variasi B) |
| Accent Gold / Amber | #D4A574 | Warm lighting tones |
| Neutral 950 | #0A0A0A | Section background (gambar harus harmoni) |
| Neutral 900 | #171717 | Form card di sebelah kanan |

---

## Rekomendasi

**Prompt Utama** adalah pilihan paling aman — blazer gelap + blouse putih + senyum hangat. Universal, profesional, tidak terlalu stylized.

**Variasi A** jika ingin representasi yang lebih inklusif (hijab). Cocok untuk konteks Indonesia yang mayoritas Muslim.

**Variasi B** jika ingin gambar yang lebih "branded" dengan aksen crimson dari pakaian dan lighting.

**Variasi C** jika ingin kesan yang lebih serius/institutional — senyum lebih subtle, lebih "boardroom-ready".

> "The image should make a visitor feel: 'I can trust this company, and they will take care of my inquiry.'"
