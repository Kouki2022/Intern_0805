import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './HelloWorld.css';
import './CommonStyles.css';
import icon1 from './images/icon1.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function HelloWorld() {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [template, setTemplate] = useState('');
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    const location = useLocation();
    const recipient = location.state?.recipient || { name: 'ヤマダ イチロウ', icon: icon1 };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleTemplateChange = (event) => {
        const selectedTemplate = event.target.value;
        setTemplate(selectedTemplate);
        setMessage(selectedTemplate);
    };

    const handleSend = () => {
        if (amount > 0 && amount <= 50000) {
            setShowConfirmDialog(true);
        }
    };

    const handleConfirmSend = () => {
        setShowConfirmDialog(false);
        navigate('/completion', { 
            state: { 
                amount: Number(amount),
                recipient: recipient.name,
                message: message
            }
        });
    };

    const handleCancelSend = () => {
        setShowConfirmDialog(false);
    };

    return (
        <div className="hello-world-container">
            <div className="common-header">
                <button className="common-back-button" onClick={() => navigate('/recipients')}>
                    戻る
                </button>
                <h1>送金金額入力</h1>
                <button className="logout-button" onClick={handleLogout}>
                    ログアウト
                </button>
            </div>
            <div className="content-wrapper3">
                <div className="account-info">
                    <h2>送金先</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>{recipient.name}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="amount-input">
                    <label htmlFor="amount">送金金額をご入力ください。</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder="0"
                    />
                    <span className="currency">円</span>
                </div>
                <div className="limit-info">
                    <p>・1回あたりの送金限度額：50,000円</p>
                </div>
                <div className="message-input">
                    <label htmlFor="message">メッセージ:</label>
                    <select id="template" value={template} onChange={handleTemplateChange}>
                        <option value="">テンプレートを選択</option>
                        <option value="ありがとうございます。">ありがとうございます。</option>
                        <option value="お世話になっております。">お世話になっております。</option>
                        <option value="よろしくお願いします。">よろしくお願いします。</option>
                    </select>
                    <input
                        type="text"
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="任意"
                    />
                </div>
                <button
                    className="next-button"
                    onClick={handleSend}
                    disabled={!amount || amount <= 0 || amount > 50000}
                >
                    送金する
                </button>
            </div>
            {showConfirmDialog && (
                <div className="confirm-dialog">
                    <div className="confirm-dialog-content">
                        <p>送金を実行します。</p>
                        <p>（この操作は取り消せません。）</p>
                        <div className="confirm-dialog-buttons">
                            <button onClick={handleCancelSend}>キャンセル</button>
                            <button onClick={handleConfirmSend}>OK</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HelloWorld;