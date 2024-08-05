import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommonStyles.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '50vh', justifyContent: 'center', padding: '20px' }}>
      <h1>ユーザー名</h1>
      <p>口座番号</p>
      <button 
        onClick={() => navigate('/recipients')}
        className="back-button"
      >
        送金先一覧
      </button>
    </div>
  );
}

export default Home;