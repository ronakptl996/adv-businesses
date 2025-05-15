import React from "react";
import "./FreeBusinesses.css";

const FreeBusinessCard = ({ business }) => {
  return (
    <div className="free-card">
      <div className="free-badge">FREE</div>

      <div className="free-card-content">
        <div className="free-card-header">
          <div className="visiting-card-wrapper">
            <img
              src={business.businessVisitingCard}
              alt={business.businessName}
            />
          </div>
          <div className="free-title-section">
            <h3>{business.businessName}</h3>
            <span className="free-category">{business.businessCategory}</span>
          </div>
        </div>

        <div className="free-card-body">
          <div className="contact-info">
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
          </div>
        </div>
      </div>
    </div>
  );
};

const FreeBusinesses = ({ businesses }) => {
  const freeBusinesses = businesses.filter(
    (business) => business.packageType === "FREE"
  );

  return (
    <section className="free-businesses-section">
      <div className="free-section-header">
        <h2>Free Businesses</h2>
        <p>Discover local businesses in your area</p>
      </div>

      <div className="free-businesses-grid">
        {freeBusinesses.map((business) => (
          <FreeBusinessCard key={business.id} business={business} />
        ))}
      </div>
    </section>
  );
};

export default FreeBusinesses;
