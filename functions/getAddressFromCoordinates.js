const axios = require('axios');

async function getAddressFromCoordinates(lat, lng) {
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.display_name) {
      return data.display_name;
    } else {
      throw new Error('Geocoding failed: No address found');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = getAddressFromCoordinates;