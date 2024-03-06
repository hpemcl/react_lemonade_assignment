import React from 'react';
import NyhedsbrevFormular from './NyhedsbrevFormular'; // Korrekt sti til NyhedsbrevFormular
import './NyhedsbrevFormular.css';

const Nyhedsbrev = () => {
  return (
    <div className='nyhedsformularsection'>
      <h2>Tilmeld dig vores nyhedsbrev</h2>
      <NyhedsbrevFormular />
    </div>
  );
};

export default Nyhedsbrev;
