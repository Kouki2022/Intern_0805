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
  const [searchTerm, setSearchTerm] = useState("");
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

  /*const handleSubmit = () => {
    alert(`選択された送金先: ${selectedRecipients.join(', ')}`);
  };*/

  const filteredRecipients = recipients.filter((recipient) =>
    recipient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
          <button className="common-back-button">
            戻る
          </button>
        <h1>請求相手を選択</h1>
      </div>
      <div className="subheader-wrapper">
        <h2 className="subheader">請求先選択</h2>
      </div>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="recipients-list">
        {filteredRecipients.map((recipient) => (
          <div
            key={recipient.id}
            onClick={() => handleRecipientToggle(recipient.id)}
            className={`recipient-item ${selectedRecipients.includes(recipient.id) ? 'selected' : ''}`}
          >
            {recipient.icon} {recipient.name}
          </div>
        ))}
      </div>
      <div className="subheader-wrapper">
        <h2 className="subheader">選択リスト</h2>
      </div>
      <div className="selected-recipients">
        {selectedRecipients.map((id) => {
          const recipient = recipients.find(r => r.id === id);
          return <div key={id} className="selected-recipient-item">{recipient.name}</div>;
        })}
      </div>
      <button 
        className="create-button" 
        onClick={handleSubmit} 
        disabled={selectedRecipients.length === 0}
      >
        作成
      </button>
    </div>
  );
};


export default Select;