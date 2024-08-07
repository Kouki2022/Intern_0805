// Person.jsx

import React from 'react';
import './Person.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useUser } from './UserContext';

const Person = () => {
  const { userInfo } = useUser();

  return (
    <div className="person-info">
      <div className="user-profile">
        <AccountCircleIcon className="user-icon" />
        <div className="user-name">{userInfo.name}</div>
      </div>
      <div className="account-details">
        <div className="account-numbers">
          <div>口座番号 {userInfo.contractNumber}</div>
          <div>{userInfo.branchType} 普通 {userInfo.accountNumber}</div>
        </div>
        <div className="balance-section">
          <div className="balance-amount">{userInfo.balance.toLocaleString()}円</div>
        </div>
      </div>
    </div>
  );
};

export default Person;