# 💡 Industrial Lighting PIM & Spatial Extraction Pipeline (Case Study)

An interactive, production-ready portfolio case study demonstrating how an end-to-end data engineering pipeline digitized **16,781 technical references** across major lighting manufacturers (RZB, SLV, AWEX) with a **0% photometric error rate**.

---

## 🌟 Highlights
- **Framework**: Next.js 14 (App Router) + TypeScript + Tailwind CSS.
- **Design System**: Warm Light Theme with Dark Gold accents (`#C5A059`, `#FDFBF7`) inspired by high-end modern SaaS portfolios.
- **Storytelling Flow (Steps 01 to 05)**:
  - Step 01: Raw Vector PDF Layout Chaos.
  - Step 02: Why Conventional Scraping & RegEx Failed (Hallucinations & WAF).
  - Step 03: Spatial Bounding Box Centroids ($X_{center}$) & Matrix Expansion (`.00X`).
  - Step 04: Semantic Qualification (Sockets vs Integrated LED, Accessory Purging).
  - Step 05: Consolidated Master Database (16,781 SKUs × 26 Attributes).
- **Interactive Before / After Inspector**: Demonstrates 6 challenging real-world SKUs (`312421.002.76`, `10120.002`, `1008715`, `113150`, `1007443`, `LV2A / ARNS`).
- **Interactive Pipeline Runner**: Mock terminal showing the C++ vector-optimized PyMuPDF execution.

---

## 🚀 How to Run Locally

```bash
cd "/Users/sharaf_os/Fichiers locaux/projet light /projet_descriptionProjet"
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel / GitHub
1. Create a repository on GitHub.
2. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete interactive PIM case study"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Import the repository into [Vercel](https://vercel.com) — it will automatically detect Next.js and deploy in under 60 seconds!
