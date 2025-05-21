import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import HeaderOnlyLayout from './common/layout/HeaderOnlyLayout';
import StInfo from '@stInfo/page/StInfo';
import StList from './stList/page/StList';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/stinfo', element: <StInfo /> },
      { path: '/stlist', element: <StList /> },
    ],
  },
  {
    path: '/main',
    element: <HeaderOnlyLayout />,
    children: [
      { path: '', element: <MainPage /> },
    ],
  },
]);

export default router;
