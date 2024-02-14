"use client";
import { createContext, useContext, useState } from "react";

import api from "@/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (userData) => {
    // Logic to handle login
    // Circle Back after MVP
    setCurrentUser(userData);
  };

  const createAccount = async (userData) => {
    try {
      // Send a POST request to the backend API endpoint to create a new user
      const response = await api.post("/users/create", userData);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Rethrow the error to handle it in the component
    }

    setCurrentUser(userData);
  };

  return (
    <UserContext.Provider
      value={{
        user: currentUser,
        setUser: setCurrentUser,
        login,
        createAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
