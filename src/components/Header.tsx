import { ConnectWallet } from "./ConnectWallet";
import { Box } from "@mui/material";
import logo from "../assets/logo.svg";
import { StyledContainer, StyledWrapper } from "./styled";

export function Header() {

  return (
    <Box>
      <StyledWrapper>
        <StyledContainer maxWidth="lg">
          <Box component="img" src={logo} height={85} />
          <ConnectWallet />
        </StyledContainer>
      </StyledWrapper>
    </Box>
  );
}
