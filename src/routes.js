import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopPage from './TopPage';
import RecipientList from './RecipientList';
import HelloWorld from './HelloWorld';
import CompletionScreen from './CompletionScreen';
import Login from './Login';
import Request from './Request';
import Select from './Select';
import LinkList from './LinkList';
import PaymentScreen from './PaymentScreen';
import TransitionHistory from './TransitionHistory';
import PaymentDetail from './PaymentDetail';
import { useAuth } from './AuthContext';

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/" element={<PrivateRoute><TopPage /></PrivateRoute>} />
      <Route path="/recipients" element={<PrivateRoute><RecipientList /></PrivateRoute>} />
      <Route path="/send" element={<PrivateRoute><HelloWorld /></PrivateRoute>} />
      <Route path="/completion" element={<PrivateRoute><CompletionScreen /></PrivateRoute>} />
      <Route path="/request" element={<PrivateRoute><Request /></PrivateRoute>} />
      <Route path="/select" element={<PrivateRoute><Select /></PrivateRoute>} />
      <Route path="/link-list" element={<PrivateRoute><LinkList /></PrivateRoute>} />
      <Route path="/payment-screen" element={<PrivateRoute><PaymentScreen /></PrivateRoute>} />
      <Route path="/transitionhistory" element={<PrivateRoute><TransitionHistory /></PrivateRoute>} />
      <Route path="/paymentdetail" element={<PrivateRoute><PaymentDetail /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;