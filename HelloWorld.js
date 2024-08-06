import React, { useState } from 'react';
import './HelloWorld.css';

function HelloWorld() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [template, setTemplate] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTemplateChange = (event) => {
    const selectedTemplate = event.target.value;
    setTemplate(selectedTemplate);
    setMessage(selectedTemplate); // テンプレートを選択するとメッセージフィールドに反映
  };

  const handleSend = () => {
    if (amount > 0) {
      alert(`送金金額: ${amount}円 を サンプル氏名 に送金します\nメッセージ: ${message}`);
    }
  };

  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <h2>送金先</h2>
      <div className="recipient">
        <img src="/human1.png" alt="サンプル氏名" className="recipient-image" />
        <h3>サンプル氏名</h3>
      </div>
      <div className="limit-info">送金上限額: 50,000円</div>
      <div className="amount-input">
        <label htmlFor="amount">送金金額:</label>
        <input
          type="number"
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
        disabled={!amount || amount <= 0 || amount > 50000}
      >
        送金
      </button>
    </div>
  );
}

export default HelloWorld;
