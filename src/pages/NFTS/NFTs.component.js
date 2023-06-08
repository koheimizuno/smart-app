import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'

const Nfts_PAGE = () => {
  const [listing, setListing] = useState([])

  const loadListing = async () => {
    const response = await fetch(
      `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=0`
    )
    const data = await response.json()
    setListing([...listing, ...data.results])

    console.log(response)
  }

  useEffect(() => {
    loadListing()
    // eslint-disable-next-line
  }, [])

  return (
    <Container maxWidth='xl'>
      <Typography variant='h2'>NFT Marketplace</Typography>
      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        type='text'
        placeholder='Search by name'
        value={''}
        onChange={''}
        sx={{ m: '30px' }}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {listing.map(listing => (
          <Grid item className='card' key={listing.id} xs={3}>
            <img
              style={{ width: '100%', height: '70%' }}
              src={listing.img}
              alt={''}
              variant='img'
            />
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              style={{ backgroundColor: 'orange' }}
            >
              <Typography variant='h5'>{listing.collectionName}</Typography>
              <Typography variant='p'>{listing.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Nfts_PAGE
