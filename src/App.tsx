import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/carteira" element={ <div>Carteira</div> } />
      </Routes>
    </div>
  );
}

export default App;
