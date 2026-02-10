# Hero Section — AI Image Generation Prompt

> **Project**: Nuskara Holding Website (nuskara.co.id)
> **Section**: Hero Background
> **Dimension**: 1563 x 1024 px (landscape, ~3:2)
> **Prepared by**: Senior Designer — Nuskara Brand Team

---

## Design Rationale

Image hero harus menyampaikan **otoritas institusional** — bukan operator, bukan kontraktor.
Perspektif visual: "melihat dari atas" — metafora holding company yang mengawasi, bukan yang turun ke lapangan.

Referensi existing (BG frame 1) menggabungkan city skyline + executive office dalam double exposure merah.
Prompt ini mempertahankan DNA visual tersebut, tetapi lebih **cerah, lebih tajam, lebih premium**.

### Yang harus terasa dalam 3 detik pertama:
1. "Ini institusi besar"
2. "Ini bukan pemain kecil"
3. "Ini pusat kendali, bukan lapangan kerja"

### Komposisi penting:
- **Sisi kiri** harus relatif gelap / sederhana — area ini akan ditimpa headline text putih
- **Sisi kanan** boleh lebih detail — subsidiary cards akan overlay di sini
- **Bagian bawah** akan di-gradient fade ke putih

---

## Prompt Utama (Recommended)

```json
{
  "prompt": "Panoramic view from inside a modern executive corner office on a high floor, looking out through floor-to-ceiling glass windows at a sprawling metropolitan city skyline at golden hour. The office interior is minimal and premium — polished dark marble floor, a sleek conference table edge visible in the foreground. The city outside shows towering skyscrapers with warm sunset light casting long amber and deep crimson tones across the buildings. Volumetric light rays streaming through the glass creating angular geometric light streaks across the scene. The atmosphere is powerful, calm, and institutional. Shot from a commanding elevated perspective suggesting authority and strategic oversight. Cinematic wide-angle composition, architectural photography style, ultra-sharp details, warm red and amber color palette with dark shadows.",
  "negative_prompt": "people, workers, hard hats, construction equipment, heavy machinery, industrial tools, factories, smoke stacks, blue tones, cold lighting, cartoon, illustration, anime, watermark, text, logo, low quality, blurry, noisy, overexposed, fisheye distortion, cluttered desk, computer screens",
  "dimensions": {
    "width": 1563,
    "height": 1024
  },
  "style": "photorealistic",
  "tags": ["architectural photography", "cinematic", "golden hour", "corporate", "executive", "premium"]
}
```

---

## Variasi Alternatif

### Variasi A — Double Exposure Style (paling mirip existing)

```json
{
  "prompt": "Cinematic double exposure composition blending a modern metropolitan skyline at sunset with a luxurious executive boardroom interior. The city skyline dominates the left and center, showing sleek glass skyscrapers bathed in deep crimson and warm amber sunset light. The boardroom elements — floor-to-ceiling windows, polished surfaces, geometric architectural details — blend seamlessly on the right side. Angular rays of light cut diagonally across the frame creating dynamic geometric overlays. The overall tone is deep red and dark maroon with warm golden highlights. Mood is authoritative, institutional, and commanding. Ultra-wide landscape composition, high-end architectural photography, sharp focus throughout, rich contrast.",
  "negative_prompt": "people, workers, construction, industrial equipment, hard hats, blue tones, cold colors, cartoon, illustration, text, watermark, low quality, blurry, cluttered, messy, cheap looking",
  "dimensions": {
    "width": 1563,
    "height": 1024
  },
  "style": "photorealistic",
  "tags": ["double exposure", "cinematic", "corporate authority", "red tones", "skyline"]
}
```

### Variasi B — Cleaner & Brighter (lebih modern, lebih terang)

