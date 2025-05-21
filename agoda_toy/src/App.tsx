import StList from '@stList/page/StList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import MainPage from './pages/MainPage';
import theme from './styles/theme/theme';
import Layout from './common/layout/MainLayout';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route element={<Layout />}>
              <Route path="/staylist" element={<StList />} />
            </Route>
          </Routes>
        </Router>
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
