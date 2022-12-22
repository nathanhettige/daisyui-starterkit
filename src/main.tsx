import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/ReactQueryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PageLoading } from './components/Theme/utils/PageLoading';

/* Code split theme page */
const ThemePage = lazy(async () => await import('./pages/ThemePage'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/theme',
      element: (
        <Suspense fallback={<PageLoading />}>
          <ThemePage />
        </Suspense>
      )
    },
    {
      path: '/test',
      element: <PageLoading />
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
