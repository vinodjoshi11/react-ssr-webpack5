// import path from 'path';
// import express from 'express';
// import cors from 'cors';
// import chalk from 'chalk';
// // import manifestHelpers from 'express-manifest-helpers';
// import manifestHelpers from './middleware/manifestHelpers';
// import bodyParser from 'body-parser';
// import paths from '../../config/paths';
// // import { configureStore } from '../shared/store';
// import errorHandler from './middleware/errorHandler';
// import serverRenderer from './middleware/serverRenderer';
// import addStore from './middleware/addStore';

// require('dotenv').config();

// const app = express();
// // const app = express.default();
// app.use(
//   manifestHelpers({
//     manifestPath: path.join(
//       paths.clientBuild,
//       paths.publicPath,
//       'assets-manifest.json'
//     ),
//     cache: true,
//   })
// );
// // Use Nginx or Apache to serve static assets in production or remove the if() around the following
// // lines to use the express.static middleware to serve assets for production (not recommended!)
// // if (process.env.NODE_ENV === 'development') {
// app.use(
//   paths.publicPath,
//   express.static(path.join(paths.clientBuild, paths.publicPath))
// );
// // }

// app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(addStore);

// // const manifestPath = path.join(paths.clientBuild, paths.publicPath);

// // app.use(
// //   manifestHelpers({
// //     manifestPath: `${manifestPath}/manifest.json`,
// //   })
// // );

// app.use(serverRenderer());

// app.use(errorHandler);

// app.listen(process.env.PORT || 8500, () => {
//   console.log(
//     `[${new Date().toISOString()}]`,
//     chalk.blue(`App is running: http://localhost:${process.env.PORT || 8500}`)
//   );
// });

// export default app;
import path from 'path';
import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import bodyParser from 'body-parser';

import paths from '../../config/paths';
import app from './app';

require('dotenv').config();

const server = express();

server.use(
  paths.publicPath,
  express.static(path.join(paths.clientBuild, paths.publicPath))
);

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('*', app);

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  server.listen(process.env.PORT || 8500, () => {
    console.log(
      `[${new Date().toISOString()}]`,
      chalk.blue(
        `App is running: http://localhost:${process.env.PORT || 8500} ${
          process.env.NODE_ENV
        }`
      )
    );
  });
}

export default server;
