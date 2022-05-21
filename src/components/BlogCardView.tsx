import { Box, Typography } from "@mui/material";
import BlogCardItem from "./BlogCardItem";
import { Ticker } from "../types/Ticker";

interface IProps {
  tickers: Ticker[];
  page: number;
  isLoading: boolean;
}

export default function BlogCardView({ tickers, page, isLoading }: IProps) {
  return (
    <>
      {isLoading ? (
        <Typography variant="h3">Loading</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            py: "16px",
            justifyContent: "center"
          }}
        >
          {tickers.length > 0 ? (
            tickers.map((ticker: any, i: any) => (
              <BlogCardItem
                ticker={ticker}
                index={6 * (page - 1) + i}
                key={i}
              />
            ))
          ) : (
            <Typography variant="h3">No Data</Typography>
          )}
        </Box>
      )}
    </>
  );
}
