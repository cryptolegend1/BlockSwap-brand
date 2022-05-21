import Container from "@mui/material/Container";
import { Box, Button, Pagination } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useWeb3React } from "@web3-react/core";
import BlogCardView from "../../components/BlogCardView";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Ticker } from "../../types/Ticker";
import { StyledTab, StyledTabs } from "../../components/styled";
import { tickerQuery } from "../../query/query";
import { injected } from "../../connector";

export default function Home() {
  const perPage = 8;
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [page, setPage] = useState(1);
  const [view, setView] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const { active, activate, account } = useWeb3React();

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };
  const handleTabChange = (event: any, newValue: number) => {
    const views = ["all", "mytickers", "battle"];
    getTickers(views[newValue]);
    setView(newValue);
  };
  const getTickers = async (view: string) => {
    setLoading(true);
    const query = tickerQuery(view, account);
    const res = await api.getTickers(query);
    setTickers(res.tickers);
    setLoading(false);
  };

  useEffect(() => {
    getTickers("all");
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "50px" }}>
      {active ? (
        <>
          <StyledTabs value={view} onChange={handleTabChange} centered>
            <StyledTab label="Show All" />
            <StyledTab label="My Tickers" />
            <StyledTab label="Battle Space" disabled />
          </StyledTabs>
          <BlogCardView
            tickers={tickers.slice(perPage * (page - 1), perPage * page)}
            page={page}
            isLoading={isLoading}
          />
          <Pagination
            count={Math.ceil(tickers.length / perPage)}
            page={page}
            onChange={handlePageChange}
            sx={{ margin: "32px 0" }}
          />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 140px)",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              activate(injected);
            }}
            size="large"
          >
            <LockOpenIcon />
            Unlock Wallet
          </Button>
        </Box>
      )}
    </Container>
  );
}
