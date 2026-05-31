import { Route } from 'react-router-dom';
import { components } from './components';
import { layouts } from './layouts';
import about from './pages/about.json';
import contact from './pages/contact.json';
import createRenderer from '@core/createRenderer';

const routes = [
  { path: '/about', page: about },
  { path: '/contact', page: contact },
];

const renderer = createRenderer({
  layouts,
  components,
});

const registeredRoutes = renderer.createRoutes(routes, {
  createRoute: (path, element) => <Route key={path} path={path} element={element} />
});

export default registeredRoutes;