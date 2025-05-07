import React, { useEffect, useState } from 'react';
import { fetchSurfData } from './services/surfService';
import Header from './components/Header';
import SurfPredictionCard from './components/SurfPredictionCard';
import WaveHeightChart from './components/WaveHeightChart';
import CurrentConditions from './components/CurrentConditions';
import Footer from './components/Footer';
import { SurfForecast } from './models/SurfModels';
import './styles/App.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [forecast, setForecast] = useState<SurfForecast | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSurfData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSurfData();
        setForecast(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch surf data:', err);
        setError('Failed to load surf predictions. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadSurfData();
    
    // Refresh data every 30 minutes
    const intervalId = setInterval(loadSurfData, 30 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app">
      <Header />
      
      <main className="content">
        {isLoading && (
          <div className="loading">
            <div className="wave-loading"></div>
            <p>Loading surf predictions...</p>
          </div>
        )}
        
        {error && (
          <div className="error-message">
            <h3>Oops!</h3>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        )}
        
        {!isLoading && !error && forecast && (
          <>
            <div className="hero-section">
              <h2>Surf Predictions for A'Minus, Western Cape</h2>
              <p className="last-updated">Last updated: {new Date().toLocaleString()}</p>
            </div>
            
            <CurrentConditions currentCondition={forecast.current} />
            
            <div className="forecast-section">
              <h3>5-Day Forecast</h3>
              <div className="forecast-cards">
                {forecast.days.map((day, index) => (
                  <SurfPredictionCard key={index} day={day} />
                ))}
              </div>
            </div>
            
            <div className="chart-section">
              <h3>Wave Height Forecast</h3>
              <WaveHeightChart forecast={forecast} />
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
