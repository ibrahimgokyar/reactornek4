import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Ulkeler from './components/Ulkeler';
import About from './components/About';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/ulkeler" element={<Ulkeler />} />
     </Routes>
    </div>
    </div>
  );
}

export default App;
