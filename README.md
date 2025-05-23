# fa-proxy

A simple proxy server for fetching restaurant listings from Swiggy using latitude and longitude coordinates.  
Built with Express and deployable as a Vercel serverless function.

## Features

- Proxies requests to Swiggy's public restaurant listing API
- Accepts `lat` and `lng` as query parameters
- Handles CORS for easy frontend integration
- Can be run locally or deployed to Vercel

## Usage

### Local Development

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the test server:
   ```sh
   node test-server.js
   ```

3. Make a GET request to:
   ```
   http://localhost:3000/api/swiggy?lat=<latitude>&lng=<longitude>
   ```

### Deploy to Vercel

- This project is ready to deploy on Vercel. The configuration in `vercel.json` ensures all `/api/*` routes are handled by the serverless function in [`api/index.js`](api/index.js).

## API

### GET `/api/swiggy`

**Query Parameters:**
- `lat` (required): Latitude coordinate
- `lng` (required): Longitude coordinate

**Example:**
```
/api/swiggy?lat=12.9716&lng=77.5946
```

**Response:**
- JSON response from Swiggy's API, or an error message.

## Project Structure

- [`api/index.js`](api/index.js): Main API handler (Express app wrapped for Vercel)
- [`test-server.js`](test-server.js): Local Express server for development/testing
- [`vercel.json`](vercel.json): Vercel deployment configuration

## License

MIT