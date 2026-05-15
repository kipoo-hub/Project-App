import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, UserPlus, Phone } from 'lucide-react';

const inputStyle = {
  width: '100%', padding: '10px 12px 10px 38px',
  border: '1px solid #e5e7eb', borderRadius: 10, fontSize: 14,
  color: '#1e2130', background: '#f9fafb', outline: 'none',
  boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s',
};

const focusStyle = (e) => { e.target.style.borderColor = '#3b5bdb'; e.target.style.boxShadow = '0 0 0 3px rgba(59,91,219,0.1)'; };
const blurStyle  = (e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; };

const Field = ({ label, icon: Icon, children }) => (
  <div style={{ marginBottom: 14 }}>
    <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>{label}</label>
    <div style={{ position: 'relative' }}>
      <Icon size={15} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
      {children}
    </div>
  </div>
);

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate('/login'); }, 1200);
  };

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e2130', marginBottom: 6 }}>Buat Akun Baru</h2>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 22 }}>Daftarkan akun klinik Anda untuk memulai.</p>

      <form id="register-form" onSubmit={handleSubmit}>
        <Field label="Nama Lengkap" icon={User}>
          <input id="register-name" type="text" placeholder="Dr. Rizal Firmansyah" required style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
        </Field>
        <Field label="Email" icon={Mail}>
          <input id="register-email" type="email" placeholder="dokter@petcare.com" required style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
        </Field>
        <Field label="No. Telepon" icon={Phone}>
          <input id="register-phone" type="tel" placeholder="0812-xxxx-xxxx" required style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
        </Field>
        <Field label="Password" icon={Lock}>
          <input
            id="register-password"
            type={showPass ? 'text' : 'password'}
            placeholder="Min. 8 karakter"
            required
            style={{ ...inputStyle, paddingRight: 38 }}
            onFocus={focusStyle} onBlur={blurStyle}
          />
          <button type="button" onClick={() => setShowPass(s => !s)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', cursor: 'pointer', color: '#9ca3af', padding: 2 }}>
            {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        </Field>

        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 20, marginTop: 4 }}>
          <input id="register-terms" type="checkbox" required style={{ marginTop: 2, flexShrink: 0, accentColor: '#3b5bdb' }} />
          <label htmlFor="register-terms" style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>
            Saya setuju dengan{' '}
            <span style={{ color: '#3b5bdb', fontWeight: 600 }}>Syarat & Ketentuan</span>{' '}
            serta{' '}
            <span style={{ color: '#3b5bdb', fontWeight: 600 }}>Kebijakan Privasi</span>
          </label>
        </div>

        <button
          id="register-submit-btn"
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
          {loading ? 'Mendaftarkan...' : <><UserPlus size={15} /> Daftar Sekarang</>}
        </button>
      </form>

      <p style={{ textAlign: 'center', fontSize: 13, color: '#6b7280', marginTop: 20 }}>
        Sudah punya akun?{' '}
        <Link id="register-login-link" to="/login" style={{ color: '#3b5bdb', fontWeight: 600, textDecoration: 'none' }}>
          Masuk di sini
        </Link>
      </p>
    </div>
  );
}
