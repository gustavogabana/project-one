import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './contexts/auth/AuthProvider.tsx';
import { ThemeProvider } from './contexts/theme/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <AuthProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AuthProvider>
  </ThemeProvider>
);
