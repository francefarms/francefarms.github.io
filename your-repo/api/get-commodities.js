// Example: api/get-commodities.js
import fetch from 'node-fetch'; // You may need to use a library like node-fetch

export default async function handler(req, res) {
  // 1. Fetch data from an external, real commodity API 
  const API_KEY = process.env.COMMODITY_API_KEY; // Stored securely in Vercel
  const externalUrl = `https://external-commodity-api.com/prices?key=${API_KEY}`;

  try {
    const response = await fetch(externalUrl);
    const externalData = await response.json();

    // 2. Format the data to match the expected structure
    const formattedData = [
      { name: 'Cocoa', price: externalData.cocoa.latest, unit: 'USD/ton', change: '+25.00', source: 'ICE' },
      // ... other commodities ...
    ];

    // 3. Send the JSON response back to your HTML page
    res.status(200).json(formattedData);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
