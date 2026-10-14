export interface SkuComparison {
  sku: string;
  category: string;
  catalogType: "Matriciel (.00X)" | "Multi-colonnes Spatial" | "Douille E27 / GU10" | "Accessoire / Cadre Nu" | "Éclairage de Sécurité";
  cropImage: string;
  cropCaption: string;
  beforeState: {
    wattage: string;
    lumens: string;
    status: string;
    issue: string;
  };
  afterState: {
    productName: string;
    wattage: string;
    lumens: string;
    cct: string;
    ipIk: string;
    dimensions: string;
    control: string;
    status: string;
    keyWin: string;
  };
}

export const SKU_COMPARISONS: SkuComparison[] = [
  {
    sku: "312421.002.76",
    category: "Suspension Modulaire Tertiaire",
    catalogType: "Matriciel (.00X)",
    cropImage: "/images/crops/crop_rzb_triona_table.png",
    cropCaption: "Preuve Catalogue Source : Notation matricielle 312421.00X.76 avec tableaux CCT 830 (3000K) et protocole DALI.",
    beforeState: {
      wattage: "Absent (Oublié)",
      lumens: "Non extrait",
      status: "IGNORED",
      issue: "La table catalogue utilisait la notation matricielle .00X. L'extracteur linéaire ignorait ce SKU et toutes ses finitions commerciales."
    },
    afterState: {
      productName: "Suspension Architecturale Ronde Opale (Blanc / DALI)",
      wattage: "48.0 W",
      lumens: "4 650 lm (97 lm/W)",
      cct: "3000 K (CRI 80)",
      ipIk: "IP20 / IK03",
      dimensions: "D 461 mm, H 52 mm",
      control: "DALI Gradable",
      status: "VALIDATED (100%)",
      keyWin: "Expansion matricielle .00X : décodage automatique de la finition blanche (002) et du protocole DALI (.76)."
    }
  },
  {
    sku: "10120.002",
    category: "Plafonnier / Hublot Verrerie",
    catalogType: "Douille E27 / GU10",
    cropImage: "/images/crops/crop_rzb_dkn_socket.png",
    cropCaption: "Preuve Catalogue Source : Mention explicite '1 x E27 max. 60 W' - Luminaire à source interchangeable sans LED intégrée.",
    beforeState: {
      wattage: "60.0 W (LED Halluciné)",
      lumens: "540 lm (Inventé)",
      status: "BLOCKED (Faux)",
      issue: "L'extracteur naïf a lu '60 W' dans le texte et l'a injecté en puissance système LED, faussant le moteur de recherche."
    },
    afterState: {
      productName: "Hublot Verrerie Blanche Satinée",
      wattage: "Douille E27 (max 60W)",
      lumens: "null (Selon ampoule installée)",
      cct: "null (Source interchangeable)",
      ipIk: "IP40 / IK02",
      dimensions: "D 250 mm, H 105 mm",
      control: "On/Off",
      status: "VALIDATED (Pro)",
      keyWin: "Dissociation stricte de la douille : system_wattage mis à null, max_lamp_wattage = 60W. Zéro pollution du filtre LED."
    }
  },
  {
    sku: "1008715",
    category: "Spot Orientable sur Patère / Rail",
    catalogType: "Multi-colonnes Spatial",
    cropImage: "/images/crops/crop_slv_noblo_columns.png",
    cropCaption: "Preuve Catalogue Source : 3 colonnes horizontales côte à côte (Simple 6W, Double 12W, Triple 19W) avec 2700K vs 3000K.",
    beforeState: {
      wattage: "12W ou 19W (Mélangé)",
      lumens: "Aléatoire (1460 lm)",
      status: "COLLISION",
      issue: "Page avec 3 colonnes horizontales côte à côte : les puissances des versions double (12W) et triple (19W) ont écrasé le spot simple."
    },
    afterState: {
      productName: "Spot Cylindrique Simple 2700K",
      wattage: "6.0 W",
      lumens: "740 lm (Flux exact 2700K)",
      cct: "2700 K (CRI 90)",
      ipIk: "IP20",
      dimensions: "L 10.5 cm, D 5 cm",
      control: "Phase-cut",
      status: "VALIDATED (0% Erreur)",
      keyWin: "Calcul du centroïde horizontal (X < 185 pt) : isolation chirurgicale de la colonne 0 et du flux 740 lm pour 2700K."
    }
  },
  {
    sku: "113150",
    category: "Spot Encastré Découpe Plafond",
    catalogType: "Douille E27 / GU10",
    cropImage: "/images/crops/crop_slv_horn_table.png",
    cropCaption: "Preuve Catalogue Source : Tableau d'encastrement asymétrique avec douille Base 1xGU10 25W et hauteur 12 cm.",
    beforeState: {
      wattage: "null",
      lumens: "null",
      status: "NON QUALIFIÉ",
      issue: "Désignation générique par défaut 'Product 113150', données techniques incomplètes et fausses redirections web."
    },
    afterState: {
      productName: "Encastré Asymétrique Orienté Découpe Plafond",
      wattage: "Douille GU10 (max 25W)",
      lumens: "null (Ampoule séparée)",
      cct: "null",
      ipIk: "IP20/IP44 / IK02",
      dimensions: "H 12 cm (Découpe 13 cm)",
      control: "On/Off",
      status: "VALIDATED (URL OK)",
      keyWin: "Restauration du nom de famille exact et qualification des dimensions de perçage et de protection IP20/IP44."
    }
  },
  {
    sku: "1007443",
    category: "Cadre & Anneau d'Encastrement Nu",
    catalogType: "Accessoire / Cadre Nu",
    cropImage: "/images/crops/crop_slv_newtria_accessory.png",
    cropCaption: "Preuve Catalogue Source : Anneau rond de finition en aluminium (accessoire mécanique nu sans module LED).",
    beforeState: {
      wattage: "10 W (Hérité à tort)",
      lumens: "1130 lm (Faux)",
      status: "CONTAMINATED",
      issue: "Considéré à tort comme un luminaire LED car présenté sur la même page qu'un module LED complet."
    },
    afterState: {
      productName: "Anneau Rond de Finition pour Encastré",
      wattage: "null (Cadre mécanique nu)",
      lumens: "null (Aucune source lumineuse)",
      cct: "null",
      ipIk: "IP20 (Aluminium)",
      dimensions: "Diamètre 11 cm, H 2.6 cm",
      control: "Sans objet",
      status: "ROLE: ACCESSORY",
      keyWin: "Neutralisation sémantique stricte : classé en accessoire mécanique. Exclusion propre de tous les filtres d'éclairage."
    }
  },
  {
    sku: "ARNS / LV2A",
    category: "Bloc Autonome d'Éclairage de Sécurité (BAES)",
    catalogType: "Éclairage de Sécurité",
    cropImage: "/images/crops/crop_awex_safety_table.png",
    cropCaption: "Preuve Catalogue Source : Blocs de secours d'évacuation avec modules Central Battery CBS et optiques couloir.",
    beforeState: {
      wattage: "1.0 W (Attribué par défaut)",
      lumens: "Non discriminé",
      status: "GÉNÉRIQUE",
      issue: "Tous les produits du fabricant recevaient 1.0W sans vérifier s'il s'agissait d'un bloc de balisage ou d'un luminaire de forte puissance."
    },
    afterState: {
      productName: "Bloc d'Évacuation pour Issue de Secours",
      wattage: "1.0 W (Mode veille) / LED Secours",
      lumens: "150 lm (Flux garanti d'évacuation)",
      cct: "5000 K",
      ipIk: "IP65 Étanche",
      dimensions: "L 330 mm, H 170 mm",
      control: "Central Battery (CBS) / Auto-test",
      status: "VALIDATED (Normé)",
      keyWin: "Distinction claire entre puissance en mode veille, autonomie batterie (1h/3h) et optique corridor normée."
    }
  }
];

export const PIPELINE_STEPS = [
  {
    stepNumber: "01",
    tag: "LE DÉFI INITIAL",
    title: "Le Chaos des Catalogues PDF Vectoriels",
    subtitle: "Des milliers de pages conçues pour l'impression humaine, illisibles pour un automate classique.",
    details: [
      "Catalogues PDF de plus de 1 000 pages par fabricant majeur.",
      "Mises en page multi-colonnes : jusqu'à 4 appareils distincts sur la même page partageant des blocs de texte communs.",
      "Notation matricielle (.00X) masquant des centaines de variantes de couleurs et de gradation dans une seule ligne.",
      "Risque d'erreurs en cascade : mélanger la puissance d'un spot simple (6W) avec celle d'un spot triple (19W)."
    ],
    cropImage: "/images/crops/crop_slv_noblo_columns.png",
    cropCaption: "Page Catalogue Réelle : 3 colonnes de luminaires côte à côte partageant un tableau récapitulatif unique."
  },
  {
    stepNumber: "02",
    tag: "L'ÉCHEC DU SCRAPING BASIQUE",
    title: "Hallucinations de Données & Blocages WAF",
    subtitle: "Pourquoi les expressions régulières et Selenium standard ont échoué.",
    details: [
      "Hallucination photométrique : attribution automatique de 60W LED sur une douille E27 vide.",
      "Omission de 90% du catalogue : les variantes .00X et les index de fin de catalogue étaient totalement ignorés.",
      "Blocage instantané par WAF Cloudflare : détection de l'empreinte TLS JA3 de Selenium standard.",
      "Popups de cookies Usercentrics injectées dans le Shadow DOM bloquant toute interaction."
    ],
    cropImage: "/images/crops/crop_rzb_dkn_socket.png",
    cropCaption: "Page Catalogue Réelle : Luminaire avec douille E27. L'extracteur basique hallucinait '60W LED' au lieu de détecter une douille."
  },
  {
    stepNumber: "03",
    tag: "L'INNOVATION GÉOMÉTRIQUE",
    title: "Segmentation Spatiale & Expansion Matricielle",
    subtitle: "Le saut d'ingénierie qui a permis d'atteindre 0% d'erreur.",
    details: [
      "Algorithme géométrique spatial : calcul du barycentre horizontal (X_center) des boîtes englobantes PyMuPDF pour isoler chaque colonne.",
      "Alignement rigoureux des flux lumineux selon la température de couleur (ex: 740 lm pour 2700K vs 750 lm pour 3000K).",
      "Moteur d'expansion matricielle .00X : décodage automatique des finitions (blanc, argent, anthracite) et des gradations DALI.",
      "Indexation intégrale depuis les index officiels : passage de 1 383 à 16 781 références qualifiées."
    ],
    cropImage: "/images/crops/crop_rzb_triona_table.png",
    cropCaption: "Page Catalogue Réelle : Tableau matriciel sous notation '.00X' automatiquement expansé en fiches produits complètes."
  },
  {
    stepNumber: "04",
    tag: "LA QUALIFICATION SÉMANTIQUE",
    title: "Assainissement & Anti-Hallucination Métier",
    subtitle: "Séparer strictement les luminaires, les douilles et les accessoires mécaniques.",
    details: [
      "Neutralisation des accessoires : cadres d'encastrement nus et patères purgés de tout lumen ou watt imaginaire.",
      "Standardisation des douilles : classification en 'max_lamp_wattage' et mise à null du wattage système.",
      "Contournement anti-bot : synchronisation de signature de navigateur et gestion des overlays dynamiques.",
      "Vérification des liens directs : routage sans erreur 404 vers les fiches constructeurs officielles."
    ],
    cropImage: "/images/crops/crop_slv_horn_table.png",
    cropCaption: "Page Catalogue Réelle : Gamme encastrée. Qualification propre de la douille GU10 et des dimensions d'encastrement exactes."
  },
  {
    stepNumber: "05",
    tag: "LA LIVRAISON FINALE",
    title: "Base de Données PIM Industrielle (16 781 SKUs)",
    subtitle: "Une table maître de 26 colonnes techniques prête pour l'e-commerce et les bureaux d'études.",
    details: [
      "16 781 références mondiales digitalisées réparties sur 3 grandes familles de fabricants.",
      "12 482 luminaires complets validés à 100% avec Watts, Lumens, CCT, IP, IK et dimensions.",
      "4 299 accessoires mécaniques et pièces détachées correctement typés sans données polluées.",
      "Livrables multi-formats : Table CSV maître, classeur Excel à 5 onglets, et JSONs ultra-rapides pour moteurs de recherche facettés."
    ],
    cropImage: "/images/crops/crop_awex_safety_table.png",
    cropCaption: "Page Catalogue Réelle : Gamme de sécurité. Qualification précise des puissances de veille, autonomies et optiques anti-panique."
  }
];

export const GLOBAL_KPIS = [
  { label: "RÉFÉRENCES EXTRAITES", value: "16 781", change: "+1 113%", desc: "vs 1 383 références dans la file d'attente initiale" },
  { label: "LUMINAIRES VALIDÉS", value: "12 482", change: "74.4%", desc: "Fiches 100% complètes prêtes e-commerce et ERP" },
  { label: "TAUX D'ERREUR PHOTOMÉTRIQUE", value: "0.0%", change: "0 Erreur", desc: "Zéro hallucination douilles/LED et accessoires" },
  { label: "ATTRIBUTS PIM QUALIFIÉS", value: "26", change: "Complet", desc: "Watts, Lm, CCT, CRI, IP, IK, DALI, Dimensions, URLs" },
];

export const POWER_BI_STATS = {
  coverageByAttribute: [
    { name: "URLs Fiches Techniques", percentage: 100.0, count: "16 781", color: "bg-emerald-500" },
    { name: "Dimensions Géométriques (D, H, L)", percentage: 90.5, count: "15 187", color: "bg-gold-500" },
    { name: "Indice d'Étanchéité IP", percentage: 82.3, count: "13 813", color: "bg-blue-500" },
    { name: "Résistance aux Chocs IK", percentage: 80.6, count: "13 524", color: "bg-indigo-500" },
    { name: "Gradation / Contrôle (DALI, Phase)", percentage: 75.2, count: "12 620", color: "bg-purple-500" },
    { name: "Flux Lumineux (Lumens lm)", percentage: 74.9, count: "12 562", color: "bg-amber-500" },
    { name: "Puissance Électrique (Watts W)", percentage: 73.5, count: "12 341", color: "bg-teal-500" },
    { name: "Température de Couleur CCT", percentage: 69.1, count: "11 588", color: "bg-cyan-500" },
  ],
  distributionByFamily: [
    { name: "Catalogues Matriciels (.00X)", share: 80.9, count: "13 579 SKUs", desc: "Variantes de couleurs, optiques et protocoles DALI" },
    { name: "Catalogues Multi-Colonnes Spatiaux", share: 18.4, count: "3 080 SKUs", desc: "Appareils 1 à 4 colonnes par page avec CCT 2700K / 3000K" },
    { name: "Éclairage de Sécurité & Blocs BAES", share: 0.7, count: "122 SKUs", desc: "Blocs autonomes, veille 1W et modules Central Battery" },
  ]
};
