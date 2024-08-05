import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecipientList.css';
import HelloWorld from './HelloWorld';

function RecipientList() {
  const navigate = useNavigate();
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const recipientListRef = useRef(null); // refを作成

  const recipients = [
    { id: 1, name: '山田 太郎', icon: '🧑' },
    { id: 2, name: '鈴木 一郎', icon: '🧔' },
    { id: 3, name: '佐藤 花子', icon: '👩' },
    { id: 4, name: '田中 太郎', icon: '🧑' },
    { id: 5, name: '小林 次郎', icon: '🧔' },
    { id: 6, name: '高橋 花子', icon: '👩' },
    { id: 7, name: '伊藤 一郎', icon: '🧑' },
    { id: 8, name: '渡辺 次郎', icon: '🧔' },
    { id: 9, name: '加藤 花子', icon: '👩' },
    { id: 10, name: '松本 太郎', icon: '🧑' },
    { id: 11, name: '中村 次郎', icon: '🧔' },
    { id: 12, name: '小島 花子', icon: '👩' },
    { id: 13, name: '森田 太郎', icon: '🧑' },
    { id: 14, name: '横山 次郎', icon: '🧔' },
    { id: 15, name: '吉田 花子', icon: '👩' },
    { id: 16, name: '大島 太郎', icon: '🧑' },
    { id: 17, name: '藤田 次郎', icon: '🧔' },
    { id: 18, name: '西田 花子', icon: '👩' },
    { id: 19, name: '内田 太郎', icon: '🧑' },
    { id: 20, name: '石田 次郎', icon: '🧔' },
    { id: 21, name: '池田 花子', icon: '👩' },
    { id: 22, name: '佐々木 太郎', icon: '🧑' },
    { id: 23, name: '村田 次郎', icon: '🧔' },
    { id: 24, name: '岡田 花子', icon: '👩' },
    { id: 25, name: '清水 太郎', icon: '🧑' },
    { id: 26, name: '山下 次郎', icon: '🧔' },
    { id: 27, name: '松田 花子', icon: '👩' },
    { id: 28, name: '川村 太郎', icon: '🧑' },
    { id: 29, name: '林 次郎', icon: '🧔' },
    { id: 30, name: '金子 花子', icon: '👩' },
  ];

  const filteredRecipients = recipients.filter(recipient =>
    recipient.name.includes(searchTerm)
  );

  useEffect(() => {
    if (recipientListRef.current) {
      // ヘッダーの高さを取得して、その位置にスクロールする
      const headerHeight = document.querySelector('.header').offsetHeight;
      recipientListRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }, [searchTerm, filteredRecipients]);

  if (selectedRecipient) {
    return <HelloWorld />;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>送金相手を選択</h1>
        <input
          type="text"
          placeholder="検索"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-box"
        />
        <div className="buttons">
          <button onClick={() => navigate('/')} className="button back-button">
            戻る
          </button>
          <button onClick={() => navigate('/invoices')} className="button invoice-button">
            請求書
          </button>
        </div>
      </div>
      <div className="recipient-list" ref={recipientListRef}>
        {filteredRecipients.map(recipient => (
          <button
            key={recipient.id}
            className="recipient-button"
            onClick={() => setSelectedRecipient(recipient)}
          >
            <span className="recipient-icon">{recipient.icon}</span>
            <span>{recipient.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecipientList;