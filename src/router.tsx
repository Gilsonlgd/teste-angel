import { createBrowserRouter } from 'react-router-dom';

import AdminLayout from '@layout/admin/AdminLayout';
import PublicLayout from '@layout/public/PublicLayout';

import adminRoutes from './routes/admin';
import publicRoutes from './routes/public';

const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <PublicLayout />,
        children: publicRoutes,
      },
      {
        path: '/admin',
        element: <AdminLayout />,
        children: adminRoutes,
      },
    ],
  },
]);

export default router;
