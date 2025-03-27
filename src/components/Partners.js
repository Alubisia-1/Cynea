// src/components/Partners.js
import React from 'react';
import infoHealthLogo from '../assets/partners/infoHealth.png';
import foreFrontLogo from '../assets/partners/foreFront.png';
import dbaGroupLogo from '../assets/partners/dbaGroup.png';
import microsoftLogo from '../assets/partners/microsoft.png';
import awsLogo from '../assets/partners/aws.png';

const Partners = () => {
  const partners = [
    { name: 'infoHealth', logo: infoHealthLogo },
    { name: 'ForeFront', logo: foreFrontLogo },
    { name: 'DBA Group', logo: dbaGroupLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'AWS', logo: awsLogo },
  ];

  return (
    <section className="partners">
      <h2>Our Partners</h2>
      <div className="partner-logos">
        {partners.map((partner, index) => (
          <img key={index} src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
        ))}
      </div>
    </section>
  );
};

export default Partners;