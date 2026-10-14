# 💡 Lighting Data Intelligence — Industrial PIM Engineering & Spatial Extraction Pipeline

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://zaneendataa.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%2014%20%7C%20TypeScript%20%7C%20Tailwind%20CSS-blue?style=for-the-badge)](https://zaneendataa.vercel.app)
[![Data Scope](https://img.shields.io/badge/Data%20Scope-16%2C781%20SKUs%20Digitized-gold?style=for-the-badge)](https://zaneendataa.vercel.app)

> 🔗 **Découvrez le projet en direct :** [https://zaneendataa.vercel.app](https://zaneendataa.vercel.app)

---

## 📌 Présentation du Projet

Ce projet présente l'architecture, la méthodologie et les résultats d'un pipeline d'ingénierie de données industrielles conçu pour digitaliser et qualifier **16 781 références techniques** issues de catalogues fabricants complexes, avec un **taux d'erreur photométrique de 0%**.

De l'échec initial des scrapers conventionnels (hallucinations de puissances sur douilles amovibles, télescopage de colonnes, blocages Cloudflare WAF) à la mise en place d'un moteur géométrique spatial et d'un décodeur matriciel de variantes, le projet démontre comment fiabiliser des données critiques destinées aux moteurs de recherche e-commerce et aux systèmes ERP.

---

## 🚀 Fonctionnalités & Contenu de l'Interface

Visitez **[https://zaneendataa.vercel.app](https://zaneendataa.vercel.app)** pour explorer l'ensemble des modules interactifs :

1. **Parcours Narratif du Projet (Étapes 01 à 05)** :
   - *Étape 01 : Le Défi Initial* — Le chaos des catalogues PDF vectoriels multi-colonnes de plus de 1 000 pages.
   - *Étape 02 : L'Échec du Scraping Linéaire* — Diagnostic des hallucinations photométriques et des verrous de sécurité web.
   - *Étape 03 : L'Innovation Géométrique* — Segmentation spatiale par boîtes englobantes ($X_{center}$) et expansion matricielle des variantes commerciales (`.00X`).
   - *Étape 04 : La Qualification Sémantique* — Dissociation stricte des douilles (E27, GU10) et neutralisation des accessoires mécaniques nus.
   - *Étape 05 : La Livraison Finale* — Consolidation de la base de données maître (16 781 lignes × 26 attributs techniques).

2. **Preuve par l'Exemple (Comparatif Avant / Après)** :
   - Inspection comparative interactive sur 6 cas réels complexes avec zooms haute définition issus directement des documents sources.

3. **Tableau de Bord Analytique (Style Power BI)** :
   - Visualisation interactive du taux de remplissage par attribut PIM (Dimensions, IP, IK, DALI, Lumens, Watts, CCT) et distribution par typologie de catalogue.

---

## 🛠️ Stack Technique

- **Frontend & Visualisation** : Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons.
- **Design System** : Thème Warm Light épuré avec accents Dark Gold, typographie contrastée et micro-interactions soignées.
- **Déploiement** : Hébergement optimisé sur Vercel.

---

## 💻 Lancer le Projet en Local

```bash
# Cloner le dépôt
git clone git@github.com:Achraf-sghiouar/Lighting_Data_INTELLIGENCE.git

# Accéder au dossier
cd Lighting_Data_INTELLIGENCE

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

© 2026 Lighting Data Intelligence. Tous droits réservés.
