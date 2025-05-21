import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import StInfo from '@stInfo/page/StInfo';
import StList from './stList/page/StList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/stinfo', element: <StInfo /> },
      { path: '/stlist', element: <StList /> },
    ],
  },
]);

export default router;
