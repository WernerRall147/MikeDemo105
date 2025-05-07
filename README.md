# A'Minus Surf Predictions

A modern web application providing surf forecasts and predictions for A'Minus in the Western Cape, South Africa. Built with React and TypeScript, deployable to Azure Static Web Apps via GitHub Actions.

## Features

- Current surf conditions display with quality rating
- 5-day forecast with detailed metrics
- Wave height and wind speed chart visualization
- Responsive design for mobile and desktop
- Quick loading with data caching

## Tech Stack

- React with TypeScript
- Chart.js for data visualization
- Vite for fast builds and development
- Azure Static Web Apps for hosting
- GitHub Actions for CI/CD pipeline

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/surf-predictions-aminus.git
   cd surf-predictions-aminus
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment

This project is configured for automatic deployment to Azure Static Web Apps through GitHub Actions.

1. Create an Azure Static Web App resource
2. Configure the GitHub Actions workflow with your deployment token
3. Push changes to the main branch to trigger the deployment

## Data Sources

This demo application currently uses mock data. In a production environment, you would connect to a real surf forecasting API such as:
- Stormglass API
- Surfline API
- Magic Seaweed API

## License

This project is licensed under the MIT License - see the LICENSE file for details
