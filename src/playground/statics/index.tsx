import createStaticRoutes from '@core/mountPages';
import { components } from './components';
import { layouts } from './layouts';
import about from './pages/about.json';
import contact from './pages/contact.json';
import { Route } from 'react-router-dom';

const routes = [
  { path: '/about', pageConfig: about },
  { path: '/contact', pageConfig: contact },
];

export default createStaticRoutes(
  routes,
  (path, element) => <Route key={path} path={path} element={element} />,
  {
    components,
    layouts,
  }
);
