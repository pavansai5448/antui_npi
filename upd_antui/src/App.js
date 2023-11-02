import MainPage from './Components/MainPage';
import Login from './Components/Login';
import { useState } from 'react';
import './App.css';

function App() {
  const [token, setToken] = useState(false);
  return (
    <div className="App">
      { !token &&
        <Login setToken={setToken}/>
      }
      {token &&
        <MainPage/>
      }
      
    </div>
  );
}

export default App;


