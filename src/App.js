// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './AuthContext';
import { UserProvider } from './UserContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;