import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from './error-page';
import Home from '../Page/Home';
import Browse from '../Page/Browse';
import About from '../Page/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
