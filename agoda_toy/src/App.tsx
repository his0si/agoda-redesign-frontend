import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import router from './router';
import theme from './styles/theme/theme';

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
