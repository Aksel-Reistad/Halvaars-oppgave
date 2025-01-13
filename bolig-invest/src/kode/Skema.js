import React, { useState } from 'react';
import '../App.css'; 

const Skjema = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [error, setError] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Vennligst skriv inn en gyldig e-postadresse.');
      return;
    }
    setError('');
    alert('Skjema sendt!');
    // Her kan du legge til logikk for å sende data til serveren
  };

  return (
    <div className="app-container">
      <button onClick={toggleForm} className="toggle-button">
        {showForm ? 'Lukk Login Skjerm':' Login'}
      </button>

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Kontaktskjema</h2>

            <div className="form-group">
              <label htmlFor="username">Brukernavn:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Passord:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-postadresse:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Skjema;
