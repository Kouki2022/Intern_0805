// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';

function Login() {
  const [branchCode, setBranchCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountNumber === '12345' && password === 'password') {
      login();
      navigate('/');
    } else {
      alert('ログインに失敗しました。正しい口座番号とパスワードを入力してください。');
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">脳筋登山　送金システム</div>
      </header>
      <main className="login-main">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="account-number">口座番号</label>
            <input
              type="text"
              id="account-number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="半角数字7桁"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">ログインパスワード</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="半角英数字・記号4〜16桁"
            />
          </div>
          
          <button type="submit" className="login-button">ログイン</button>
        </form>
      </main>
    </div>
  );
}

export default Login;