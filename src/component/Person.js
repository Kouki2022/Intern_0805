import React from 'react';
import './Person.css';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

const Person = () => {
    return (
        <div className='person-wrapper'>
            <div className='person-info'>
                <img src='https://via.placeholder.com/150' alt='Person' className='avatar' />
                <div className='user-details'>
                    <h2>山田 太郎</h2>
                    <p className='account-number'>口座番号：1234567</p>
                </div>
            </div>
            <div className='balance-card'>
                <div className='balance-header'>
                    <div className='balance-text'>総残高</div>
                    <IconButton aria-label="refresh" className='refresh-button'>
                        <RefreshIcon />
                    </IconButton>
                </div>
                <div className='balance-amount'>
                    <span className='Person-currency'>¥</span>
                    <span className='amount'>3,250,000</span>
                </div>
                <button className='details-button'>残高の詳細</button>
            </div>
        </div>
    );
}

export default Person;