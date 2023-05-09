import axios from 'axios';
require('dotenv').config()




export async function reverseGeocode(latitude, longitude) {
    try {
      const response = await axios.get(`https://eu1.locationiq.com/v1/reverse?key=${process.env.API_KEY}&lat=${latitude}&lon=${longitude}&format=json`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  