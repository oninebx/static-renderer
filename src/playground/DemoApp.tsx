import { Routes, Route } from "react-router-dom";
import routes from './statics';



const DemoApp = () => (
  <Routes>
    <Route path="/" element={<div>Demo App</div>} />
    {routes}
    <Route path="*" element={<div>Page not found</div>} />
  </Routes>
);

export default DemoApp;