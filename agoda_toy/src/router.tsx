import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import StInfo from '@stInfo/page/StInfo';
import MyRev from './myrev/pages/MyRev';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/stinfo', element: <StInfo /> },
      { path: 'myrev', element: <MyRev /> },
    ],
  },
]);

export default router;
