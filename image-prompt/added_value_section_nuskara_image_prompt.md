# Added Value Section — AI Image Generation Prompt

> **Project**: Nuskara Holding Website (nuskara.co.id)
> **Section**: The Nuskara Added Value — "Simplifying Complexity at Scale"
> **Dimension**: 800 x 960 px (portrait, ~5:6)
> **Current Image**: office-team.png (generic Western stock photo — harus diganti)
> **Prepared by**: Senior Designer — Nuskara Brand Team

---

## Design Rationale

Gambar ini menempati **kolom kanan** dari section Added Value, berdampingan dengan teks yang menjelaskan tiga pilar utama Nuskara: K3L (Safety & Compliance), Licensed Operations, dan Integrated Mining Ecosystem.

### Konteks Visual di Website:
- Gambar ditampilkan dalam container `rounded-lg` dengan `shadow-2xl`
- Ada **border offset** dekoratif (merah transparan) di belakang gambar
- Ada **gradient overlay gelap** di bagian bawah gambar
- Ada **badge "2018 / Established"** di pojok kiri bawah (merah solid)
- Tinggi gambar: 400-480px pada desktop, lebar mengikuti kolom grid

### Yang harus disampaikan gambar ini:
1. **Governance & oversight** — bukan operasi lapangan, tapi pengawasan dari level holding
2. **Mining industry** — harus jelas ini industri pertambangan/resources, bukan generic corporate
3. **Safety & compliance** — kesan terstruktur, patuh regulasi, profesional
4. **Scale & integration** — operasi besar, terkoordinasi, multi-subsidiary
5. **Indonesian context** — tidak boleh terlihat seperti perusahaan Barat

### Komposisi penting:
- **Bagian bawah** akan tertutup gradient gelap + badge "2018", jadi detail penting harus di tengah-atas
- Orientasi **portrait** — objek utama harus vertikal-friendly
- Harus tetap terlihat bagus saat di-crop `object-cover` ke rasio ~5:6

---

## Prompt Utama (Recommended)

```json
{
  "prompt": "Professional corporate photography of a modern executive boardroom in a high-rise building with panoramic windows overlooking an Indonesian mining landscape in the distance. In the foreground, a polished dark wood conference table with neatly arranged documents, a hard hat in corporate red placed deliberately on the table as a symbolic prop, and architectural models or site plans visible. The room is bright with warm natural light streaming from the right, creating soft volumetric rays. Through the floor-to-ceiling windows, a distant aerial view of an organized open-pit mining operation and lush green Indonesian terrain is subtly visible, slightly blurred in the background. The atmosphere conveys strategic oversight and institutional control over large-scale operations. No people in the frame. Clean, minimal, premium interior design with dark wood, glass, and steel elements. Warm color palette with deep crimson accents, amber highlights, and neutral tones. Portrait orientation composition, architectural interior photography, sharp focus on foreground details with soft bokeh background.",
  "negative_prompt": "people, faces, workers, hard hats worn by people, construction workers, dirty equipment, factories, smoke, pollution, cartoon, illustration, anime, watermark, text, logo, low quality, blurry, noisy, oversaturated, blue tones, cold lighting, cheap furniture, cluttered, messy desk, computer screens, Western faces",
  "dimensions": {
    "width": 800,
    "height": 960
  },
  "style": "photorealistic",
  "tags": ["corporate governance", "mining oversight", "executive boardroom", "Indonesian", "institutional", "premium"]
}
```

---

## Variasi Alternatif

### Variasi A — Aerial Governance View (metafora "oversight dari atas")

```json
{
  "prompt": "Dramatic aerial perspective looking down through the glass floor or window of an executive helicopter or high-rise observation deck at a vast, organized open-pit mining operation in a tropical Indonesian landscape. The mining site below shows terraced levels, organized haul roads, and heavy equipment arranged in orderly patterns suggesting systematic governance and control. In the immediate foreground, a sleek glass railing or window frame with subtle crimson-tinted reflections creates a sense of elevated oversight. Warm golden hour lighting bathes the entire scene, with long shadows from the mining terraces creating geometric patterns. Lush green tropical vegetation surrounds the mining operation, clearly placing it in Southeast Asia. The composition conveys power, strategic control, and the scale of integrated mining operations. Cinematic photography, rich warm tones with deep crimson and amber color grading, ultra-sharp details, portrait orientation with vertical depth.",
  "negative_prompt": "people, workers, close-up machinery, pollution, smoke, dark and gloomy, night, rain, cartoon, illustration, text, watermark, low quality, blurry, Western landscape, desert, snow, cold tones, blue sky only",
  "dimensions": {
    "width": 800,
    "height": 960
  },
  "style": "photorealistic",
  "tags": ["aerial view", "mining oversight", "governance", "tropical", "golden hour", "scale"]
}
```

### Variasi B — Symbolic Safety & Structure (paling relevan dengan K3L)

