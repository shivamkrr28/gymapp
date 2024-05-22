import ott_img from './ott3.webp';
import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
       
      <header >
      <div style={{}}><Navbar /></div>
        <img src={ott_img} style={{width:"450px", height:"220px", marginTop:"10px"}} className="" alt="logo" />
        <br />
        <a href="#" rel="noopener noreferrer"> The Ott App </a>
      </header>
    </div>
  );
}

export default App;
