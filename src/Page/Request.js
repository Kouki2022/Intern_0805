import React, { useRef } from 'react'
import './Request.css'

const Request = () => {
  const amountRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = amountRef.current.value;
    const message = messageRef.current.value;
    console.log('請求金額:', amount, '円');
    console.log('メッセージ:', message);
  }

  return (
    <div className='request-container'>
      <h2 className='request-title'>請求リンクの作成</h2>
      <form onSubmit={handleSubmit}>
        <div className='request-money'>
          <label htmlFor="amount">請求金額</label>
          <div className="input-wrapper">
            <input type="number" id="amount" placeholder="3000" ref={amountRef} />
            <span className="currency">円</span>
          </div>
        </div>
        <div className='request-message-container'>
          <label htmlFor="message">メッセージ（任意）</label>
          <textarea id="message" placeholder="飲み会代お願いします！" ref={messageRef}></textarea>
        </div>
        <div className='request-submit-button'>
          <button type="submit">リンクを作成</button>
        </div>
      </form>
    </div>
  )
}

export default Request