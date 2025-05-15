import React from "react";
import "./EliteBusinesses.css";

const EliteBusinessCard = ({ business }) => {
  return (
    <div className="elite-card">
      <div className="elite-card-badge">ELITE</div>

      <div className="elite-card-content">
        <div className="elite-card-header">
          <div className="elite-logo-wrapper">
            <img src={business.businessLogo} alt={business.businessName} />
          </div>
          <div className="elite-title-section">
            <h3>{business.businessName}</h3>
            <span className="elite-category">{business.businessCategory}</span>
          </div>
        </div>

        <div className="elite-card-body">
          <div className="elite-quick-info">
            <p>{business.quickInfo}</p>
          </div>

          <div className="elite-details-grid">
            <div className="elite-contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{business.businessContact}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>{business.businessEmail}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{business.businessAddress}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>{business.openingHours}</span>
              </div>
            </div>

            <div className="elite-services-section">
              <h4>Our Services</h4>
              <div className="services-list">
                {business.provideServices.map((service, index) => (
                  <div key={index} className="service-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="elite-card-footer">
          <div className="visiting-card-preview">
            <img src={business.businessVisitingCard} alt="Visiting Card" />
          </div>
        </div>
      </div>
    </div>
  );
};

const EliteBusinesses = ({ businesses }) => {
  const eliteBusinesses = businesses.filter(
    (business) => business.packageType === "ELITE"
  );

  return (
    <section className="elite-businesses-section">
      <div className="elite-section-header">
        <h2>Elite Businesses</h2>
        <p>Discover our premium business partners</p>
      </div>

      <div className="elite-businesses-grid">
        {eliteBusinesses.map((business) => (
          <EliteBusinessCard key={business.id} business={business} />
        ))}
      </div>
    </section>
  );
};

export default EliteBusinesses;
