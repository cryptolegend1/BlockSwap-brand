import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { Ticker } from "../types/Ticker";
import { GroupBox } from "./styled";
import brandAbi from "../abis/brandAbi.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { BRAND_ADDRESS } from "../constants/constants";

interface IProps {
  ticker: Ticker;
  index: number;
}

export default function BlogCardItem({ ticker, index }: IProps) {
  const [uri, setURI] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { library } = useWeb3React();
  const brandContract = new ethers.Contract(BRAND_ADDRESS, brandAbi, library);

  const etherToNumber = (ether: string) => {
    return +ether / 10 ** 18;
  };
  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };
  useEffect(() => {
    const getURI = async () => {
      const id = await brandContract.lowerTickerToTokenId(ticker.id);
      const tu = await brandContract.tokenURI(id);
      if (tu) {
        const res = await axios.get(tu);
        const tokeURI = res.data.image;
        setURI(tokeURI);
      } else {
        setURI("");
      }
    };
    getURI();
  }, [ticker, brandContract]);
  return (
    <Card sx={{ width: "100%", maxWidth: isSmallScreen ? 450 : 275 }}>
      {uri && (
        <CardMedia component="img" height="177" image={uri} alt="token uri" />
      )}
      <CardContent>
        {uri ? (
          <Typography gutterBottom variant="h5">
            {ticker.id}
          </Typography>
        ) : (
          <Typography gutterBottom variant="h3" lineHeight="200px">
            {ticker.id}
          </Typography>
        )}
        <GroupBox>
          <Typography variant="body1">Bid Count:</Typography>
          <Typography variant="body2">{ticker.numberOfBidsReceived}</Typography>
        </GroupBox>
        <GroupBox>
          <Typography variant="body1">Winning Bid:</Typography>
          <Typography variant="body2">
            {etherToNumber(ticker.shbBid)} SHB
          </Typography>
        </GroupBox>
        <GroupBox>
          <Typography variant="body1">End Block:</Typography>
          <Typography variant="body2">{ticker.biddingEnd} SHB</Typography>
        </GroupBox>
        <GroupBox>
          <Typography variant="body1">Winner:</Typography>
          <Typography variant="body2">
            <Link
              href={`https://etherscan.io/address/${ticker.bidder}`}
              target="_blank"
              sx={{ color: "#000", textDecoration: "none" }}
            >
              {shortenAddress(ticker.bidder)}
            </Link>
          </Typography>
        </GroupBox>
        <GroupBox>
          <Typography variant="body1">Time Left:</Typography>
          <Typography variant="body2" color="rgb(16, 185, 129)">
            Finished
          </Typography>
        </GroupBox>
        <Box></Box>
      </CardContent>
      <CardActions>
        <Button variant="outlined" disabled fullWidth>
          Bidding Closed
        </Button>
      </CardActions>
    </Card>
  );
}
