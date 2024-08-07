import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RecipientList.css';
import './CommonStyles.css';
import { useAuth } from './AuthContext';

function RecipientList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipients, setRecipients] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recipients');
        setRecipients(response.data);
      } catch (error) {
        console.error('Failed to fetch recipients:', error);
        alert('受取人リストの取得に失敗しました。');
      }
    };
  
    fetchRecipients();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleRecipientSelect = (recipient) => {
    navigate('/send', { state: { recipient } });
  };

  const filteredRecipients = recipients.filter(recipient =>
    recipient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recipient-list-container">
      <div className="common-header">
        <button className="common-back-button" onClick={() => navigate('/')}>
          戻る
        </button>
        <h1>送金相手を選択</h1>
        <button className="logout-button" onClick={handleLogout}>
          ログアウト
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="content-wrapper3">
        <div className="action-buttons">
          {filteredRecipients.map(recipient => (
            <button
              key={recipient.id}
              className="action-button recipient-button"
              onClick={() => handleRecipientSelect(recipient)}
            >
              <img 
                src={`data:image/png;base64,${recipient.icon}`} 
                alt={recipient.name} 
                className="recipient-icon" 
              />
              {recipient.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipientList;