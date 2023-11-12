import { BrowserRouter } from 'react-router-dom';
import Appshell from './Templates/Appshell';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Appshell>
        <Router />
      </Appshell>
    </BrowserRouter>
  );
}

export default App;
