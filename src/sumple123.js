import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CompletionScreen.css';
import './CommonStyles.css';

function CompletionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    amount, 
    recipient, 
    message,
    bankName,
    branchName,
    accountType,
    accountNumber,
    fee,
    senderName,
    phoneNumber
  } = location.state || {};

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
        <h1>振込完了</h1>
        <button className="logout-button" onClick={handleBackToHome}>ログアウト</button>
      </div>
      <div className="content-wrapper3">
        <p className="completion-message">振込を正常に受け付けました。</p>
        <p className="receipt-info">
          受付番号: XXXXXXXX-XXX<br />
          受付日時: {currentDate}
        </p>
        <table className="transaction-details">
          <tbody>
            <tr>
              <th>振込予定日</th>
              <td>{currentDate.split(' ')[0]}</td>
            </tr>
            <tr>
              <th rowSpan="3">振込先口座</th>
              <td>{bankName}</td>
            </tr>
            <tr>
              <td>{branchName}</td>
            </tr>
            <tr>
              <td>{accountType} {accountNumber}<br />{recipient}</td>
            </tr>
            <tr>
              <th>振込金額</th>
              <td>{amount ? `${amount.toLocaleString()}円` : '---'}</td>
            </tr>
            <tr>
              <th>振込手数料</th>
              <td>{fee ? `${fee.toLocaleString()}円` : '---'}</td>
            </tr>
            <tr>
              <th>引落金額合計</th>
              <td>{amount && fee ? `${(amount + fee).toLocaleString()}円` : '---'}</td>
            </tr>
            <tr>
              <th rowSpan="2">引落口座</th>
              <td>店番：本店</td>
            </tr>
            <tr>
              <td>口座番号：1234567</td>
            </tr>
            <tr>
              <th>振込依頼人名</th>
              <td>{senderName}</td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>{phoneNumber}</td>
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