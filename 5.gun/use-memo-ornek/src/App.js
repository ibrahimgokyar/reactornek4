import Header from './components/Header';
import {useState} from "react";
import './App.css';

function App() {
  const [number,setNumber] = useState(0);
  return (
    <div className="App">
       <Header title="Title" />
       <button onClick={() => setNumber(number + 1)}>Artır</button>
       <p>{number}</p>
    </div>
  );
}

export default App;
