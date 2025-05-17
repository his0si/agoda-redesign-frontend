import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <Global>
        <div>project</div>
      </Global>
    </>
  );
}

const Global = createGlobalStyle`
    ${reset}
  `;

export default App;
