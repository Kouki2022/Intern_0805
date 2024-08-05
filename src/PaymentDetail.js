import React from 'react';

function PaymentDetail() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <p style={{ margin: '5px 0', color: '#666' }}>2023年3月分</p>
        <p style={{ margin: '5px 0', color: '#666' }}>2023年3月30日</p>
        <p style={{ margin: '10px 0', fontWeight: 'bold', fontSize: '20px' }}>5000円</p>
        <p style={{ margin: '5px 0', fontSize: '16px' }}>飲み会代お願いします！</p>
        <p style={{ margin: '5px 0', fontSize: '16px' }}>支払済み （1人）</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img 
          src="https://via.placeholder.com/80" // 仮の画像URL、アバターのURLに置き換えてください
          alt="avatar" 
          style={{ width: '80px', height: '80px', borderRadius: '50%' }} 
        />
      </div>
    </div>
  );
}

export default PaymentDetail;
