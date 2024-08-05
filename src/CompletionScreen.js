import React from 'react';

function CompletionScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#e0ffe0', fontSize: '64px', color: 'green' }}>✔️</div>
        <h2 style={{ margin: '20px 0' }}>送金処理が完了しました</h2>
      </div>
      <button style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#fff',
        border: '2px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        トップ画面に戻る
      </button>
    </div>
  );
}

export default CompletionScreen;