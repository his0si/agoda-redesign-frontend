import reset from 'styled-reset';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme/theme';
import StInfo from './stInfo/page/StInfo';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <StInfo />
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
