export const tickerQuery = (type: string, address: any) => {
  let filter = '';
  if (type === "mytickers") {
    filter = `where: {bidder: "${address}"}`;
  }
  let query = `
    query {
        tickers(${filter}, orderBy: biddingEnd, orderDirection: desc) {
            id
            shbBid
            bidder
            biddingEnd
            numberOfBidsReceived
            nftClaimed
            tokenURI
            name
            imageURI
            description
            __typename
        }
    }
    `;
  return query;
};
