import reset from 'styled-reset';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

const Global = createGlobalStyle`
    ${reset}
  `;

const ThemedBox = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  ${({ theme }) => theme.fonts.display.lg}
`;

export default App;
