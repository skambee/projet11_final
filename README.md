# Kasa — Projet 11 OpenClassrooms

Application web réalisée avec **React** et **React Router** dans le cadre du projet **« Développez une application Web avec React et React Router »** du parcours Développeur d'application JavaScript React d'OpenClassrooms.

L'objectif est d'implémenter le front-end de Kasa à partir des maquettes fournies, avec des composants React réutilisables, un routage côté client et les données des logements fournies au format JSON.

## Fonctionnalités implémentées

- affichage des 20 logements présents dans `src/data/logements.json` ;
- navigation vers une fiche logement via React Router ;
- récupération de l'identifiant du logement depuis l'URL avec `useParams` ;
- galerie d'images circulaire : dernière → première et première → dernière ;
- masquage des flèches et du compteur lorsqu'un logement ne possède qu'une seule image ;
- affichage des informations du logement, de l'hôte, des tags, de la note, de la description et des équipements ;
- composants `Collapse` fermés par défaut et ouvrables/fermables au clic ;
- page À propos ;
- page 404 pour toute route inconnue ;
- page 404 pour tout identifiant de logement absent des données ;
- interface responsive desktop, tablette et mobile ;
- styles Sass/CSS sans bibliothèque de composants externe.

## Prérequis

Installer une version récente de **Node.js** et **npm**.

```bash
node -v
npm -v
```

## Installation

Depuis la racine du projet :

```bash
npm install
```

Puis lancer l'application :

```bash
npm start
```

L'application est alors disponible sur :

```text
http://localhost:3000
```

## Routes principales

| Route | Contenu |
| --- | --- |
| `/` | Accueil et liste des logements |
| `/a-propos` | Valeurs de Kasa |
| `/logement/:rentalId` | Fiche d'un logement |
| toute autre URL | Page 404 |

Exemple : cliquer sur une carte depuis l'accueil ouvre automatiquement la route correspondant à son identifiant.

## Build de production

Avant le dépôt et la soutenance, vérifier que le build se termine sans erreur :

```bash
npm run build
```

La commande génère le dossier `build/` optimisé pour la production.

## Technologies

- React 18
- Create React App / react-scripts
- React Router DOM 6
- JavaScript / JSX
- Sass
- CSS
- HTML

Aucune bibliothèque React externe de composants ou de galerie n'est utilisée : la galerie et les Collapse sont développés dans le projet.

## Structure du projet

```text
Projet11-main/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Card/
│   │   ├── Carousel/
│   │   ├── Collapse/
│   │   ├── Error/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Rating/
│   │   └── Tags/
│   ├── data/
│   │   └── logements.json
│   ├── pages/
│   │   ├── A-propos/
│   │   ├── Home/
│   │   └── Logement/
│   ├── sass-styles/
│   ├── App.jsx
│   ├── index.jsx
│   └── style.css
├── CHECKLIST_EVALUATION.md
├── SOUTENANCE.md
├── package.json
└── README.md
```

## Points techniques à connaître pour la soutenance

- `src/App.jsx` centralise les routes de l'application.
- `src/pages/Logement/index.jsx` utilise `useParams()` puis `find()` pour sélectionner le logement correspondant à l'URL.
- `src/components/Carousel/index.jsx` utilise `useState()` pour mémoriser l'image courante et applique la navigation circulaire.
- `src/components/Collapse/index.jsx` utilise `useState(false)` : chaque Collapse est donc fermé lors de son initialisation.
- Les listes sont rendues avec `map()` et possèdent des clés React stables.
- Les composants reçoivent les données nécessaires via leurs props.

Consulter également `SOUTENANCE.md` et `CHECKLIST_EVALUATION.md` avant l'évaluation.
