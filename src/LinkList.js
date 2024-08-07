// LinkList.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LinkList.css';
import './CommonStyles.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useAuth } from './AuthContext';

const LinkList = () => {
  const [linkCopied, setLinkCopied] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, message } = location.state || {};
  const { logout } = useAuth();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://example.com/request-link?amount=${amount}&message=${encodeURIComponent(message)}`);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="link-list-container">
      <div className="common-header">
        <h1>請求リンク作成完了</h1>
        <button className="logout-button" onClick={handleLogout}>
          ログアウト
        </button>
      </div>
      <div className="content-wrapper3">
        <div className="success-message">
          <p>請求リンクが作成されました</p>
        </div>
        <div className="link-display">
          https://example.com/request-link?amount={amount}&message={encodeURIComponent(message)}
        </div>
        <button
          className={`action-button ${linkCopied ? 'copied' : ''}`}
          onClick={handleCopyLink}
        >
          {linkCopied ? <CheckCircleOutlineIcon /> : <ContentCopyIcon />}
          {linkCopied ? 'コピーしました' : 'リンクをコピー'}
        </button>
        <button className="action-button" onClick={() => navigate('/')}>
          トップ画面に戻る
        </button>
      </div>
    </div>
  );
};

export default LinkList;