import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import RecipientList from './RecipientList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipients" element={<RecipientList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;