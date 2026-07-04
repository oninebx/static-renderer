import { Routes, Route, Link } from "react-router-dom";
import routes from './statics';
import DemoHome from "./Home";

const DemoApp = () => (
  <Routes>
    <Route path="/" element={<DemoHome />} />
    {routes}
    <Route path="*" element={<div>Page not found</div>} />
  </Routes>
);

export default DemoApp;