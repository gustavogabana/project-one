import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './contexts/auth/AuthProvider.tsx';
import { ThemeProvider } from './contexts/theme/ThemeProvider.tsx';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createRouter({ 
  routeTree,
  defaultPreload: "intent" // when user hovers the link
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
};

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
            <App />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
