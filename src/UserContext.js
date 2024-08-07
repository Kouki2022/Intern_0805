// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    contractNumber: '',
    branchType: '',
    accountNumber: '',
    balance: 0
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);