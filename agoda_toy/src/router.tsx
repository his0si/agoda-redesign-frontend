import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import HeaderOnlyLayout from './common/layout/HeaderOnlyLayout';
import StInfo from '@stInfo/page/StInfo';
import StList from './stList/page/StList';
import MainPage from './main/pages/MainPage';
import GuestInfoPage from './res/pages/GuestInfoPage';
import GuestHeaderOnlyLayout from './res/layout/GuestHeaderOnlyLayout';

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
  {
    path: '/guestinfo',
    element: <GuestHeaderOnlyLayout />,
    children: [
      { path: '', element: <GuestInfoPage /> },
    ],
  },
]);

export default router;
