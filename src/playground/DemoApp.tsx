import { Routes, Route } from "react-router-dom";
import './layouts';
import { RenderPage } from "../core/renderPage";
import aboutPageConfig from './pages/PageOne/page.json';

const DemoApp = () => (
<Routes>
  <Route path="/" element={<div>Demo App</div>} />
  <Route path="/about" element={RenderPage(aboutPageConfig)} />
</Routes>);

export default DemoApp;