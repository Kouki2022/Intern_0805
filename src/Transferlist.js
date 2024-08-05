import React from 'react';
import './UserAccount.css'; // CSSファイルをインポート

const UserAccount = ({ user }) => {
  return (
    <div className="user-account">
      <div className="user-icon">
        <img src={user.iconUrl} alt="User Icon" />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>口座番号: {user.accountNumber}</p>
        <p>預金残高: ¥{user.balance.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default UserAccount;