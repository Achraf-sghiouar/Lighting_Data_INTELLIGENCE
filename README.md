# 💡 Lighting Data Intelligence — Industrial PIM Engineering & Spatial Extraction Pipeline

> 🔗 **Découvrez la présentation et les métriques du projet en direct :** [https://zaneendataa.vercel.app](https://zaneendataa.vercel.app)

---

## 📌 Présentation du Projet

Ce projet présente l'architecture, la méthodologie et les résultats d'un pipeline d'ingénierie de données industrielles conçu pour digitaliser et qualifier **16 781 références techniques** issues de catalogues fabricants complexes, avec un **taux d'erreur photométrique de 0%**.

De l'échec initial des scrapers conventionnels (hallucinations de puissances sur douilles amovibles, télescopage de colonnes, blocages Cloudflare WAF) à la mise en place d'un moteur géométrique spatial et d'un décodeur matriciel de variantes, le projet démontre comment fiabiliser des données critiques destinées aux moteurs de recherche e-commerce et aux systèmes ERP.

---

## 🚀 Les 5 Grandes Étapes Réalisées

1. **Étape 01 : Le Défi Initial des Catalogues Sources**
   - Traitement de catalogues PDF vectoriels denses de plus de 1 000 pages par fabricant, conçus pour l'impression visuelle humaine et non pour l'extraction automatique.
   - Présence de mises en page complexes : jusqu'à 4 appareils distincts sur la même page partageant des blocs de texte communs et des notations matricielles (`.00X`).

2. **Étape 02 : Résolution des Échecs du Scraping Conventionnel**
   - Diagnostic et correction des hallucinations photométriques (ex: attribution automatique de 60W LED sur une carcasse à douille E27 vide).
   - Contournement des sécurités web avancées (Cloudflare Turnstile WAF, gestion des bannières cookies Usercentrics dans le Shadow DOM et interfaces dynamiques SPA).

3. **Étape 03 : L'Innovation Géométrique Spatiale & l'Expansion Matricielle**
   - Conception d'un algorithme spatial basé sur les coordonnées horizontales ($X_{center}$) des boîtes englobantes (bounding boxes) pour isoler chirurgicalement chaque colonne de luminaire sans mélange de puissance ni de flux lumineux.
   - Développement d'un moteur d'expansion matricielle pour décoder automatiquement les codes compacts (`.00X`) en toutes leurs variantes réelles de couleurs (blanc, argent, anthracite) et de gradation (DALI).

4. **Étape 04 : Qualification Sémantique & Règle Anti-Hallucination**
   - Standardisation électrotechnique : séparation stricte entre puissance système LED intégrée et puissance maximale admise sur douille amovible (`max_lamp_wattage_w`).
   - Neutralisation complète des accessoires mécaniques (cadres d'encastrement nus, anneaux, patères) pour éliminer tout wattage ou lumen imaginaire.
   - Vérification et routage direct vers les fiches techniques constructeurs officielles.

5. **Étape 05 : Livraison de la Base de Données PIM Industrielle**
   - Consolidation finale d'une table maître exhaustive de **16 781 références qualifiées** réparties sur 26 colonnes techniques normalisées (Watts, Lumens, CCT, CRI, IP, IK, DALI, Dimensions, Liens directs).
   - Génération de livrables multi-formats prêts pour l'intégration en production : table maître CSV, classeur Excel multi-onglets et exports JSON structurés.
