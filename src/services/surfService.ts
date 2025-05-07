import axios from 'axios';
import { SurfForecast, CurrentCondition, DailyForecast, HourlyForecast } from '../models/SurfModels';

// In a production environment, this would be an actual API call
// For now, we'll use mock data as we don't have a real surf API connection yet
export const fetchSurfData = async (): Promise<SurfForecast> => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  // For demo purposes, we'll return mock data
  // In production, this would be replaced with an actual API call:
  // return axios.get<SurfForecast>('https://api.example.com/surf/aminus').then(res => res.data);

  const mockCurrentDate = new Date();
  
  const mockCurrentCondition: CurrentCondition = {
    waveHeight: 1.8,
    wavePeriod: 12,
    swellDirection: "SW",
    windSpeed: 15,
    windDirection: "SE",
    temperature: 22,
    tide: "Mid-tide, rising",
    surfQuality: "Good"
  };

  const mockDays: DailyForecast[] = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(mockCurrentDate.getDate() + i);
    
    return {
      date: date.toISOString().split('T')[0],
      day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()],
      minWaveHeight: 1.2 + Math.random() * 0.5,
      maxWaveHeight: 1.8 + Math.random() * 1.2,
      avgPeriod: 10 + Math.random() * 4,
      dominantSwellDirection: ["SW", "SSW", "S", "SSE"][Math.floor(Math.random() * 4)],
      windSpeed: 10 + Math.random() * 15,
      windDirection: ["SE", "S", "SW", "E"][Math.floor(Math.random() * 4)],
      temperature: 18 + Math.random() * 8,
      surfQuality: ["Poor", "Fair", "Good", "Excellent"][Math.floor(Math.random() * 4)],
      tide: {
        high: [
          \`\${(6 + Math.floor(Math.random() * 2)).toString().padStart(2, '0')}:\${(Math.floor(Math.random() * 60)).toString().padStart(2, '0')}\`,
          \`\${(18 + Math.floor(Math.random() * 2)).toString().padStart(2, '0')}:\${(Math.floor(Math.random() * 60)).toString().padStart(2, '0')}\`
        ],
        low: [
          \`\${(12 + Math.floor(Math.random() * 2)).toString().padStart(2, '0')}:\${(Math.floor(Math.random() * 60)).toString().padStart(2, '0')}\`,
          \`\${(0 + Math.floor(Math.random() * 2)).toString().padStart(2, '0')}:\${(Math.floor(Math.random() * 60)).toString().padStart(2, '0')}\`
        ]
      },
      sunriseTime: "06:15",
      sunsetTime: "18:45"
    };
  });

  const mockHourly: HourlyForecast[] = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    return {
      time: \`\${hour.toString().padStart(2, '0')}:00\`,
      waveHeight: 1.4 + Math.sin(i / 4) * 0.5 + Math.random() * 0.3,
      wavePeriod: 10 + Math.random() * 4,
      windSpeed: 10 + Math.random() * 8 + (hour > 10 && hour < 16 ? 5 : 0),
      windDirection: ["SE", "S", "SW", "E"][Math.floor(Math.random() * 4)],
      temperature: 18 + Math.sin((i - 6) / 12 * Math.PI) * 6 + Math.random() * 2
    };
  });

  const mockData: SurfForecast = {
    locationName: "A'Minus, Western Cape",
    latitude: -34.35,
    longitude: 18.89,
    current: mockCurrentCondition,
    days: mockDays,
    hourly: mockHourly
  };

  return mockData;
};
