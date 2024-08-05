import React, { useState } from 'react';
import './Request_link.css';

const Request_link = () => {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = () => {
    // 実際のリンクをクリップボードにコピーする処理をここに実装
    // この例ではダミーのリンクを使用
    navigator.clipboard.writeText('https://example.com/request-link');
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000); // 2秒後に表示を元に戻す
  };

  return (
    <div className="request-link-created">
      <h2>請求リンクが作成されました</h2>
      <div style={{ fontSize: '64px', color: 'green' }}>✔️</div>
      <div className="link-display">
      'https://example.com/request-link'
      </div>
      <button 
        className={`copy-button ${linkCopied ? 'copied' : ''}`} 
        onClick={handleCopyLink}
      >
        {linkCopied ? 'コピーしました！' : 'リンクをコピー'}
      </button>
      <button className="back-button">トップ画面に戻る</button>
    </div>
  );
};

export default Request_link;