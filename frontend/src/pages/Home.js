import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#23272f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '2.5rem',
        letterSpacing: '2px',
        marginBottom: '0.5rem'
      }}>
        TEAM MAAS
      </h1>
      <p style={{
        color: '#b0b8c1',
        marginBottom: '2rem'
      }}>
        Welcome to the MAAS Team Management
      </p>
      <div style={{
        background: '#19376d',
        padding: '2rem 2.5rem',
        borderRadius: '16px',
        boxShadow: '0 6px 24px 0 rgba(25,55,109,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ color: 'white', marginBottom: '1rem', fontWeight: 600, fontSize: '1.25rem' }}>Manage Team</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/add">
            <button style={{
              background: 'white',
              color: '#19376d',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              Add Member
            </button>
          </Link>
          <Link to="/view">
            <button style={{
              background: 'white',
              color: '#19376d',
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 1.5rem',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer'
            }}>
              View Members
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
