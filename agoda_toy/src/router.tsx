import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import HeaderOnlyLayout from './common/layout/HeaderOnlyLayout';
import GuestHeaderOnlyLayout from './res/layout/GuestHeaderOnlyLayout';
import StInfo from '@stInfo/page/StInfo';
import StList from './stList/page/StList';
import MainPage from './main/pages/MainPage';
import MyRev from './myrev/pages/MyRev';
import GuestInfoPage from './res/pages/GuestInfoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/stinfo', element: <StInfo /> },
      { path: 'myrev', element: <MyRev /> },
      { path: '/stlist', element: <StList /> },
    ],
  },
  {
    path: '/main',
    element: <HeaderOnlyLayout />,
    children: [{ path: '', element: <MainPage /> }],
  },
  {
    path: '/guestinfo',
    element: <GuestHeaderOnlyLayout />,
    children: [{ path: '', element: <GuestInfoPage /> }],
  },
]);

export default router;