import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleLogin = async (email, password) => {
    const userAuth = {
      email,
      password,
    };

    if (userAuth.password === '102030') {
      setUser({ email, password });
      navigate('/');
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ autenticated: !!user, user, handleLogin, handleLogout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
