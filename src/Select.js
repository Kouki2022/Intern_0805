import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Select.css';
import './CommonStyles.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';

const Select = () => {
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, message } = location.state || {};

  const recipients = [
    { id: 1, name: '山田 太郎', icon: icon1 },
    { id: 2, name: '鈴木 一郎', icon: icon2 },
    { id: 3, name: '佐藤 花子', icon: icon3 },
    { id: 4, name: '田中 太郎', icon: icon4 },
    { id: 5, name: '小林 次郎', icon: icon5 },
  ];

  const handleRecipientToggle = (id) => {
    setSelectedRecipients((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((recipientId) => recipientId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSubmit = () => {
    const selectedRecipientsData = selectedRecipients.map(id => 
      recipients.find(r => r.id === id)
    );
    navigate('/link-list', { 
      state: { 
        selectedRecipients: selectedRecipientsData, 
        amount, 
        message 
      } 
    });
  };

  return (
    <div className="container">
      <div className="common-header">
        <button className="common-back-button" onClick={() => navigate(-1)}>
          戻る
        </button>
        <h1>請求先選択</h1>
      </div>
      <div className="recipients-list">
        {recipients.map((recipient) => (
          <div
            key={recipient.id}
            onClick={() => handleRecipientToggle(recipient.id)}
            className={`recipient-item ${selectedRecipients.includes(recipient.id) ? 'selected' : ''}`}
          >
            <img src={recipient.icon} alt={recipient.name} className="recipient-icon" />
            {recipient.name}
          </div>
        ))}
      </div>
      <h2>選択リスト</h2>
      <div className="selected-recipients">
        {selectedRecipients.map((id) => {
          const recipient = recipients.find(r => r.id === id);
          return (
            <div key={id} className="selected-recipient-item">
              <img src={recipient.icon} alt={recipient.name} className="recipient-icon" />
              {recipient.name}
            </div>
          );
        })}
      </div>
      <button className="create-button" onClick={handleSubmit}>作成</button>
    </div>
  );
};

export default Select;