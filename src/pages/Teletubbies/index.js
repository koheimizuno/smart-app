import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);
  const [visibleTeletubbies, setVisibleTeletubbies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/teletubbies.json")
      .then((response) => response.json())
      .then((data) => {
        setTeletubbies(data);
        setVisibleTeletubbies(data.slice(0, 20));
      });
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const newVisibleTeletubbies = [
        ...visibleTeletubbies,
        ...teletubbies.slice(
          visibleTeletubbies.length,
          visibleTeletubbies.length + 20
        ),
      ];
      setVisibleTeletubbies(newVisibleTeletubbies);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [visibleTeletubbies]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredTeletubbies = teletubbies.filter((teletubby) =>
      teletubby.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleTeletubbies(filteredTeletubbies.slice(0, 20));
  }, [searchTerm, teletubbies]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ mt: 4 }}>
        Teletubbies
      </Typography>
      <TextField
        label="Search by name"
        variant="outlined"
        margin="normal"
        fullWidth
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Grid container>
        {visibleTeletubbies.map((teletubby, key) => {
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
