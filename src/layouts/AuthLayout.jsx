import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1d2e 0%, #252840 50%, #1e2240 100%)',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(59,91,219,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(112,72,232,0.08)', pointerEvents: 'none' }} />

      <div style={{
        background: 'white',
        borderRadius: 20,
        boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: 440,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Brand Header */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1d2e, #252840)',
          padding: '28px 32px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12,
            background: 'linear-gradient(135deg, #3b5bdb, #7048e8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(59,91,219,0.5)',
          }}>
            <PawPrint size={22} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17, color: '#ffffff', lineHeight: 1.2 }}>PetCare Clinic</div>
            <div style={{ fontSize: 12, color: 'rgba(160,174,192,0.8)', lineHeight: 1.2 }}>Klinik Hewan Terpercaya</div>
          </div>
        </div>

        {/* Page Content (Login / Register / Forgot) */}
        <div style={{ padding: '32px' }}>
          <Outlet />
        </div>

        {/* Footer */}
        <p style={{
          textAlign: 'center',
          fontSize: 12,
          color: '#9ca3af',
          padding: '0 32px 24px',
          marginTop: 0,
        }}>
          © 2025 PetCare Clinic. All rights reserved.
        </p>
      </div>
    </div>
  );
}
