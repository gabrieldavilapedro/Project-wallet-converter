import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import WalletForm from './components/WalletForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <WalletForm /> } />
      </Routes>
    </div>
  );
}

export default App;
