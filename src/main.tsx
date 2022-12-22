import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ThemePage from './pages/ThemePage'
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/ReactQueryClient';
import { ReactQueryDevtools } from 'react-query/devtools';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/theme',
      element: <ThemePage />
    }
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
