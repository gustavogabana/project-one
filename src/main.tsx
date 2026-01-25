import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './contexts/auth/AuthProvider.tsx';
import { ThemeProvider } from './contexts/theme/ThemeProvider.tsx';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
};

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
