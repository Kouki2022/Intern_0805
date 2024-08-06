import React from 'react';
import Person from '../component/Person';
import './TopPage.css';
import SendIcon from '@mui/icons-material/Send';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import HistoryIcon from '@mui/icons-material/History';

const TopPage = () => {
  return (
    <div className="toppage-container">
      <header className="app-header">
        <h1>Quick Transfer</h1>
      </header>
      <main className="content-wrapper">
        <Person />
        <div className="action-buttons">
          <button className="action-button send-money">
            <SendIcon className="icon" /> 送金する
          </button>
          <button className="action-button request-money">
            <RequestPageIcon className="icon" /> 請求する
          </button>
          <button className="action-button read-history">
            <HistoryIcon className="icon" /> 履歴を見る
          </button>
          <button className="action-button read-history">
            <HistoryIcon className="icon" /> 総履歴を見る
          </button>
        </div>
      </main>
    </div>
  );
}

export default TopPage;