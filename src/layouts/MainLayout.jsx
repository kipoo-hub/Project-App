import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar';
import Header from '../layouts/Header';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
        <Header />
        <main style={{ flex: 1, overflow: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
