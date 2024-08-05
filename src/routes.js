import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import RecipientList from './RecipientList';
import HelloWorld from './HelloWorld';
import CompletionScreen from './CompletionScreen';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipients" element={<RecipientList />} />
      <Route path="/send" element={<HelloWorld />} />
      <Route path="/completion" element={<CompletionScreen />} />
    </Routes>
  );
}

export default AppRoutes;