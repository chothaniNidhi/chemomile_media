# Chamomile Media — Creative Agency Website

> **"Calming the Chaos of Branding."**  
> An award-winning, Awwwards-inspired, responsive 3D animated agency website for **Chamomile Media**, a premier US-focused digital marketing and brand strategy studio with headquarters in New York and Los Angeles.

---

## 🌼 Live Features & Highlights

- **Interactive 3D Chamomile Emblem (WebGL & Three.js):**
  - Procedural 3D chamomile flower inspired by the original logo mark.
  - Golden-yellow sun hemisphere, radiating warm-sand petals, botanical teal leaves, and dual orbital rings.
  - Interactive mouse parallax tilting, smooth scroll rotation, and click-to-bloom shockwave effect.
  - 140+ drifting golden pollen particles with turbulence physics.
- **Atmospheric 528Hz Audio Synthesizer:**
  - Built-in soothing ambient chime generator powered by the Web Audio API with a one-click sound toggle.
- **Custom Precision Cursor:**
  - Dynamic cursor follower with magnetic attraction, touch-device detection, and contextual labels (`"VIEW"`, `"INSPECT"`, `"TALK"`).
- **Interactive Capabilities & Deep-Dive Modals:**
  - 5 core service offerings with deliverable checklists, target impact metrics, and modal specifications.
- **Selected Client Archive (Portfolio):**
  - Ultra-realistic US brand case studies with category filters (*All, Brand Identity, Web & 3D, Social & Growth, Performance*), full-bleed imagery, and comprehensive modal drawers.
- **Brand Velocity & Scope Simulator:**
  - Interactive scope calculator that allows prospective clients to configure their project parameters and auto-fill the contact form.
- **The Calm Method vs. Market Noise:**
  - Interactive comparative matrix contrasting traditional agency pitfalls with Chamomile Media's strategic architecture.
- **Live US Timezones & Office Status:**
  - Real-time clocks for New York (EDT) and Los Angeles (PDT), with availability indicators.
- **Interactive Consultation Form:**
  - Multi-select capability pills, budget selector, and celebratory botanical confetti feedback upon submission.

---

## 🎨 Visual Identity & Color Palette

Extracted directly from the Chamomile Media brand identity:

| Role | Color Name | Hex Code | Preview |
|---|---|---|---|
| **Primary Brand** | Botanical Teal Blue | `#398DA5` | `rgb(57, 141, 165)` |
| **Secondary Color** | Warm Sand Beige | `#E6D2B3` | `rgb(230, 210, 179)` |
| **Accent Glow** | Golden Yellow | `#F7B638` | `rgb(247, 182, 56)` |
| **Canvas Background** | Soft Ivory | `#FAF9F5` | `rgb(250, 249, 245)` |
| **Dark Contrast** | Deep Charcoal | `#20272A` | `rgb(32, 39, 42)` |
| **Botanical Accent** | Muted Sage Green | `#A9BBA5` | `rgb(169, 187, 165)` |

---

## 🛠️ Technology Stack

- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with custom typography and glassmorphism utilities
- **3D Graphics & Shaders:** [Three.js (WebGL)](https://threejs.org/)
- **Typography:** Plus Jakarta Sans & Syne via Google Fonts
- **Icons:** [Lucide React](https://lucide.dev/)
- **Micro-Interactions:** Canvas Confetti + Web Audio API Synthesis

---

## 📁 Project Structure

```bash
chamomile-media/
├── public/
│   ├── chamomile-logo.png         # Brand logo reference
│   ├── chamomile-original.jpeg     # Original profile asset
│   └── logo-icon.svg              # Scalable vector emblem
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── ChamomileScene3D.tsx     # Three.js 3D Chamomile Emblem
│   │   │   └── FloatingShapesCanvas.tsx # Ambient background WebGL particles
│   │   ├── common/
│   │   │   ├── AudioController.tsx      # Web Audio API chime synthesis
│   │   │   ├── BrandEmblem.tsx          # Responsive vector wordmark
│   │   │   └── CustomCursor.tsx         # Trailing precision cursor
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Glassmorphic responsive header
│   │   │   └── Footer.tsx               # Dark charcoal botanical footer
│   │   └── sections/
│   │       ├── Hero.tsx                 # Full-screen 3D hero with live time
│   │       ├── About.tsx                # Narrative manifesto & comparison
│   │       ├── Services.tsx             # 5 interactive capability cards & modals
│   │       ├── Portfolio.tsx            # Filterable case study archive
│   │       ├── WhyChooseUs.tsx          # 4 strategic advantage pillars
│   │       ├── Process.tsx              # 5-step sprint timeline
│   │       ├── ProjectEstimator.tsx     # Brand velocity scope calculator
│   │       ├── Testimonials.tsx         # Verified client case reviews
│   │       └── Contact.tsx              # Consultation form with confetti
│   ├── data/
│   │   └── agencyData.ts                # Structured agency datasets
│   ├── types/
│   │   └── index.ts                     # TypeScript definitions
│   ├── App.tsx                          # Root application container
│   ├── index.css                        # Tailwind directives & glass classes
│   └── main.tsx                         # React 18 DOM mount point
├── index.html                           # HTML5 entry with preloaded fonts
├── package.json                         # Project dependencies and scripts
├── tailwind.config.js                   # Botanical color tokens & animations
└── vite.config.ts                       # Vite bundler configuration
```

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chothaniNidhi/chemomile_media.git
   cd chemomile_media
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🏛️ Agency Presence

- **New York Studio (HQ):** 485 Fifth Avenue, 14th Floor, New York, NY 10017
- **Los Angeles Studio:** 1335 Abbot Kinney Blvd, Venice, CA 90291
- **Inquiries:** `hello@chamomilemedia.com`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
