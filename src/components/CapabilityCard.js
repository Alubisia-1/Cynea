// src/components/CapabilityCard.js
import React from 'react';

const CapabilityCard = ({ icon, title, description }) => {
  return (
    <div className="capability-card">
      <i className={`fas ${icon} card-icon`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CapabilityCard;