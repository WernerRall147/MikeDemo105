import React from 'react';
import { DailyForecast } from '../models/SurfModels';
import '../styles/SurfPredictionCard.css';

interface SurfPredictionCardProps {
  day: DailyForecast;
}

const SurfPredictionCard: React.FC<SurfPredictionCardProps> = ({ day }) => {
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

  // Get the appropriate wave icon based on wave height
  const getWaveIcon = (minHeight: number, maxHeight: number): string => {
    const avgHeight = (minHeight + maxHeight) / 2;
    if (avgHeight < 1) return '🌊';
    if (avgHeight < 2) return '🌊🌊';
    return '🌊🌊🌊';
  };

  return (
    <div className={`surf-card ${getQualityClass(day.surfQuality)}`}>
      <div className="surf-card-header">
        <h3>{day.day}</h3>
        <p className="surf-date">{new Date(day.date).toLocaleDateString()}</p>
      </div>

      <div className="surf-condition">
        <span className="quality-badge">{day.surfQuality}</span>
        <span className="wave-icon">{getWaveIcon(day.minWaveHeight, day.maxWaveHeight)}</span>
      </div>

      <div className="surf-details">
        <div className="detail-row">
          <span className="detail-label">Wave Height:</span>
          <span className="detail-value">{day.minWaveHeight.toFixed(1)} - {day.maxWaveHeight.toFixed(1)}m</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Period:</span>
          <span className="detail-value">{Math.round(day.avgPeriod)}s</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Wind:</span>
          <span className="detail-value">{Math.round(day.windSpeed)} km/h {day.windDirection}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Swell:</span>
          <span className="detail-value">{day.dominantSwellDirection}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Temp:</span>
          <span className="detail-value">{Math.round(day.temperature)}°C</span>
        </div>
      </div>

      <div className="tide-info">
        <div className="tide-row">
          <span className="tide-label">High:</span>
          <span className="tide-value">{day.tide.high.join(', ')}</span>
        </div>
        <div className="tide-row">
          <span className="tide-label">Low:</span>
          <span className="tide-value">{day.tide.low.join(', ')}</span>
        </div>
      </div>
      
      <div className="sun-times">
        <div className="sun-row">
          <span className="sun-icon">🌅</span>
          <span>{day.sunriseTime}</span>
        </div>
        <div className="sun-row">
          <span className="sun-icon">🌇</span>
          <span>{day.sunsetTime}</span>
        </div>
      </div>
    </div>
  );
};

export default SurfPredictionCard;
