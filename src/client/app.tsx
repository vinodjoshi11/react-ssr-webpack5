import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { renderRoutes } from 'react-router-config';
import style from './app.module.css';
const App: React.FC<any> = ({ route }) => {
  return (
    <div className={style.wrapper}>
      <Helmet
        defaultTitle="Desktop build"
        titleTemplate="%s – React SSR Starter – TypeScript Edition"
      />
      <h1 className={style.color}>Header</h1>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
