# โ React + Express (Setup) + Webpack5

This project is a template of a server side rendering a [React][react-url] application.
 
  - [Progressive Web App](#progressive-web-app)

## Features

- General Setup

  - โ Babel 7
  - ๐ฆ Webpack 5
  - ๐ฅ TypeScript 4 (via Babel)
  - ๐งน Prettier
  - ๐งน Stylelint
  - ๐ฆ ESLint 7
  - ๐ก Jest
  - ๐ก Enzime
  - โ Server Side Rendering with Express
  - โ React i18next for multi language support
  - ๐ React Fast Refresh
  - โ SASS
  - โ CSS Modules
  - โ PostCSS
  - โ Dependencies visualization with Graphviz
  - โ Precommit hooks via lint-staged + Husky
  - ๐ฅ PWA support
  - ๐ฅ PWA assets and metadate automatically created

- Libs and dependencies
  - โ React 17
  - โ Express 4.x
  - โ React i18next for multi language support
  - โ Redux + Thunk middleware
  - โ Immer
  - โ Reselect
  - โ React Router 5
  - โ React Helmet

## Installation

Clone the repository, `cd` into the directory and run `yarn` (or `npm install`) on your command line to install all the dependencies. You're ready to go now !

## Usage

There are npm scripts for all the relevant things. The server will always be started on port 8500 unless otherwise specified in process.env.PORT. You can use a .env file to specify env vars. If you want to use them in your client side code, don't forget to add them in config/env.ts.

#### `yarn start`

Starts the app in development mode: creates a new client and server dev build using [Webpack][webpack-url], starts the [Express][express-url] server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `yarn build`

Creates a new build optimized for production.
