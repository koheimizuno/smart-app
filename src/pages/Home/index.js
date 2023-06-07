import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";

import { getCurrentWeatherData } from "api";
import Spinner from "components/Spinner";

const Home = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(undefined);
  const [isLoadingWeatherData, setIsLoadingWeatherData] = useState(false);

  const getCurrentWeather = async () => {
    setIsLoadingWeatherData(true);
    const { data } = await getCurrentWeatherData();
    setCurrentWeatherData(data);
    setIsLoadingWeatherData(false);
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h1" sx={{ marginTop: "30px" }}>
        Today's weather
      </Typography>

      {isLoadingWeatherData ? (
        <Spinner />
      ) : currentWeatherData ? (
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="h2">
            {currentWeatherData.location.name}
          </Typography>
          <img
            src={currentWeatherData.current.condition.icon}
            alt="weather icon"
          />
          <Typography variant="h3">
            {currentWeatherData.current.temp_c}°C
          </Typography>
        </Box>
      ) : (
        "Server is not working."
      )}
    </Container>
  );
};

export default Home;
