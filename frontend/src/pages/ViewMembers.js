import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data));
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7faff',
      padding: '2rem'
    }}>
      <h1 style={{
        color: '#19376d',
        textAlign: 'center',
        fontWeight: 700,
        marginBottom: '2rem',
        fontSize: '2rem'
      }}>
        MEET OUR AMAZING TEAM
      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
        gap: '2rem',
        justifyItems: 'center'
      }}>
        {members.map(member => (
          <div key={member._id} style={{
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 24px 0 rgba(25,55,109,0.10)',
            overflow: 'hidden',
            width: '270px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              height: '160px',
              background: '#e3e9f2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={member.image ? `http://localhost:5000/uploads/${member.image}` : '/default.png'}
                alt={member.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '1.2rem', width: '100%', textAlign: 'center' }}>
              <h3 style={{ color: '#19376d', fontWeight: 600, marginBottom: '0.2rem', fontSize: '1.1rem' }}>{member.name}</h3>
              <p style={{ color: '#5a5a5a', marginBottom: '0.7rem', fontSize: '1rem' }}>Roll Number: {member.rollNumber}</p>
              <Link to={`/member/${member._id}`}>
                <button style={{
                  background: '#19376d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.6rem 1.2rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>
                  VIEW DETAILS
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;
