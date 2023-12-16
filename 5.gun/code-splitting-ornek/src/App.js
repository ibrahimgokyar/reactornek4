import logo from './logo.svg';
import './App.css';
import React,{Suspense} from "react";
import {useState} from "react";
function App() {

const AbcLazy = React.lazy(()=> import('./components/Abc'));
const ListeLazy = React.lazy(()=> import('./components/Liste'));
const [durum,setDurum] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
       <button onClick={() => {
        import('./convertToUpper').then((x)=> {
          console.log(x.convertToUpper('ibrahim'))
        })
       }} >Yazıyı Büyüt</button>
       <br />
       Lazy örnekleri
       <Suspense fallback={<div>Componentler yükleniyor ...</div>}>
         {durum ===1 && <AbcLazy />}
         {durum ===2 && <ListeLazy />}
       </Suspense>
       <br />
       <button onClick={() => {
        setDurum(durum === 1 ? 2 : 1)}}>{durum === 1 ? "Abc" : "Liste"}</button>
      
      </header>
    </div>
  );
}

export default App;