```json
{
  "prompt": "Close-up still life corporate photography on a premium dark mahogany executive desk. A pristine red hard hat with a corporate logo area sits prominently in the center, placed on top of official-looking regulatory documents and compliance certificates with Indonesian government stamps. Beside it, a small architectural scale model of a mining facility and a pair of premium safety glasses folded neatly. The background shows a blurred floor-to-ceiling window with warm golden light and a hint of a city or industrial skyline. The lighting is dramatic and directional from the right, creating rich shadows and warm highlights. The overall mood is meticulous, authoritative, and institutional — safety and compliance as a mark of corporate prestige, not just a field requirement. Rich warm color palette with deep crimson, dark wood tones, and amber accents. Premium product photography style, shallow depth of field, portrait composition, ultra-sharp foreground details.",
  "negative_prompt": "people, hands, dirty equipment, worn hard hat, scratched surfaces, construction site, dust, mud, cartoon, illustration, text overlay, watermark, low quality, blurry, cold tones, blue, green dominant, cheap plastic, messy, cluttered",
  "dimensions": {
    "width": 800,
    "height": 960
  },
  "style": "photorealistic",
  "tags": ["still life", "safety compliance", "K3L", "corporate symbol", "premium", "executive"]
}
```

### Variasi C — Indonesian Corporate Meeting (pengganti realistis office-team)

```json
{
  "prompt": "Professional corporate photography of a modern Indonesian executive meeting in progress, viewed from behind through a glass partition wall. The silhouettes and partial figures of Indonesian business professionals in formal attire are visible through frosted and clear glass panels, creating an abstract layered composition. The meeting room has premium interior design with warm lighting, dark wood panels, and a large screen showing what appears to be a mining operations map of Indonesia. A red accent wall or corporate branding element in deep crimson is subtly visible inside the room. The glass reflections create geometric patterns and a sense of looking in from the outside — conveying governance, structured decision-making, and institutional process. Warm ambient lighting with golden tones filtering through the glass. The overall mood is prestigious, deliberate, and professionally Indonesian. Architectural interior photography, warm color grading with crimson and amber accents, portrait orientation, artistic composition through glass.",
  "negative_prompt": "clear faces, identifiable people, Western people, casual clothing, close-up portraits, selfie, cartoon, illustration, anime, text, watermark, logo on clothing, low quality, blurry, cold blue tones, cheap office, fluorescent lighting, small room, messy, papers scattered",
  "dimensions": {
    "width": 800,
    "height": 960
  },
  "style": "photorealistic",
  "tags": ["Indonesian corporate", "executive meeting", "glass partition", "governance", "warm tones", "abstract"]
}
```

---

## Parameter untuk Berbagai Platform

### Midjourney

```
/imagine prompt: [paste prompt] --ar 5:6 --style raw --s 250 --q 2 --no people, workers, cartoon, blue tones, Western faces
```

### DALL-E 3 / ChatGPT

Gunakan prompt langsung. Set ukuran ke **portrait (1024x1792)** lalu crop/resize ke 800x960.

### Stable Diffusion (SDXL / Flux)

```json
{
  "positive_prompt": "[prompt utama atau variasi]",
  "negative_prompt": "[negative prompt]",
  "width": 832,
  "height": 1024,
  "cfg_scale": 7.5,
  "steps": 35,
  "sampler": "DPM++ 2M Karras",
  "model": "juggernautXL / realvisXL / flux-dev"
}
```

> Note: SDXL optimal di kelipatan 64. Gunakan 832x1024 lalu resize ke 800x960.

### Leonardo AI / Ideogram

Gunakan prompt utama, pilih style **"Photography"** atau **"Cinematic"**, aspect ratio **portrait (5:6)**.

---

## Post-Processing Notes

Setelah generate, lakukan adjustment berikut:

1. **Color Grading** — Push shadows ke deep maroon (#7F1D1D), midtones ke warm neutral, highlights ke amber (#D4A574)
2. **Tidak perlu gradient overlay kiri** — berbeda dari hero, section ini sudah punya gradient CSS di bawah gambar
3. **Bottom area** — Pastikan 20% bagian bawah gambar tidak punya detail krusial (akan tertutup gradient + badge "2018")
4. **Sharpening** — Unsharp mask ringan untuk web crispness
5. **Warmth** — Pastikan keseluruhan gambar berasa warm, bukan cool/clinical

### Color Reference (dari Brand Blueprint)

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| Primary Crimson | #B91C1C | Accent elements in image |
| Primary Dark | #7F1D1D | Shadow tones |
| Accent Gold | #D4A574 | Light / highlight areas |
| Neutral 950 | #0A0A0A | Deepest shadows |
| White | #FFFFFF | Section background (gambar harus harmoni) |

---

## Rekomendasi

**Prompt Utama** adalah pilihan terbaik — boardroom dengan hard hat simbolis dan pemandangan mining di kejauhan menyampaikan pesan "governance over operations" yang tepat untuk section Added Value.

**Variasi A** jika ingin feel lebih dramatis dan menekankan skala operasi dari perspektif "di atas".

**Variasi B** jika ingin pendekatan lebih detail/simbolis yang langsung menyentuh tema K3L dan compliance.

**Variasi C** jika ingin tetap menampilkan elemen manusia tapi secara abstrak melalui kaca, menghindari masalah stock photo generik.

> "The image should tell a board member: this is where mining governance happens — structured, premium, and in full control."
