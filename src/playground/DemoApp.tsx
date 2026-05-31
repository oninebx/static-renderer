import { Routes, Route } from "react-router-dom";
import './statics/layouts';
import './statics/components';
import './statics'
import mountPages from "./statics";



const DemoApp = () => (
<Routes>
  <Route path="/" element={<div>Demo App</div>} />
  { mountPages() }
  <Route path="*" element={<div>Page not found</div>} />
</Routes>);

export default DemoApp;