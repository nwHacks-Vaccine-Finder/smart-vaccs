import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import User from './components/User/User';
import Pharmacy from './components/Pharmacy/Pharmacy';
import CreateUser from './components/CreateUser';
import CreatePharmacy from './components/CreatePharmacy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<User />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/createpharmacy" element={<CreatePharmacy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
