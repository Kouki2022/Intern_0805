import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center', padding: '20px' }}>
      <h1>ユーザー名</h1>
      <p>口座番号</p>
      <button 
        onClick={() => navigate('/recipients')}
        style={{
          padding: '10px 20px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        送金先一覧
      </button>
    </div>
  );
}

export default Home;