import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HelloWorld.css';
import './CommonStyles.css';

function HelloWorld() {
  const [amount, setAmount] = useState('');
  const [template, setTemplate] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
    setMessage(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (amount > 0) {
      // ここで実際の送金処理を行う
      // メッセージも含めて送信する
      console.log(`送金額: ${amount}円, メッセージ: ${message}`);
      // 処理が成功したら、CompletionScreenに遷移
      navigate('/completion', { replace: true });
    }
  };

  const handleBack = () => {
    navigate('/recipients', { replace: true });
  };

  return (
    <div className="container">
      <h1>送金先</h1>
      <img src="human1.png" alt="送金先の画像" />
      <h2>サンプル氏名</h2>
      <div className="limit-info">送金上限額: 50,000円</div>
      <div className="amount-input">
        <label htmlFor="amount">送金金額:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="円"
          min="1"
        />
      </div>
      <div className="message-input">
        <label htmlFor="message">メッセージ:</label>
        <select id="template" value={template} onChange={handleTemplateChange}>
          <option value="">テンプレートを選択</option>
          <option value="ありがとうございます。">ありがとうございます。</option>
          <option value="お世話になっております。">お世話になっております。</option>
          <option value="よろしくお願いします。">よろしくお願いします。</option>
        </select>
        <input
          type="text"
          id="message"
          value={message}
          onChange={handleMessageChange}
          placeholder="任意"
        />
      </div>
      <button
        className="send-button"
        onClick={handleSend}
        disabled={!amount || amount <= 0}
      >
        送金
      </button>
      <button
        className="back-button"
        onClick={handleBack}
      >
        戻る
      </button>
    </div>
  );
}

export default HelloWorld;