import React from 'react';
import { useNavigate } from 'react-router-dom';
import Person from './Person';
import './TopPage.css';
import SendIcon from '@mui/icons-material/Send';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import HistoryIcon from '@mui/icons-material/History';

const TopPage = () => {
  const navigate = useNavigate();

  return (
    <div className="toppage-container1">
      <header className="app-header1">
        <h1>Quick Transfer</h1>
      </header>
      <main className="content-wrapper1">
        <Person />
        <div className="action-buttons1">
          <button className="action-button send-money" onClick={() => navigate('/recipients')}>
            <SendIcon className="icon1" /> 送金する
          </button>
          <button className="action-button request-money" onClick={() => navigate('/request')}>
            <RequestPageIcon className="icon1" /> 請求する
          </button>
          <button className="action-button read-history">
            <HistoryIcon className="icon1" /> 履歴を見る
          </button>
        </div>
      </main>
    </div>
  );
}

export default TopPage;