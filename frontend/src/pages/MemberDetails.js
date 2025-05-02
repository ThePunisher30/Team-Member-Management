import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data));
  }, [id]);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7faff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 32px 0 rgba(25,55,109,0.12)',
        padding: '2.5rem 2rem',
        minWidth: '350px',
        maxWidth: '480px',
        width: '100%'
      }}>
        <h2 style={{
          color: '#19376d',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '1rem'
        }}>{member.name}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <img
            src={member.image ? `http://localhost:5000/uploads/${member.image}` : '/default.png'}
            alt={member.name}
            style={{ width: '140px', height: '140px', objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
        <p><strong>Roll Number:</strong> {member.rollNumber}</p>
        <p><strong>Year:</strong> {member.year}</p>
        <p><strong>Degree:</strong> {member.degree}</p>
        <p><strong>About Project:</strong> {member.aboutProject}</p>
        <p><strong>Hobbies:</strong> {member.hobbies}</p>
        <p><strong>Certificate:</strong> {member.certificate}</p>
        <p><strong>Internship:</strong> {member.internship}</p>
        <p><strong>About Aim:</strong> {member.aboutAim}</p>
        <p><strong>Email:</strong> {member.email}</p>
      </div>
    </div>
  );
}

export default MemberDetails;
