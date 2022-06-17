// import * as React from 'react';

// type Props = {
//   children: any;
//   css: string[];
//   helmetContext: any;
//   scripts: string[];
//   state: string;
// };

// const HTML = ({
//   children,
//   css = [],
//   scripts = [],
//   state = '{}',
//   helmetContext: { helmet },
// }: Props) => (
//   <html lang="">
//     <head>
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       {helmet.base.toComponent()}
//       {helmet.title.toComponent()}
//       {helmet.meta.toComponent()}
//       {helmet.link.toComponent()}
//       {helmet.script.toComponent()}
//       {css.filter(Boolean).map((href) => (
//         <link key={href} rel="stylesheet" href={href} />
//       ))}
//       {/* <script>{console.log(state,'------------')}</script> */}
//       <script
//         // eslint-disable-next-line react/no-danger
//         dangerouslySetInnerHTML={{
//           // TODO: Add jsesc/stringify here
//           // see: https://twitter.com/HenrikJoreteg/status/1143953338284703744
//           __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(state)}`,
//         }}
//       />
//     </head>
//     <body>
//       {/* eslint-disable-next-line react/no-danger */}
//       <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
//       {scripts.filter(Boolean).map((src) => (
//         <script key={src} src={src} />
//       ))}
//     </body>
//   </html>
// );

// export default HTML;
import React from 'react';
import { HelmetServerState } from 'react-helmet-async';
import HtmlReactParser from 'html-react-parser';
import path from 'path';

export type HtmlProps = {
  children: string;
  css: string[];
  scripts: string[];
  helmetContext: { helmet: HelmetServerState };
  state: string;
  // Props for common website
  favicon?: string;
  // Props for pwa
  metadata?: string;
};

const Html = ({
  children,
  favicon,
  metadata,
  css = [],
  scripts = [],
  helmetContext: { helmet },
  state = '{}',
}: HtmlProps) => {
  // Metadata for the common website and pwa
  const sharedMetaData = () => {
    const data: JSX.Element[] = [];
    return data;
  };

  // Metadata for the common website
  const commonHeadMetaData = () => {
    let data: JSX.Element[] = [];
    data = data.concat(sharedMetaData());
    if (favicon) {
      const ext = path.extname(favicon);
      const type =
        ext === '.ico'
          ? 'image/x-icon'
          : ext === '.png'
          ? 'image/png'
          : ext === '.svg'
          ? 'image/svg+xml'
          : undefined;
      if (type === undefined) {
        console.warn('The extension of the favicon is not supported :', ext);
      }
      data.push(<link key={favicon} rel="icon" type={type} href={favicon} />);
    }
    data.push(<meta key="theme-color" name="theme-color" content="#ffffff" />);
    return data;
  };

  // Metadata for the pwa
  const pwaMetaData = () => {
    let data: JSX.Element[] = [];
    data = data.concat(sharedMetaData());
    if (metadata) {
      data = data.concat(HtmlReactParser(metadata) as JSX.Element);
    }
    return data;
  };

  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <meta charSet="utf8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {helmet.meta.toComponent()}
        {process.env.PWA === 'true' ? pwaMetaData() : commonHeadMetaData()}
        {helmet.link.toComponent()}
        {css.filter(Boolean).map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {helmet.script.toComponent()}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.__PRELOADED_STATE__ = ${state};
            `,
          }}
        />
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.filter(Boolean).map((src) => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  );
};

export default Html;
