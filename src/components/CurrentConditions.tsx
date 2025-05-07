import React from 'react';
import { CurrentCondition } from '../models/SurfModels';
import '../styles/CurrentConditions.css';

interface CurrentConditionsProps {
  currentCondition: CurrentCondition;
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({ currentCondition }) => {
  // Helper function to get quality class
  const getQualityClass = (quality: string): string => {
    switch (quality.toLowerCase()) {
      case 'poor': return 'quality-poor';
      case 'fair': return 'quality-fair';
      case 'good': return 'quality-good';
      case 'excellent': return 'quality-excellent';
      default: return '';
    }
  };

  return (
    <div className="current-conditions">
      <h3>Current Conditions</h3>
      <div className="conditions-grid">
        <div className="condition-card main-condition">
          <div className="wave-visual">
            <div className="wave-icon" style={{ height: `${Math.min(100, currentCondition.waveHeight * 30)}%` }}></div>
          </div>
          <div className="condition-details">
            <div className={`quality-badge large ${getQualityClass(currentCondition.surfQuality)}`}>
              {currentCondition.surfQuality}
            </div>
            <div className="wave-stats">
              <div className="stat">
                <span className="stat-label">Wave Height</span>
                <span className="stat-value">{currentCondition.waveHeight.toFixed(1)}m</span>
              </div>
              <div className="stat">
                <span className="stat-label">Period</span>
                <span className="stat-value">{currentCondition.wavePeriod}s</span>
              </div>
              <div className="stat">
                <span className="stat-label">Swell Direction</span>
                <span className="stat-value">{currentCondition.swellDirection}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="condition-card">
          <div className="condition-icon">💨</div>
          <h4>Wind</h4>
          <div className="condition-value">{Math.round(currentCondition.windSpeed)} km/h</div>
          <div className="condition-detail">{currentCondition.windDirection}</div>
        </div>

        <div className="condition-card">
          <div className="condition-icon">🌡️</div>
          <h4>Temperature</h4>
          <div className="condition-value">{Math.round(currentCondition.temperature)}°C</div>
          <div className="condition-detail">Air temperature</div>
        </div>

        <div className="condition-card">
          <div className="condition-icon">🌊</div>
          <h4>Tide</h4>
          <div className="condition-value">{currentCondition.tide}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentConditions;
