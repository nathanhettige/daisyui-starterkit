import { PageLoading } from '@ui/utils/PageLoading';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

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
    }
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);

export default router;
