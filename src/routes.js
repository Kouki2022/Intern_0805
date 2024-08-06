import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipientList from './Page/RecipientList';
import HelloWorld from './Page/HelloWorld';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecipientList />} />
      <Route path="/send" element={<HelloWorld />} />
    </Routes>
  );
}

export default AppRoutes;