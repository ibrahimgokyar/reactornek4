import logo from './logo.svg';
import './App.css';
import useCustomWindowSize from './hooks/useCustomWindowSize';
import useCustomFetch from './hooks/useCustomFetch';
import Abc from './components/Abc';
import Xyz from './components/Xyz';
function App() {

  const {width,height} = useCustomWindowSize()
  const {data,loading,error} = useCustomFetch('https://jsonplaceholder.typicode.com/todos/')
  return (
    <div className="App">
     
        {width > 600 &&  <img src={logo} className="App-logo" alt="logo" />}
        {width} -  {height}
        <div>
          <p>Hata : {JSON.stringify(error)}</p>
          <p>Yükleniyor : {JSON.stringify(loading)}</p>
          <p>Gelen Veri : {JSON.stringify(data)}</p>
        </div>
      <Abc />
      <Xyz />
    </div>
  );
}

export default App;
