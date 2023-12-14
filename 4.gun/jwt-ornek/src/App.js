import './App.css';
import  {Layout} from 'antd';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="App">
      <Layout>
        <LoginForm />
      </Layout>
    </div>
  );
}

export default App;
