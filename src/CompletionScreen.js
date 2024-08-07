import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CompletionScreen.css';
import './CommonStyles.css';
import { useAuth } from './AuthContext';
import { useUser } from './UserContext';

function CompletionScreen() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();
  const { userInfo } = useUser();
  
  const { 
    amount, 
    recipient, 
    message,
    bankName,
    branchName,
    accountType,
    accountNumber,
    fee,
    phoneNumber
  } = location.state || {};

  const handleLogout = () => {
    logout();
    navigate('/login');
};

  const handleBackToHome = () => {
    navigate('/', { replace: true });
  };

  const currentDate = new Date().toLocaleString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="completion-container">
      <div className="common-header">
                <button className="common-back-button" onClick={() => navigate('/TopPage')}>
                    Top
                </button>
                <h1>送金完了</h1>
                <button className="logout-button" onClick={handleLogout}>

                    ログアウト
                </button>
            </div>
      <div className="content-wrapper3">
        <p className="completion-message">送金を正常に完了しました。</p>
        <p className="receipt-info">
          受付日時: {currentDate}
        </p>
        <table className="transaction-details">
          <tbody>
            
            <tr>
              <th rowSpan="3">送金先</th>
            </tr>
            <tr>
            </tr>
            <tr>
              <td>{accountType} {accountNumber}<br />{recipient}</td>
            </tr>
            <tr>
              <th>送金金額</th>
              <td>{amount ? `${amount.toLocaleString()}円` : '---'}</td>
            </tr>
            <tr>
            <th>送金人名</th>
            <td>{userInfo.name}</td>
            </tr>
            {message && (
              <tr>
                <th>メッセージ</th>
                <td>{message}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompletionScreen;