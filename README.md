# BlockSwap Front-End

---

This is the simple NFT dashboard.
It gets all ticker(NFT)s from subgraph API by using graphQL. There are 3 tabs (Currently `Battle Space` tab is disabled).
Every NFT has received bid count, the highest bid price, end blocknumber, the address of winner.
It gets nft ID from nft name by calling `lowerTickerToTokenId()` method and also gets image URI by calling `tokenURI()` method.

- `Show All`: This tab shows all NFTs on the network
- `My Tickers`: This tab show only the NFTs that are created by the user account.

### Technologies:

- React
- TypeScript
- MUI Design
- Styled-components
- ESLint / Prettier
- web3-react
- ether.js
- GraphQL
- axios
- Vercel

### Prerequisites

```
yarn
node v16^
```

### Project Setup

```
yarn install
yarn start
```

### npm scripts

- `start`: start local development app
- `build`: build react project

### CI/CD

```
This project is deployed on the vercel server.
```
