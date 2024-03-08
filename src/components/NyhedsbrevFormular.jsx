// NyhedsbrevFormular.jsx
import React, { useState } from 'react';
import './NyhedsbrevFormular.css'; // Importér CSS-filen

const NyhedsbrevFormular = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementér afsendelseslogikken her
    console.log('E-mailadresse indsendt:', email);
    setEmail(''); // Nulstil inputfeltet efter afsendelse
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="label-text">
        Få de nyeste meddelser med vores drinks
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" required
        />
      </label>
      <button className="submit-button" type="submit">Tilmeld</button>
    </form>
  );
};

export default NyhedsbrevFormular;
