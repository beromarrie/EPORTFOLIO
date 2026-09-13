# Geodetic Engineering Professional ePortfolio
## Engr. Hanna Marrie M. Bero | Registered Geodetic Engineer

A complete, modern, professional, responsive, and editorial-style ePortfolio built for **Engr. Hanna Marrie M. Bero**, Registered Geodetic Engineer and BS Geodetic Engineering graduate from Caraga State University – Main Campus.

---

## 🎨 Visual Identity & Typography System
- **Deep Maroon (`#5A0F1B`) & Rich Maroon (`#7A1F2B`)**: Primary brand identity, badges, and section headers.
- **Gold (`#C9A227`) & Muted Gold (`#B8963E`)**: Refined accents for buttons, borders, timelines, reticle crosshairs, active navigation, and icons.
- **Cream (`#FAF7F0`) & Pure White (`#FFFFFF`)**: Clean, comfortable backgrounds and realistic A4 paper sheets.
- **Charcoal (`#222222`)**: High-contrast, publication-grade text.
- **Geodetic Typography System**:
  - **Rajdhani**: Main titles, hero name, section headings, navigation labels, stats, and key buttons.
  - **IBM Plex Sans**: Body text, paragraphs, and descriptions.
  - **IBM Plex Mono**: Technical metadata, coordinates (`BM-CSU 08°57'12"N 125°31'48"E`), dates, and section index prefixes.
  - **Document Typography**: Preserved inside `.a4-sheet` (Resume and Application Letter) to maintain original formatting.
- **Geospatial & Surveying Motifs**: Coordinate badges, survey reticle crosshairs, fine contour/grid lines, and technical metadata.

---

## 📂 Project Architecture

```
E PORTFOLIO HAN/
├── index.html                   # Home (Editorial Hero, Profile Portrait, Stat Highlights, Dossier Cards)
├── about.html                   # About Me (Profile, Objectives, Education, Categorized Skills, References)
├── application-letter.html      # Application Letter (Pure A4 Document Sheet with Zoom, Print & Download)
├── resume.html                  # Resume / CV (Pure A4 Document Sheet with Zoom, Print & Download)
├── trainings.html               # Trainings & Seminars (Vertical Editorial Timeline & Modal Lightbox)
├── certificates.html            # Certificates (Filterable Gallery Grid, Lightbox Modal, Future Slots)
├── experience.html              # Work Experience (240-Hour OJT at BPA Abatayo, Field & CAD Duties)
├── README.md                    # Documentation & Maintenance Guide
└── assets/
    ├── css/
    │   └── style.css            # Complete Design System, Typography & Responsive Layouts
    ├── js/
    │   └── main.js              # Mobile Menu, Document Zoom/Print, Filter Tabs & Lightbox Modal
    ├── images/
    │   ├── hanna-marrie-bero.jpg # Professional Portrait Photograph
    │   └── certificates/
    │       ├── bpa-abatayo-ojt-certificate.jpg  # BPA Abatayo Land Surveying Services OJT Certificate
    │       └── maptalks-symposium-2025.jpg      # MapTalks Lecture 1 Certificate of Participation
    └── docs/
        ├── Application_Letter_Hanna_Marrie_Bero.pdf # Original Application Letter PDF
        ├── Resume_Hanna_Marrie_Bero.pdf             # Formatted Graphical Resume PDF
        └── Resume_Standard_Hanna_Marrie_Bero.pdf    # Standard Text Resume PDF
```

---

## 🚀 Key Features

1. **Document-Only Presentation (Zero Ugly Browser PDF Viewers)**:
   - The **Application Letter** and **Resume** are rendered directly as clean, white, print-ready A4 document sheets with realistic drop shadows and proper margins.
   - Built-in interactive document toolbar equipped with **Zoom In (+)**, **Zoom Out (-)**, **Reset**, **Print**, and **Download Original PDF** buttons.
2. **Interactive Certificate Lightbox**:
   - Clicking any certificate thumbnail or "View" button triggers a modal with high-resolution view and descriptive captions.
   - Filterable categories: All, Fieldwork & OJT, Symposia & Lectures, Licensure & Academic.
3. **Surveying & Geodetic Fieldwork Showcase**:
   - Accurately captures the 240-hour On-the-Job Training at BPA Abatayo Land Surveying Services (98% Performance Rating) across GNSS/RTK observations, boundary relocation, and AutoCAD survey drafting.
4. **Structured Geodetic Skills Framework**:
   - Organized into real engineering disciplines (Surveying Operations, Survey Instruments, GIS and Mapping, CAD & Technical Drafting, Remote Sensing, Land Research & Documentation) without arbitrary percentage bars.
5. **Fully Responsive Across All Devices**:
   - Desktop, laptop, tablet, and mobile screens with responsive navigation drawer.

---

## 🌐 How to View Locally or Deploy

### Option 1: Open Directly in Any Browser
Double-click `index.html` (or right-click and choose *Open with Google Chrome / Microsoft Edge / Firefox*).

### Option 2: Run a Local Static Server
Using Node.js:
```bash
npx serve .
```
Or using Python (if installed):
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Option 3: Deploy to GitHub Pages / Netlify / Vercel
This website consists of clean, static HTML5, CSS3, and JavaScript with zero backend dependencies, making it 100% ready to deploy directly to GitHub Pages, Netlify, or Vercel.
