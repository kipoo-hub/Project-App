import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Download, Filter, PawPrint, Users, TrendingUp, Clock, 
  Mail, Search, Bell, Lock, EyeOff, CheckCircle2, Inbox
} from 'lucide-react';

const SectionHeader = ({ num, title, subtitle }) => (
  <div style={{ marginBottom: 16 }}>
    <h3 style={{ 
      fontSize: 18, 
      fontWeight: 600, 
      color: 'var(--text-primary)', 
      marginBottom: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
      {num}. {title}
    </h3>
    <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
      {subtitle}
    </p>
  </div>
);

const PlaygroundContainer = ({ children }) => (
  <div style={{
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    padding: 24,
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'flex-start'
  }}>
    {children}
  </div>
);

const ComponentBox = ({ title, children, fullWidth = false }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: fullWidth ? '100%' : 'auto' }}>
    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
      {title}
    </span>
    <div>{children}</div>
  </div>
);

export default function Components() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: 24,
      overflowY: 'auto',
      background: 'var(--bg-app)',
    }}>
      <PageHeader
        title="Components Library"
        subtitle="Kumpulan 20 komponen UI yang digunakan dalam aplikasi PetCare Clinic."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        
        {/* 1. Basic Component */}
        <section>
          <SectionHeader num="1" title="Basic Component" subtitle="Tombol, Ikon, Tipografi, dan Avatar" />
          <PlaygroundContainer>
            <ComponentBox title="1. Primary Button">
              <button style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 8,
                border: 'none', background: 'linear-gradient(135deg, var(--accent-blue), #4c6ef5)',
                color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(59,91,219,0.3)'
              }}>
                <Download size={14} /> Export Data
              </button>
            </ComponentBox>
            
            <ComponentBox title="2. Outline Button">
              <button style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 8,
                border: '1px solid var(--border-color)', background: 'var(--bg-card)',
                color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500, cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <Filter size={14} /> Filter
              </button>
            </ComponentBox>

            <ComponentBox title="3. Danger Button">
              <button style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 8,
                border: 'none', background: 'var(--accent-red-light)',
                color: 'var(--accent-red)', fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}>
                Hapus Data
              </button>
            </ComponentBox>

            <ComponentBox title="4. Icon Button (Notification)">
              <button style={{
                position: 'relative', width: 40, height: 40, borderRadius: '50%',
                border: '1px solid var(--border-color)', background: 'var(--bg-card)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)',
              }}>
                <Bell size={18} />
                <span style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, background: 'var(--accent-red)', borderRadius: '50%', border: '2px solid white' }} />
              </button>
            </ComponentBox>

            <ComponentBox title="5. Gradient Avatar / Logo">
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #3b5bdb, #7048e8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59,91,219,0.4)'
              }}>
                <PawPrint size={20} color="white" />
              </div>
            </ComponentBox>
          </PlaygroundContainer>
        </section>

        {/* 2. Layout Component */}
        <section>
          <SectionHeader num="2" title="Layout Component" subtitle="Struktur tata letak, Kontainer, dan Pembatas" />
          <PlaygroundContainer>
            <ComponentBox title="6. App Layout Mockup" fullWidth>
              <div style={{ display: 'flex', width: '100%', height: 160, border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <div style={{ width: 64, background: 'var(--bg-sidebar)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: 16 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #3b5bdb, #7048e8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PawPrint size={16} color="white" />
                  </div>
                  <div style={{ width: 32, height: 32, background: 'var(--bg-sidebar-active)', borderRadius: 8 }} />
                  <div style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-app)' }}>
                  <div style={{ height: 40, background: 'var(--bg-header)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                    <div style={{ width: 80, height: 16, background: 'var(--bg-app)', borderRadius: 4, border: '1px solid var(--border-color)' }} />
                  </div>
                  <div style={{ padding: 16, display: 'flex', gap: 12 }}>
                    <div style={{ flex: 1, height: 60, background: 'var(--bg-card)', borderRadius: 8, border: '1px solid var(--border-color)' }} />
                    <div style={{ flex: 1, height: 60, background: 'var(--bg-card)', borderRadius: 8, border: '1px solid var(--border-color)' }} />
                  </div>
                </div>
              </div>
            </ComponentBox>

            <ComponentBox title="7. Card Container">
              <div style={{
                background: 'var(--bg-card)', padding: 16, borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)',
                width: 200, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', fontSize: 13, borderStyle: 'dashed'
              }}>
                Konten di sini
              </div>
            </ComponentBox>

            <ComponentBox title="8. Divider with Text">
              <div style={{ width: 200, display: 'flex', alignItems: 'center', gap: 8, marginTop: 30 }}>
                <div style={{ flex: 1, height: 1, background: 'var(--border-color)' }} />
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>ATAU</span>
                <div style={{ flex: 1, height: 1, background: 'var(--border-color)' }} />
              </div>
            </ComponentBox>
          </PlaygroundContainer>
        </section>

        {/* 3. Data Display Component */}
        <section>
          <SectionHeader num="3" title="Data Display Component" subtitle="Kartu Informasi, Status, dan List Data" />
          <PlaygroundContainer>
            <ComponentBox title="9. KPI Card">
              <div style={{
                background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '20px 22px',
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)',
                display: 'flex', flexDirection: 'column', gap: 14, width: 240
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 6 }}>Total Pasien</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.1 }}>1.284</div>
                  </div>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={20} color="var(--accent-blue)" />
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '2px 8px', borderRadius: 20, background: 'var(--accent-teal-light)', color: 'var(--accent-teal)', fontSize: 12, fontWeight: 600 }}>
                    <TrendingUp size={12} />+12%
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>vs bulan lalu</span>
                </div>
              </div>
            </ComponentBox>

            <ComponentBox title="10. Status Badges">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 20, background: '#eef2ff', color: '#3b5bdb', fontSize: 11, fontWeight: 600, width: 'max-content' }}>
                  <Clock size={11} /> Sedang Berjalan
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 20, background: '#e6fcf5', color: '#0ca678', fontSize: 11, fontWeight: 600, width: 'max-content' }}>
                  <CheckCircle2 size={11} /> Selesai
                </span>
              </div>
            </ComponentBox>

            <ComponentBox title="11. User Profile Item">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', border: '1px solid var(--border-color)', borderRadius: 8, background: 'var(--bg-card)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: 13 }}>
                  DR
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>Dr. Rizal</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.2 }}>Dokter Hewan</div>
                </div>
              </div>
            </ComponentBox>
            
            <ComponentBox title="12. Progress Bar">
              <div style={{ width: 200 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Kapasitas Klinik</span>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>75%</span>
                </div>
                <div style={{ height: 6, width: '100%', background: 'var(--border-color)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '75%', background: 'var(--accent-blue)', borderRadius: 3 }} />
                </div>
              </div>
            </ComponentBox>
          </PlaygroundContainer>
        </section>

        {/* 4. Form Component */}
        <section>
          <SectionHeader num="4" title="Form Component" subtitle="Input field, Checkbox, Select, dan Password Toggle" />
          <PlaygroundContainer>
            <ComponentBox title="13. Input with Left Icon (Email)">
              <div style={{ position: 'relative', width: 260 }}>
                <Mail size={15} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                <input type="email" placeholder="dokter@petcareclinic.com" style={{
                  width: '100%', padding: '10px 12px 10px 38px', border: '1px solid #e5e7eb', borderRadius: 10,
                  fontSize: 14, color: '#1e2130', background: '#f9fafb', outline: 'none'
                }} />
              </div>
            </ComponentBox>

            <ComponentBox title="14. Input with Right Action (Password)">
              <div style={{ position: 'relative', width: 260 }}>
                <Lock size={15} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                <input type={showPass ? 'text' : 'password'} placeholder="••••••••" style={{
                  width: '100%', padding: '10px 38px 10px 38px', border: '1px solid #e5e7eb', borderRadius: 10,
                  fontSize: 14, color: '#1e2130', background: '#f9fafb', outline: 'none'
                }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', cursor: 'pointer', color: '#9ca3af' }}>
                  <EyeOff size={15} />
                </button>
              </div>
            </ComponentBox>

            <ComponentBox title="15. Search Input">
              <div style={{ position: 'relative', width: 260 }}>
                <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input type="text" placeholder="Cari pasien, jadwal..." style={{
                  width: '100%', padding: '8px 16px 8px 36px', border: '1px solid var(--border-color)', borderRadius: 8,
                  fontSize: 14, color: 'var(--text-primary)', background: 'var(--bg-app)', outline: 'none'
                }} />
              </div>
            </ComponentBox>

            <ComponentBox title="16. Styled Select Dropdown">
              <select style={{
                width: 260, padding: '9px 12px', border: '1px solid var(--border-color)', borderRadius: 8,
                fontSize: 14, color: 'var(--text-primary)', background: 'var(--bg-card)', outline: 'none', cursor: 'pointer'
              }}>
                <option>Pilih Spesies</option>
                <option>Kucing</option>
                <option>Anjing</option>
              </select>
            </ComponentBox>
          </PlaygroundContainer>
        </section>

        {/* 5. Feedback Component */}
        <section>
          <SectionHeader num="5" title="Feedback Component" subtitle="Pesan Peringatan, Indikator Loading, dan Empty State" />
          <PlaygroundContainer>
            <ComponentBox title="17. Loading Spinner">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'var(--bg-app)', borderRadius: 8, width: 'max-content' }}>
                <div style={{
                  width: 24, height: 24, border: '3px solid #e5e7eb', borderTop: '3px solid #3b5bdb',
                  borderRadius: '50%', animation: 'spin 0.8s linear infinite'
                }} />
                <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Memuat data...</span>
              </div>
              <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </ComponentBox>

            <ComponentBox title="18. Alert Banner (Success)">
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px',
                background: 'var(--accent-teal-light)', color: 'var(--accent-teal)',
                borderRadius: 8, border: '1px solid #b2f2bb', width: 280
              }}>
                <CheckCircle2 size={18} />
                <span style={{ fontSize: 13, fontWeight: 500 }}>Jadwal berhasil ditambahkan!</span>
              </div>
            </ComponentBox>

            <ComponentBox title="19. Empty State">
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '24px', border: '1px dashed var(--border-color)', borderRadius: 8, width: 280, textAlign: 'center'
              }}>
                <div style={{ width: 48, height: 48, background: 'var(--bg-app)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, color: 'var(--text-muted)' }}>
                  <Inbox size={24} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>Data Kosong</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Belum ada catatan jadwal untuk hari ini.</div>
              </div>
            </ComponentBox>
          </PlaygroundContainer>
        </section>

        {/* 6. Section Component */}
        <section>
          <SectionHeader num="6" title="Section Component" subtitle="Header Halaman Utama" />
          <PlaygroundContainer>
            <ComponentBox title="20. Page Header Wrapper" fullWidth>
              <div style={{ width: '100%', border: '1px dashed var(--border-color)', padding: '20px 24px', borderRadius: 8, background: 'var(--bg-app)' }}>
                <PageHeader title="Manajemen Pasien" subtitle="Lihat, tambah, dan atur data rekam medis pasien klinik." />
              </div>
            </ComponentBox>
          </PlaygroundContainer>
        </section>

      </div>
    </div>
  );
}
