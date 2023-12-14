import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route,Link} from "react-router-dom"
import './App.css';
import TodosList from "./components/todos-list.component";
import TodoDetail from "./components/todo-detail.component";
import TodoAdd from "./components/add-todo.component";
function App() {
  return (
   <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Anasayfa</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/todos">Todo Listesi</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ekle">Todo Ekle</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="container mt-3">
  <Routes>
    <Route path="/" element={<TodosList />} />
    <Route path="/todos" element={<TodosList />} />
    <Route path="/ekle" element={<TodoAdd/>} />
    <Route path="/todos/:id" element={<TodoDetail />} />
    </Routes>
</div>
   </>
  );
}

export default App;
