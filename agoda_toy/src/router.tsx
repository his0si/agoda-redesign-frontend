import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import StInfo from '@stInfo/page/StInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/stinfo', element: <StInfo /> }],
  },
]);

export default router;
