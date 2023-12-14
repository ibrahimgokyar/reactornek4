import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Routes,Route} from "react-router-dom";
import UserAdd from './components/UserAdd.component';
import UserDetail from './components/UserDetail.component';
import UsersList from './components/UsersList.component';

function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Anasayfa</Link>
        <Link className="nav-link" to="/users">User List</Link>
        <Link className="nav-link" to="add">User Ekle</Link>
      </div>
    </div>
  </div>
</nav>
<div className='container mt-3'>
<Routes>
  <Route path="/" element={<UsersList />} />
  <Route path="/users" element={<UsersList />} ></Route>
  <Route path="/add" element={<UserAdd />} ></Route>
  <Route path="/users/:id" element={<UserDetail />} ></Route>
</Routes>
</div>
    </div>
  );
}

export default App;
