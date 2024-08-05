import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommonStyles.css';

function CompletionScreen() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#e0ffe0', fontSize: '64px', color: 'green' }}>✔️</div>
        <h2 style={{ margin: '20px 0' }}>送金処理が完了しました</h2>
      </div>
      <button 
        onClick={handleBackToHome}
        className="back-button"
      >
        トップ画面に戻る
      </button>
    </div>
  );
}

export default CompletionScreen;