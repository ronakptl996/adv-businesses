import React, { useState, useEffect } from "react";
import "./PremiumBusinesses.css";

const PremiumBusinessCard = ({ business }) => {
  return (
    <div className="premium-card">
      <div className="premium-card-content">
        <div className="premium-badge">
          <span className="badge-icon">✦</span>
          <span>PLATINUM</span>
        </div>

        <div className="premium-card-header">
          <div className="premium-logo-wrapper">
            <div className="logo-border"></div>
            <img src={business.businessLogo} alt={business.businessName} />
          </div>
          <div className="premium-title-section">
            <h3>{business.businessName}</h3>
            <span className="premium-category">
              {business.businessCategory}
            </span>
          </div>
        </div>

        <div className="premium-card-body">
          <div className="premium-quick-info">
            <div className="quote-icon">"</div>
            <p>{business.quickInfo}</p>
          </div>

          <div className="premium-details-grid">
            <div className="premium-contact-info">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <i className="fas fa-phone"></i>
                </div>
                <span>{business.businessContact}</span>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>{business.businessEmail}</span>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>{business.businessAddress}</span>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <i className="fas fa-clock"></i>
                </div>
                <span>{business.openingHours}</span>
              </div>
            </div>

            <div className="premium-services-section">
              <h4>Exclusive Services</h4>
              <div className="services-list">
                {business.provideServices.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="premium-social-links">
            <a
              href={`https://instagram.com/${business.businessInstagramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={`https://twitter.com/${business.businessTwitterUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={`https://facebook.com/${business.businessFacebookUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="premium-card-footer">
          <a
            href={business.businessWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-website-btn"
          >
            <span>Visit Website</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <button className="view-visiting-card-btn">
            <span>View Visiting Card</span>
            <i className="fas fa-id-card"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const PremiumBusinesses = ({ businesses }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const premiumBusinesses = businesses.filter(
    (business) => business.packageType === "platinum"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === premiumBusinesses.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [premiumBusinesses.length]);

  return (
    <section className="premium-businesses-section">
      <div className="premium-section-header">
        <h2>Premium Businesses</h2>
        <p>Experience excellence with our premium partners</p>
      </div>

      <div className="premium-slider">
        <div className="slider-wrapper">
          <div
            className="slider-container"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {premiumBusinesses.map((business) => (
              <div key={business.id} className="slider-item">
                <PremiumBusinessCard business={business} />
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {premiumBusinesses.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumBusinesses;
