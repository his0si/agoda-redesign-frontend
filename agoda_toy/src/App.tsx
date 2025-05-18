import reset from 'styled-reset';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global>
          <div>project</div>
        </Global>
        <ThemedBox> Theme 테스트</ThemedBox>
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
