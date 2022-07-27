import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './global.css';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}