import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { History } from './pages/History';
import { Home } from './pages/Home';

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
