import './App.css';
import Zoom from 'react-reveal/Zoom';
import Form from './components/Form'

function App() {
  return (
    <div className="App-header">
      <Zoom>
        <img src="./SuperDraft-Shield.png" alt="Super Draft shield logo" />
      </Zoom>
      <h2>Become a Coach</h2>
      <Form />
    </div>
  );
}

export default App;
