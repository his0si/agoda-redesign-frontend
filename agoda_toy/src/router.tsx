import { createBrowserRouter } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import HeaderOnlyLayout from './common/layout/HeaderOnlyLayout';
import StInfo from '@stInfo/page/StInfo';
import StList from './stList/page/StList';
import MainPage from './main/pages/MainPage';
import MyRev from './myrev/pages/MyRev';
import MyRevModal from './myrev/components/myRev02Modal/MyRevModal';

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
    path: 'modal',
    element: <MyRevModal />,
  },
]);

export default router;
