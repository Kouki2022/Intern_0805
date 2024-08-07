// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';
import './Login.css';

function Login() {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/account', {
        accountNumber: parseInt(accountNumber),
        password
      });
      
      if (response.status === 200) {
        const userData = response.data;
        login(userData);
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.error || 'ログインに失敗しました。');
      } else {
        alert('ログインに失敗しました。ネットワーク接続を確認してください。');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="logo">脳筋登山　送金システム</div>
      </header>
      <main className="content-wrapper3">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="account-number">口座番号</label>
            <input
              type="text"
              id="account-number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="半角数字6桁"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">ログインパスワード</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="半角数字4桁"
            />
          </div>
          
          <button type="submit" className="login-button">ログイン</button>
        </form>
      </main>
    </div>
  );
}

export default Login;