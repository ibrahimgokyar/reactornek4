import './App.css';
import HomeLayout from "./pages/HomeLayout";
import AdminLayout from "./pages/AdminLayout";
import Login from "./pages/Login";
import {AuthProvider} from "./context/AuthContext"
import PrivateRoute from "./auth/privateRoute";
import PrivatePage from "./pages/PrivatePage";
import Private2 from "./pages/Private2";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <AuthProvider>
    <div className="App">
     <Routes>
      <Route path="/" element={<HomeLayout />} /> 
      <Route element={<PrivateRoute><AdminLayout /></PrivateRoute>} />
      <Route path="admin/manager" element={<PrivateRoute roles={["admin", "manager"]} >
        <Private2></Private2></PrivateRoute>} />
        <Route path="admin/customer" element={<PrivateRoute roles={["admin", "customer"]} >
        <Private2></Private2></PrivateRoute>} />
        <Route path="private" element={<PrivatePage />} />
        <Route path="login" element={<Login />} />  
        <Route path="*" element={<p>Sayfa bulunamadı</p>} />
     </Routes>
     </div>
    </AuthProvider>
   
  );
}  

export default App;
