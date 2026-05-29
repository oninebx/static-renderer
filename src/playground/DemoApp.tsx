import { Routes, Route } from "react-router-dom";

const DemoApp = () => (
<Routes>
  <Route path="/" element={<div>Demo App</div>} />
  <Route path="/about" element={<div>About Page</div>} />
</Routes>);

export default DemoApp;