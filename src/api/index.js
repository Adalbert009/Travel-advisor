import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': 'b9200094demsh739d6084a81ca03p1c2595jsn63ed75912b2e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  
} 
catch (error) {
console.error(error);
}
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://weather-api99.p.rapidapi.com/weather', {
        params: { lat, lon: lng },
        headers: {
          'X-RapidAPI-Key': 'b9200094demsh739d6084a81ca03p1c2595jsn63ed75912b2e',
          'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
        }
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};


