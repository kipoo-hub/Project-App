import React from 'react';
import { Calendar, Download, Filter } from 'lucide-react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24,
      flexWrap: 'wrap',
      gap: 12,
    }}>
      {/* Title & Subtitle */}
      <div>
        <h1 style={{
          fontSize: 22,
          fontWeight: 700,
          color: 'var(--text-primary)',
          margin: 0,
          lineHeight: 1.3,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: 14,
            color: 'var(--text-secondary)',
            marginTop: 4,
          }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Date Range Filter */}
        <button
          id="page-header-date-filter-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 14px',
            borderRadius: 8,
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-secondary)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: 'var(--shadow-sm)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent-blue)';
            e.currentTarget.style.color = 'var(--accent-blue)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <Calendar size={14} />
          Mei 2025
        </button>

        {/* Filter Button */}
        <button
          id="page-header-filter-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 14px',
            borderRadius: 8,
            border: '1px solid var(--border-color)',
            background: 'var(--bg-card)',
            color: 'var(--text-secondary)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: 'var(--shadow-sm)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent-blue)';
            e.currentTarget.style.color = 'var(--accent-blue)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <Filter size={14} />
          Filter
        </button>

        {/* Export Button */}
        <button
          id="page-header-export-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            borderRadius: 8,
            border: 'none',
            background: 'linear-gradient(135deg, var(--accent-blue), #4c6ef5)',
            color: 'white',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(59,91,219,0.3)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(59,91,219,0.4)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59,91,219,0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Download size={14} />
          Export
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
