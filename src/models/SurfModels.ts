export interface CurrentCondition {
  waveHeight: number;
  wavePeriod: number;
  swellDirection: string;
  windSpeed: number;
  windDirection: string;
  temperature: number;
  tide: string;
  surfQuality: string; // "Poor", "Fair", "Good", "Excellent"
}

export interface DailyForecast {
  date: string;
  day: string;
  minWaveHeight: number;
  maxWaveHeight: number;
  avgPeriod: number;
  dominantSwellDirection: string;
  windSpeed: number;
  windDirection: string;
  temperature: number;
  surfQuality: string;
  tide: {
    high: string[];
    low: string[];
  };
  sunriseTime: string;
  sunsetTime: string;
}

export interface HourlyForecast {
  time: string;
  waveHeight: number;
  wavePeriod: number;
  windSpeed: number;
  windDirection: string;
  temperature: number;
}

export interface SurfForecast {
  locationName: string;
  latitude: number;
  longitude: number;
  current: CurrentCondition;
  days: DailyForecast[];
  hourly: HourlyForecast[];
}