```json
{
  "prompt": "A stunning wide-angle view from the top floor of a modern glass skyscraper looking out over a major Asian city skyline during golden hour. The interior shows a pristine executive lounge with minimal furniture — low-profile seating and a glass partition reflecting the city lights. Warm sunlight floods the scene creating beautiful lens flares and geometric light patterns on the polished floor. The sky transitions from deep crimson red near the horizon to warm amber and soft rose tones above. The cityscape features a mix of modern towers and infrastructure suggesting a thriving economic center. The composition has a darker, more atmospheric left third transitioning to a brighter, more detailed right side. Premium architectural photography, cinematic color grading with dominant warm red and gold palette, 8K detail.",
  "negative_prompt": "people, crowds, industrial, factories, blue sky, cold tones, overcast, rain, night time, neon lights, cartoon, anime, illustration, text, logo, watermark, noise, grain, blur",
  "dimensions": {
    "width": 1563,
    "height": 1024
  },
  "style": "photorealistic",
  "tags": ["bright", "modern", "executive", "skyline", "golden hour", "premium"]
}
```

### Variasi C — Abstract Architectural (paling bold, paling branded)

```json
{
  "prompt": "Abstract architectural composition of intersecting glass and steel structures of modern skyscrapers shot from a dramatic low-to-high angle, with deep crimson red and dark maroon color grading. Geometric angular shapes formed by building edges and reflections create a powerful visual rhythm. Warm golden hour sunlight penetrates between the structures casting sharp diagonal light beams and lens flares. The reflection in the glass shows a city skyline stretching to the horizon. The mood is monumental, institutional, and commanding — like looking up at the gates of power. Left side is darker and more abstract, right side reveals more architectural detail and warm light. Ultra-sharp architectural photography, dramatic lighting, rich contrast, cinematic aspect ratio.",
  "negative_prompt": "people, nature, trees, parks, green, blue sky, clouds, construction crane, scaffolding, cartoon, illustration, soft focus, blur, low quality, watermark, text",
  "dimensions": {
    "width": 1563,
    "height": 1024
  },
  "style": "photorealistic",
  "tags": ["abstract architecture", "geometric", "monumental", "dramatic", "crimson"]
}
```

---

## Parameter untuk Berbagai Platform

### Midjourney

```
/imagine prompt: [paste prompt utama] --ar 1563:1024 --style raw --s 250 --q 2 --no people, workers, construction, industrial, blue tones, cartoon
```

### DALL-E 3 / ChatGPT

Gunakan prompt utama langsung. Set ukuran ke **landscape (1792x1024)** lalu crop manual ke 1563x1024.

### Stable Diffusion (SDXL / Flux)

```json
{
  "positive_prompt": "[prompt utama]",
  "negative_prompt": "[negative prompt]",
  "width": 1536,
  "height": 1024,
  "cfg_scale": 7.5,
  "steps": 35,
  "sampler": "DPM++ 2M Karras",
  "model": "juggernautXL / realvisXL / flux-dev"
}
```

> Note: SDXL optimal di kelipatan 64. Gunakan 1536x1024 lalu upscale/crop ke 1563x1024.

### Leonardo AI / Ideogram

Gunakan prompt utama, pilih style **"Photography"** atau **"Cinematic"**, aspect ratio **landscape**.

---

## Post-Processing Notes

Setelah generate, lakukan adjustment berikut di Photoshop/Figma:

1. **Color Grading** — Push shadows ke deep maroon (#7F1D1D), highlights ke warm amber
2. **Gradient Overlay** — Tambah `linear-gradient(to right, rgba(10,10,10,0.85), rgba(10,10,10,0.3))` untuk text readability di kiri
3. **Geometric Lines** — Overlay garis diagonal tipis (1-2px, white 5% opacity) untuk angular effect khas Nuskara
4. **Bottom Fade** — Gradient putih di bottom 15% frame untuk transisi ke section berikutnya
5. **Sharpening** — Unsharp mask ringan untuk web crispness

### Color Reference (dari Brand Blueprint)

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| Primary Crimson | #B91C1C | Dominant tone |
| Primary Dark | #7F1D1D | Shadow areas |
| Accent Gold | #D4A574 | Highlight / sunlight |
| Neutral 950 | #0A0A0A | Deepest shadows |

---

## Rekomendasi

**Prompt Utama** adalah pilihan terbaik — perspektif "melihat dari dalam ruang eksekutif ke kota" paling kuat menyampaikan positioning Nuskara sebagai holding authority yang mengawasi dari atas.

**Variasi B** sebagai backup jika ingin feel yang lebih terang dan modern.

**Variasi A** jika ingin tetap sangat dekat dengan existing BG frame 1.

> "The image should make a board member feel like they're looking at their own office view — familiar, powerful, and in control."
