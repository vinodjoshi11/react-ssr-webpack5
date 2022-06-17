import * as React from 'react';
import path from 'path';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { renderRoutes, matchRoutes } from 'react-router-config';
// import { ServerUtil } from '../server-util';
import Html, { HtmlProps } from '../components/HTML';
import DesktopApp from '../../client/app';
// import DesktopRoutes from '../../client/routes';
import DesktopRoutes from '../../client/routes';
import serialize from 'serialize-javascript';
import paths from '../../../config/paths';
const helmetContext: any = {};
const routerContext: any = {};

const serverRenderer: any =
  () => (req: express.Request & { store: Store }, res: express.Response) => {
    const store = res.locals.store;
    const getRouteData = () => {
      return {
        Component: DesktopApp,
        routes: DesktopRoutes,
      };
    };

    const { routes } = getRouteData();
    console.log(req.path, '--------path');
    const promises = matchRoutes(routes, req.path)
      .map(({ route }: any) => (route.loadData ? route.loadData(store) : null))
      .map((promise) => {
        console.log(promise, '------promise');
        if (promise) {
          return new Promise((resolve) => {
            promise.then(resolve).catch(resolve);
          });
        }
      });

    Promise.all(promises).then(() => {
      const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={routerContext}>
            <HelmetProvider context={helmetContext}>
              {renderRoutes(routes)}
            </HelmetProvider>
          </StaticRouter>
        </Provider>
      );
      const state = serialize(res.locals.store.getState());
      //   const state = JSON.stringify(res.locals.store.getState()); 
      console.log(
        '-----------------------------next---------------------------'
      );
      const htmlProps: HtmlProps = {
        children: content,
        css: [
          res.locals.assetPath('bundle.css'),
          res.locals.assetPath('vendor.css'),
        ],
        scripts: [
          res.locals.assetPath('bundle.js'),
          res.locals.assetPath('vendor.js'),
        ],
        helmetContext: helmetContext,
        state,
      };

      if (process.env.PWA === 'false') {
        htmlProps.favicon =
          res.locals.assetPath(path.join(paths.publicAssets, 'favicon.png')) ||
          res.locals.assetPath(path.join(paths.publicAssets, 'favicon.ico')) ||
          res.locals.assetPath(path.join(paths.publicAssets, 'favicon.svg'));
      }

      if (
        process.env.PWA === 'true' &&
        process.env.METADATA_GENERATION === 'true'
      ) {
        htmlProps.metadata = res.locals.metadata || '';
      }
      return res.send(
        '<!doctype html>' +
          renderToString(
            <Html
              {...htmlProps}
              // css={ServerUtil.getCss(res.locals)}
              // helmetContext={helmetContext}
              // scripts={ServerUtil.getJs(res.locals)}
              // state={state}
            >
              {content}
            </Html>
          )
      );
    });
  };

export default serverRenderer;
