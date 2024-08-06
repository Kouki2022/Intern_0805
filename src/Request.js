import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';

const Request = () => {
  const navigate = useNavigate();

  return (
    <div className="request-container">
      <div className="header2">
        <button className="back-button" onClick={() => navigate('/')}>
          戻る
        </button>
        <h1>請求リンクの作成</h1>
      </div>
      <div className="content-wrapper2">
        <div className="request-money1">
          <label htmlFor="amount">金額</label>
          <div className="input-wrapper">
            <input type="number" id="amount" placeholder="0" />
            <span className="currency">円</span>
          </div>
        </div>
        <div className="request-message-container">
          <label htmlFor="message">メッセージ</label>
          <textarea id="message" placeholder="メッセージを入力してください"></textarea>
        </div>
        <div className="request-submit-button">
          <button>請求する</button>
        </div>
      </div>
    </div>
  );
}

export default Request;