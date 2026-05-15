import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '8px 0' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#e6fcf5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle2 size={30} color="#0ca678" />
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#1e2130', marginBottom: 10 }}>Email Terkirim!</h2>
        <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, marginBottom: 24 }}>
          Kami telah mengirimkan link reset password ke<br />
          <strong style={{ color: '#1e2130' }}>{email}</strong>.<br />
          Silakan cek inbox email Anda.
        </p>
        <Link id="forgot-back-login-btn" to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 10, border: 'none', background: 'linear-gradient(135deg, #3b5bdb, #4c6ef5)', color: 'white', fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 14px rgba(59,91,219,0.3)' }}>
          <ArrowLeft size={14} /> Kembali ke Login
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e2130', marginBottom: 6 }}>Lupa Password?</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24, lineHeight: 1.6 }}>
        Masukkan email akun Anda dan kami akan mengirimkan link untuk mereset password.
      </p>

      <form id="forgot-form" onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Email</label>
          <div style={{ position: 'relative' }}>
            <Mail size={15} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              id="forgot-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="dokter@petcareclinic.com"
              required
              style={{
                width: '100%', padding: '10px 12px 10px 38px',
                border: '1px solid #e5e7eb', borderRadius: 10, fontSize: 14,
                color: '#1e2130', background: '#f9fafb', outline: 'none',
                boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor = '#3b5bdb'; e.target.style.boxShadow = '0 0 0 3px rgba(59,91,219,0.1)'; }}
              onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
            />
          </div>
        </div>

        <button
          id="forgot-submit-btn"
          type="submit"
          disabled={loading}
          style={{
            width: '100%', padding: '11px', borderRadius: 10, border: 'none',
            background: loading ? '#93a5e8' : 'linear-gradient(135deg, #3b5bdb, #4c6ef5)',
            color: 'white', fontSize: 14, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: '0 4px 14px rgba(59,91,219,0.35)', transition: 'all 0.2s',
          }}
        >
          {loading ? 'Mengirim...' : <><Send size={14} /> Kirim Link Reset</>}
        </button>
      </form>

      <p style={{ textAlign: 'center', fontSize: 13, color: '#6b7280', marginTop: 20 }}>
        Ingat password Anda?{' '}
        <Link id="forgot-login-link" to="/login" style={{ color: '#3b5bdb', fontWeight: 600, textDecoration: 'none' }}>
          Masuk di sini
        </Link>
      </p>
    </div>
  );
}
