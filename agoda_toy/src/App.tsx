import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StInfo from './stInfo/page/StInfo';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Layout from './common/layout/MainLayout';
import router from './router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

const Global = createGlobalStyle`
  width: 120rem;
  p {
    margin: 0;
  }


    ${reset}
  `;

// const ThemedBox = styled.div`
//   background-color: ${({ theme }) => theme.colors.secondary};
//   color: ${({ theme }) => theme.colors.white};
//   padding: 20px;
//   ${({ theme }) => theme.fonts.display.lg}
// `;

export default App;
