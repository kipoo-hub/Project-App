import React from 'react';
import { PawPrint } from 'lucide-react';

export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-app)',
      gap: 16,
    }}>
      {/* Animated Icon */}
      <div style={{
        width: 56, height: 56, borderRadius: 16,
        background: 'linear-gradient(135deg, #3b5bdb, #7048e8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(59,91,219,0.3)',
        animation: 'pulse 1.4s ease-in-out infinite',
      }}>
        <PawPrint size={26} color="white" />
      </div>

      {/* Spinner */}
      <div style={{
        width: 32, height: 32,
        border: '3px solid #e5e7eb',
        borderTop: '3px solid #3b5bdb',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />

      <p style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>
        Memuat halaman...
      </p>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(0.92); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
