import mountStaticPages, { registerPage } from '@core/mountPages';
import about from './pages/about.json';
import contact from './pages/contact.json';
import { Route } from 'react-router-dom';

registerPage('/about', about);
registerPage('/contact', contact);

export default mountStaticPages((path, element) => <Route key={path} path={path} element={element} />);