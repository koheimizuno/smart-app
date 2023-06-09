# Smart App

This is project using MUI with React.
The purpose is to practise the skill using the command of the Git.

# Tech stack

React, MUI

# How to run the project

```
npm install
npm start
```

# Page description

## NFTs page

- There is endpoint to return paginated NFT listings:

```
https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=0
```

- On load, first 20 NFT listings in a grid is shown, the grid become responsive
- Each card consist of an image, name, price
- When user scrolls down the page, more listing is shown.
- It is possible to searh NFTs by name (frontend side)

## Teletubbies page

- There is `teletubbies.json` in `public` directory.
- On load, first 20 teletubbies listings in a list is shown, the list become responsive
- Each card consist of an image, name, descrition and traits.
- When user scrolls down the page, more listing is shown.
- It is possible to searh NFTs by name (frontend side)
