import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ログイン処理をここに追加
    console.log('口座番号:', accountNumber);
    console.log('パスワード:', password);
  };

  return (
    <div className="login-container">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="account-number">口座番号</label>
        <input
          type="text"
          id="account-number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="口座番号を入力"
          required
        />
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワードを入力"
          required
        />
        <button type="submit" className="login-button">ログイン</button>
      </form>
    </div>
  );
}

export default Login;
