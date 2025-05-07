import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About A'Minus Surf</h4>
          <p>
            Providing surf predictions and forecasts for A'Minus in the Western Cape, South Africa.
            Data is updated regularly to give you the most accurate surf conditions.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#forecast">Today's Forecast</a></li>
            <li><a href="#weekly">Weekly Forecast</a></li>
            <li><a href="#tips">Surf Tips</a></li>
            <li><a href="#safety">Safety Guidelines</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Local Information</h4>
          <ul>
            <li><a href="#access">Beach Access</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#nearby">Nearby Attractions</a></li>
            <li><a href="#accommodation">Accommodation</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} A'Minus Surf Predictions. All rights reserved.</p>
        <p>Disclaimer: Surf predictions are for informational purposes only. Always check local conditions before entering the water.</p>
      </div>
    </footer>
  );
};

export default Footer;
