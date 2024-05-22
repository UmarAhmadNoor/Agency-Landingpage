import './App.css';
import Features from './Pages/Features/Features';
import Nexcent from './Components/Nexcent/Nexcent';
import Community from './Pages/Community/Community';
import Blog from './Pages/Blog/Blog';
import Price from './Pages/Pricing/Price';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";


function App() {
            
  
  const handlebtn = () => {
    alert("Nexcent!");
  }

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div>
            <img className="navbarimg" src="../../../images/Logo.png" alt="Logo" />
          </div>

          <div>
            <ul className="nav-links">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Features">Features</Link>
              </li>
              <li>
                <Link to="/Community">Community</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/Price">Pricing</Link>
              </li>
              <button className="navbtnstyle" onClick={handlebtn}>Register</button>
            </ul>
          </div>
        </nav>
  

        <Routes>
          <Route path="/" element={<Nexcent/> } />
          <Route path="/Home" element={<Nexcent/> } />
          <Route path="/Features" element={<Features/> } />
          <Route path="/Community" element={<Community/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Price" element={<Price/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
