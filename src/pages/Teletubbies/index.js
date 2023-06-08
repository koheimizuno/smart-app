import { useEffect, useState } from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);
  useEffect(() => { 
    fetch("/teletubbies.json")
      .then((response) => response.json())
      .then((data) => {
        setTeletubbies(data.slice(0, 20));
      });
  }, []);
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ mt: 4 }}>
        Teletubbies
      </Typography>
      <Grid container spacing={2}>
        {teletubbies.map((teletubby, key) => {
          return (
            <Grid
              container
              direction={key % 2 ? "row-reverse" : "row"}
              key={key}
              alignItems="center"
              sx={{ marginTop: 1, border: 1 }}
            >
              <Grid item md={4} lg={2} sm={6} xs={12}>
                <Box sx={{ maxWidth: "100%" }}>
                  <img
                    src={teletubby.image_url}
                    alt={teletubby.name}
                    style={{ width: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item md={8} lg={10} sm={6} xs={12}>
                <Box>
                  <Typography variant="h3">{teletubby.name}</Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {teletubby.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {teletubby.traits.map((item, key) => {
                      return (
                        <Button
                          variant="outlined"
                          color="primary"
                          key={key}
                          sx={{ mr: 2, mb: 1 }}
                        >
                          {item}
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default Teletubbies;
