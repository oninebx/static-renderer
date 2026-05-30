import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import DemoApp from './DemoApp';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DemoApp />
    </BrowserRouter>
  </StrictMode>,
)
