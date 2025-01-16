import React, { useState } from 'react';
import '../App.css'; 

const Skjema = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    Titel: '',
    Meldig: '',
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
  };

  return (
    <div className="app-container">
      <button onClick={toggleForm} className="toggle-button">
        {showForm ? 'Lukk Kontaktskjema':' Ta kontakt'}
      </button>

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Kontaktskjema</h2>

            <div className="form-group">
              <label htmlFor="Titel">Titel:</label>
              <input
                type="text"
                id="Titel"
                name="Titel"
                value={formData.Titel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="Meldig">Meldig:</label>
              <input
                type="Meldig"
                id="Meldig"
                name="Meldig"
                value={formData.Meldig}
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
