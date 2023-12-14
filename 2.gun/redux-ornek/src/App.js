import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import {Routes,Route} from "react-router-dom";
import Home from './components/home';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
