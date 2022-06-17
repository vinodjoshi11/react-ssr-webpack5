import path from 'path';
import express from 'express';

import paths from '../../config/paths';

import addStore from './middleware/addStore';
import handleErrors from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';
import manifestHelpers from './middleware/manifestHelpers';
// import generateMetadata from './middleware/generateMetadata';

const app = express.Router();

app.use(
  manifestHelpers({
    manifestPath: path.join(
      paths.clientBuild,
      paths.publicPath,
      'assets-manifest.json'
    ),
    cache: true,
  })
);

app.use(addStore);
app.use(serverRenderer());
app.use(handleErrors);

export default app;
