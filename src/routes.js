import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopPage from './TopPage'; // または './Home' （ファイル名を変更しなかった場合）
import RecipientList from './RecipientList';
import HelloWorld from './HelloWorld';
import CompletionScreen from './CompletionScreen';
import Request from './Request'; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/recipients" element={<RecipientList />} />
      <Route path="/send" element={<HelloWorld />} />
      <Route path="/completion" element={<CompletionScreen />} />
      <Route path="/request" element={<Request />} /> 

    </Routes>
  );
}

export default AppRoutes;