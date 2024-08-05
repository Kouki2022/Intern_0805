import React, { useState } from 'react';
import './Request_link.css';

const Request_link = () => {
  const [linkCopied, setLinkCopied] = useState(false);

  //リンクをコピーする処理
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://example.com/request-link');
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  //トップ画面に戻る処理
  const handleTop = () => {
    console.log('トップ画面に戻る');
  };

  return (
    <div className="request-link-created">
      <h2>請求リンクが作成されました</h2>
      <div className="check-mark">
        <svg viewBox="0 0 24 24">
          <path fill="#4CAF50" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </div>
      <div className="link-display">
        https://example.com/request-link
      </div>
      <button
        className={`copy-button ${linkCopied ? 'copied' : ''}`}
        onClick={handleCopyLink}
      >
        {linkCopied ? 'コピーしました！' : 'リンクをコピー'}
      </button>
      <button className="back-button" onClick={handleTop}>トップ画面に戻る</button>
    </div>
  );
};

export default Request_link;