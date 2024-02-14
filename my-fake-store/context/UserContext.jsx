// 'use client'
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (userData) => {
    // Logic to handle login 
    // Circle Back after MVP
    setCurrentUser(userData);
  };

  const createAccount = (userData) => {
    // Logic to handle account creation
    // Circle back after MVP
    console.log(userData);
    setCurrentUser(userData);
  };

  return (
    <UserContext.Provider value={{ currentUser, login, createAccount }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);