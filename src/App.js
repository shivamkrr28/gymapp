import logo from './gym.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{width:"250px", height:"200px"}} className="" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Gym App
        </a>
      </header>
    </div>
  );
}

export default App;
