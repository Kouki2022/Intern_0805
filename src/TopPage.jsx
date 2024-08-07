import React,{ useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Person from './Person';
import './TopPage.css';
import './CommonStyles.css'
import { useUser } from './UserContext';
import SendIcon from '@mui/icons-material/Send';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import HistoryIcon from '@mui/icons-material/History';


const TopPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { setUserInfo } = useUser();

  useEffect(() => {
    // ここでAPIからユーザー情報を取得するなどの処理を行う
    setUserInfo({
      name: 'サンプル 太郎',
      contractNumber: '123',
      branchType: '本店',
      accountNumber: '1234567',
      balance: 1000000
    });
  }, [setUserInfo]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="toppage-container1">
      <div className="common-header">
                <h1>Top画面</h1>
                <button className="logout-button" onClick={handleLogout}>
                    ログアウト
                </button>
            </div>
      <main className="content-wrapper1">
        <Person />
        <div className="action-buttons1">
          <button className="action-button1 send-money" onClick={() => navigate('/recipients')}>
            <SendIcon className="icon1" /> 送金する
          </button>
          <button className="action-button1 request-money" onClick={() => navigate('/request')}>
            <RequestPageIcon className="icon1" /> 請求する
          </button>
          <button className="action-button1 read-history" onClick={() => navigate('/transitionhistory')}>
            <HistoryIcon className="icon1" /> 履歴を見る
          </button>
        </div>
      </main>
    </div>
  );
}

export default TopPage;