import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ThemePage from './pages/ThemePage';

/* Code split theme page */
// const ThemePage = lazy(async () => await import('./pages/ThemePage'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/theme',
      element: (
        // <Suspense fallback={<PageLoading />}>
        <ThemePage />
        // </Suspense>
      )
    }
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);

export default router;
