import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { lat, lng } = req.query;
  console.log(`[Swiggy Handler] Incoming request: lat=${lat}, lng=${lng}`); // <-- Added log

  if (!lat || !lng) {
    console.warn('[Swiggy Handler] Missing lat/lng in request'); // <-- Added log
    return res.status(400).json({ error: 'Missing lat/lng' });
  }

  const swiggyUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  try {
    console.log(`[Swiggy Handler] Fetching: ${swiggyUrl}`); // <-- Added log
    const response = await fetch(swiggyUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' }
    });
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
    console.log('[Swiggy Handler] Success: Data sent to client'); // <-- Added log
  } catch (e) {
    console.error('[Swiggy Handler] Error fetching from Swiggy:', e); // <-- Added log
    res.status(500).json({ error: 'Failed to fetch from Swiggy' });
  }
}
