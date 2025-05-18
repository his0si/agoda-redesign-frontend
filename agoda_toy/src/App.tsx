import reset from 'styled-reset';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: sans-serif;
    background-color: #f4f4f4;
  }
`;

// ThemedBox는 현재 사용되지 않으므로 주석 처리하거나 삭제할 수 있습니다.
// 만약 다른 페이지에서 테스트용으로 사용한다면 유지해도 됩니다.
// const ThemedBox = styled.div`
//   background-color: ${({ theme }) => theme.colors.secondary};
//   color: ${({ theme }) => theme.colors.white};
//   padding: 20px;
//   ${({ theme }) => theme.fonts.display.lg}
// `;

export default App;
