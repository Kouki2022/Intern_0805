import React from 'react';
import Person from '../component/Person';
import './TopPage.css';

const TopPage = () => {
  return (
    <div className="toppage-container">
      <div className="content-wrapper">
        <Person />
        <div className="action-buttons">
          <button className="action-button send-money">
            <span className="icon">→</span> 送金する
          </button>
          <button className="action-button request-money">請求する</button>
          <button className="action-button history">請求履歴</button>
        </div>
      </div>
    </div>
  );
}

export default TopPage;