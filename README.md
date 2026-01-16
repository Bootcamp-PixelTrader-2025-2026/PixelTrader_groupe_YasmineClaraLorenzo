---

### 👾PixelTrader_groupe_YasmineClaraLorenzo
Projet de groupe visant à développer un **MVP de gestion de stock** pour une boutique de retrogaming, à partir d’un **CSV legacy corrompu** (doublons, devises mixtes).  
Le projet inclut le **nettoyage des données**, leur exposition via une **API PHP (JSON)** et une **interface web en HTML, CSS et JavaScript**.

---

### 🎯 Objectifs du projet
- Consulter le catalogue (jeux / consoles)
- Ajouter, modifier et supprimer des produits
- Visualiser des KPIs (valeur du stock, nombre d’articles)
- Nettoyer et normaliser les données legacy

---

### 🧹 Données & nettoyage
Les données proviennent d’un fichier `OriginalCollection.csv` contenant des erreurs (doublons, formats incohérents, devises mixtes).  
Un script JavaScript dédié permet :
- suppression des doublons
- uniformisation des plateformes
- conversion des devises en euros

Données finales disponibles en **CSV**, **JSON** et **importables en base**.

---

### 🛠️ Stack technique
- **Backend :** PHP (API REST – JSON)
- **Base de données :** MySQL
- **Frontend :** HTML5, CSS3, JavaScript Vanilla (ES6+)
- **Versioning :** Git / GitHub
- **Design :** Thème Retro

---

### 🗂️ Organisation du projet
```bash
PixelTrader_groupe_YasmineClaraLorenzo/
├── Api/                # API REST PHP (exposition des données en JSON)
├── Data/               # Données legacy et données nettoyées (CSV / JSON)
├── JavaScript/         # Scripts JS (nettoyage, affichage, logique front)
├── CSS/                # Styles CSS (structure modulaire)
├── html/               # Pages HTML (détails, nettoyage, etc.)
├── assets/             # Ressources statiques (icônes, logos, images)
├── import_csv.php      # Script d'import CSV vers la base de données
├── index.php           # Point d'entrée principal de l'application
├── pixel_trader.sql    # Script SQL (structure et données de secours)
└── README.md           # Documentation du projet


├── pixel_trader.sql
└── README.md
