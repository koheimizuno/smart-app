import { useCallback, useEffect, useState } from "react";
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

  const handleScroll = useCallback(() => {
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
  }, [setVisibleTeletubbies, visibleTeletubbies, teletubbies]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch("/teletubbies.json")
      .then((response) => response.json())
      .then((data) => {
        setTeletubbies(data);
        setVisibleTeletubbies(data.slice(0, 20));
      });
  }, []);

  useEffect(() => {
    const filteredTeletubbies = teletubbies.filter((teletubby) =>
      teletubby.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleTeletubbies(filteredTeletubbies.slice(0, 20));
  }, [searchTerm, teletubbies]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Container maxWidth="lg" style={{ marginTop: "100px" }}>
      <Typography variant="h3" sx={{ mt: 4 }} style={{ color: "green" }}>
        <i>Teletubbies</i>
      </Typography>
      <TextField
        label="Search by name"
        variant="outlined"
        margin="normal"
        fullWidth
        value={searchTerm}
        onChange={handleInputChange}
        style={{ width: "50%" }}
      />
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
            <Grid
              item
              md={8}
              lg={10}
              sm={6}
              xs={12}
              style={{ paddingLeft: 20, paddingRight: 20 }}
            >
              <Box>
                <Typography variant="h4">{teletubby.name}</Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2 }}
                  style={{ textAlign: "left" }}
                >
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
    </Container>
  );
};

export default Teletubbies;
