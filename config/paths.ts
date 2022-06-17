import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);

const paths: any = {
  appTemplate: resolveApp('config/webpack/template.ejs'),
  clientBuild: resolveApp('build/client'),
  serverBuild: resolveApp('build/server'),
  dotenv: resolveApp('.env'),
  src: resolveApp('src'),
  srcClient: resolveApp('src/client'),
  srcServer: resolveApp('src/server'),
  srcShared: resolveApp('src/shared'),
  locales: resolveApp('src/client'), //src/shared/lib/i18n/locales
  favicon: resolveApp('src/shared/assets/react.svg'), // For pwa, use only svg
  publicPath: '/static/',
  publicAssets: 'assets/',
};

paths.resolveModules = [
  paths.srcClient,
  paths.srcServer,
  paths.srcShared,
  paths.src,
  'node_modules',
];

export default paths;
