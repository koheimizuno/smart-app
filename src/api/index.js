import axios from "axios";

const weatherOptions = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "22.3, 114.1" },
  headers: {
    "X-RapidAPI-Key": "cf1d6bd258msh581225dc1a5493fp11399bjsn09a7b76afe60",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const getCurrentWeatherData = async () => {
  try {
    const response = await axios.request(weatherOptions);
    return response;
  } catch (error) {
    throw error;
  }
};
