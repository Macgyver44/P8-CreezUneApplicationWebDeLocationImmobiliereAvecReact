<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# P8_Creez_une_application_web_de_location_immobili-re_avec_React
Développer des éléments de l'interface d'un site web grâce à des composants React

Dans ce projet, vous allez implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.

 

Vous travaillerez sur la logique de présentation des données et les composants React, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur.

 

Vous utiliserez React Router pour configurer la navigation entre les différentes pages de l'application. Cela vous permettra de comprendre comment gérer efficacement le routage dans une application web moderne.

 

Le projet se concentrera exclusivement sur le développement front-end, en se basant sur les maquettes fournies et en utilisant des données simulées extraites d'un fichier JSON.

 

Vous débuterez le projet avec Vite, un outil qui simplifie la configuration initiale d'une application React.
Vous utiliserez également Node.js pour exécuter du code JavaScript en dehors du navigateur.
>>>>>>> 949f994498c544955acf3f8b10c655169e48b676
# P8-CreezUneApplicationWebDeLocationImmobiliereAvecReact
