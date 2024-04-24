import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './styles/app.css';

function App() {
  return (
    <div
      style={ {
        backgroundColor: '#2FC18C',
        height: '100vh',

      } }
    >
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <Wallet /> } />
      </Routes>
    </div>
  );
}

export default App;
