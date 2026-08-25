# 🍱 Carnet Meal Prep

Site Astro pour héberger mes recettes de meal prep sur GitHub Pages.
Chaque recette est un fichier Markdown avec ses macros — la page d'accueil offre
recherche et filtres (par cuisine, congelable).

## 🚀 Mise en ligne (à faire une seule fois)

### 1. Personnaliser la config
Ouvre `astro.config.mjs` et remplace :
- `TON_USERNAME` → ton nom d'utilisateur GitHub
- `TON_REPO` → le nom que tu donneras au dépôt

Exemple pour l'utilisateur `maitre` et un dépôt nommé `recettes` :
```js
site: 'https://maitre.github.io',
base: '/recettes',
```
> Astuce : si tu nommes le dépôt `TON_USERNAME.github.io`, garde `site` mais
> **supprime la ligne `base`** — le site sera à la racine.

### 2. Créer le dépôt et pousser
```bash
cd recettes
git init
git add .
git commit -m "Carnet meal prep initial"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/TON_REPO.git
git push -u origin main
```

### 3. Activer GitHub Pages
Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.

C'est tout. À chaque `git push` sur `main`, le site se reconstruit et se publie
automatiquement à `https://TON_USERNAME.github.io/TON_REPO/`.

## ➕ Ajouter une recette

Crée un fichier dans `src/content/recettes/`, ex. `ma-recette.md` :

```markdown
---
titre: "Nom de la recette"
emoji: "🥘"
cuisine: "Italien"
portions: 6
kcal: 450
proteines: 40
glucides: 35        # optionnel
lipides: 12         # optionnel
fibres: 8           # optionnel
congelable: true
tempsMinutes: 30    # optionnel
star: false
note: "Courte note affichée sous le titre."
---

## Ingrédients
- ...

## Préparation
1. ...
```

Puis `git add`, `git commit`, `git push` — le site se met à jour tout seul.

## 🛠️ Aperçu local (optionnel)

Requiert Node.js. Depuis le dossier :
```bash
npm install
npm run dev      # aperçu sur http://localhost:4321
npm run build    # génère le site dans dist/
```

## 📂 Structure

```
src/
├── content/recettes/   ← une recette = un fichier .md (c'est ici que tu écris)
├── content/config.ts   ← schéma des champs (macros, tags…)
├── components/Carte.astro
├── layouts/Base.astro
├── pages/
│   ├── index.astro           ← accueil + recherche/filtres
│   └── recette/[slug].astro  ← page individuelle
└── styles/global.css
.github/workflows/deploy.yml  ← déploiement automatique
```
