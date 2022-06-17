import loadable from '@loadable/component';
import App from './app';
import HomeLoadData from '../server/api/home';
const AsyncHomePage = loadable(() =>
  import(/* webpackChunkName: "home" */ './pages/home')
);
const AsyncAboutPage = loadable(() =>
  import(/* webpackChunkName: "about" */ './pages/about')
);
const DesktopRoute = [
  {
    component: AsyncHomePage,
    path: '/',
    exact: true,
    name: 'home',
    loadData: HomeLoadData,
  },
  {
    component: AsyncAboutPage,
    path: '/about',
    exact: true,
    name: 'about',
    loadData: HomeLoadData,
  },
];
export default [
  {
    ...App,
    routes: DesktopRoute,
  },
];
