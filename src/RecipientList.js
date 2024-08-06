import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipientList.css';

function RecipientList() {
  const navigate = useNavigate();

  const recipients = [
    { id: 1, name: '山田 太郎', icon: '🧑' },
    { id: 2, name: '鈴木 一郎', icon: '🧔' },
    { id: 3, name: '佐藤 花子', icon: '👩' },
  ];

  const handleRecipientSelect = (recipient) => {
    navigate('/send', { state: { recipient } });
  };

  return (
    <div className="recipient-list-container">
      <div className="header3">
        <button className="back-button" onClick={() => navigate('/')}>
          戻る
        </button>
        <h1>送金相手を選択</h1>
      </div>
      <div className="content-wrapper3">
        <div className="action-buttons">
          {recipients.map(recipient => (
            <button
              key={recipient.id}
              className="action-button recipient-button"
              onClick={() => handleRecipientSelect(recipient)}
            >
              <span className="icon">{recipient.icon}</span>
              {recipient.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipientList;