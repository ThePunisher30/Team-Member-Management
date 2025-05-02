import React, { useState } from 'react';
import axios from 'axios';

function AddMember() {
  const [formData, setFormData] = useState({
    name: '', rollNumber: '', year: '', degree: '', aboutProject: '',
    hobbies: '', certificate: '', internship: '', aboutAim: '', email: '', image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    await axios.post('http://localhost:5000/api/members', data);
    alert("Member added!");
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7faff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{
        background: 'white',
        padding: '2.5rem 2rem',
        borderRadius: '18px',
        boxShadow: '0 8px 32px 0 rgba(25,55,109,0.12)',
        minWidth: '350px',
        maxWidth: '400px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2 style={{
          color: '#19376d',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>Add Team Member</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="rollNumber" placeholder="Roll Number" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="year" placeholder="Year" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="degree" placeholder="Degree" onChange={handleChange} required style={inputStyle} />
        <textarea name="aboutProject" placeholder="About Project" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" onChange={handleChange} style={inputStyle} />
        <input type="text" name="certificate" placeholder="Certificate" onChange={handleChange} style={inputStyle} />
        <input type="text" name="internship" placeholder="Internship" onChange={handleChange} style={inputStyle} />
        <textarea name="aboutAim" placeholder="About Your Aim" onChange={handleChange} style={inputStyle} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required style={{ marginBottom: '1rem' }} />
        <button type="submit" style={{
          background: '#19376d',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '0.75rem 0',
          fontWeight: 600,
          fontSize: '1.1rem',
          cursor: 'pointer',
          marginTop: '0.5rem'
        }}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  marginBottom: '1rem',
  padding: '0.6rem 1rem',
  borderRadius: '6px',
  border: '1px solid #e0e6ed',
  fontSize: '1rem'
};

export default AddMember;
