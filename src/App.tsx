import {useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [response, setResponse] = useState<string>();

  axios.get("http://localhost:8080/")
  .then(response => {
    setResponse(response.data);
  }).catch(e => {
    console.log(e);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{response}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
