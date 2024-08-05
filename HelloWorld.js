import React, { useState } from 'react';
import './HelloWorld.css';
 
function HelloWorld() {
  const [amount, setAmount] = useState('');
 
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
 
  const handleSend = () => {
    if (amount > 0) {
      alert(`送金金額: ${amount}円 を サンプル氏名 に送金します`);
    }
  };
 
  return (
    <div className="container">
      <h1>送金先</h1>
      <img src = "human1.png" />
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
      <button
        className="send-button"
        onClick={handleSend}
        disabled={!amount || amount <= 0}
      >
        送金
      </button>
    </div>
  );
}
 
export default HelloWorld;