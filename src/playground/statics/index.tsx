import { Route } from 'react-router-dom';
import { components } from './components';
import { layouts } from './layouts';
import article from './pages/article.json';
import landing from './pages/landing.json';
import createRenderer from '@core/createRenderer';

const routes = [
  { path: '/article', page: article },
  { path: '/landing', page: landing },
];

const renderer = createRenderer({
  layouts,
  components,
});

const registeredRoutes = renderer.createRoutes(routes, {
  createRoute: (path, element) => <Route key={path} path={path} element={element} />
});

export default registeredRoutes;