# ⚛ React + Express (Setup) + Webpack5

This project is a template of a server side rendering a [React][react-url] application.
 
  - [Progressive Web App](#progressive-web-app)

## Features

- General Setup

  - ⚙ Babel 7
  - 📦 Webpack 5
  - 🔥 TypeScript 4 (via Babel)
  - 🧹 Prettier
  - 🧹 Stylelint
  - 🔦 ESLint 7
  - 🌡 Jest
  - 🌡 Enzime
  - ✅ Server Side Rendering with Express
  - ✅ React i18next for multi language support
  - 🚀 React Fast Refresh
  - ✅ SASS
  - ✅ CSS Modules
  - ✅ PostCSS
  - ✅ Dependencies visualization with Graphviz
  - ✅ Precommit hooks via lint-staged + Husky
  - 🔥 PWA support
  - 🔥 PWA assets and metadate automatically created

- Libs and dependencies
  - ⚛ React 17
  - ✅ Express 4.x
  - ✅ React i18next for multi language support
  - ✅ Redux + Thunk middleware
  - ✅ Immer
  - ✅ Reselect
  - ✅ React Router 5
  - ✅ React Helmet

## Installation

Clone the repository, `cd` into the directory and run `yarn` (or `npm install`) on your command line to install all the dependencies. You're ready to go now !

## Usage

There are npm scripts for all the relevant things. The server will always be started on port 8500 unless otherwise specified in process.env.PORT. You can use a .env file to specify env vars. If you want to use them in your client side code, don't forget to add them in config/env.ts.

#### `yarn start`

Starts the app in development mode: creates a new client and server dev build using [Webpack][webpack-url], starts the [Express][express-url] server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `yarn build`

Creates a new build optimized for production.
