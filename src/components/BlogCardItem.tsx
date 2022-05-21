import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Ticker } from "../types/Ticker";
import { GroupBox } from "./styled";

interface IProps {
  ticker: Ticker;
  index: number;
}

export default function BlogCardItem({ ticker, index }: IProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const etherToNumber = (ether: string) => {
    return +ether / 10 ** 18;
  };
  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };
  return (
    <Card sx={{ width: "100%", maxWidth: isSmallScreen ? 450 : 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h3" lineHeight="200px">
          {ticker.id}
        </Typography>
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
            {shortenAddress(ticker.bidder)}
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
