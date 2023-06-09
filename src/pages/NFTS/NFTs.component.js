import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Nfts_PAGE = () => {
  const [listing, setListing] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadListing = useCallback(async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
    );
    const data = await response.json();
    setListing([...listing, ...data.results]);
    setOffset(offset + 20);
  }, [offset, listing]);

  useEffect(() => {
    loadListing();
  }, [loadListing]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000
      ) {
        loadListing();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadListing]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" sx={{ m: "60px" }}>
        NFT Marketplace
      </Typography>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        placeholder="Search by name"
        value={""}
        onChange={""}
        sx={{ m: "20px" }}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listing.map((listing) => (
          <Grid item className="card" key={listing.id} xs={3}>
            <img
              style={{ width: "100%", height: "70%" }}
              src={listing.img}
              alt={""}
              variant="img"
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              style={{ backgroundColor: "orange" }}
            >
              <Typography variant="h5">{listing.collectionName}</Typography>
              <Typography variant="p">{listing.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Nfts_PAGE;
