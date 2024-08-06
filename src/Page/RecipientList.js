import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommonStyles.css';

function RecipientList() {
  const navigate = useNavigate();

  const recipients = [
    { id: 1, name: '山田 太郎', icon: '🧑' },
    { id: 2, name: '鈴木 一郎', icon: '🧔' },
    { id: 3, name: '佐藤 花子', icon: '👩' },
  ];

  const handleRecipientSelect = () => {
    navigate('/send');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '50vh', justifyContent: 'center', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>送金相手を選択</h1>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        {recipients.map(recipient => (
          <button
            key={recipient.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              marginBottom: '10px',
              padding: '10px',
              background: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={handleRecipientSelect}
          >
            <span style={{marginRight:'10px',fontSize: '24px'}}>
              {recipient.icon}
            </span>
            <span>{recipient.name}</span>
          </button>
        ))}
      </div>
      <button 
        onClick={() => navigate('/')}
        className="back-button"
      >
        戻る
      </button>
    </div>
  );
}

export default RecipientList;