import { Box, Container, Dialog, styled, Tab, Tabs } from "@mui/material";

export const StyledWrapper = styled(Box)`
  background: rgb(134, 234, 175);
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(134, 234, 175);
`;

export const AccountDialog = styled(Dialog)`
  .MuiPaper-root {
    padding: 24px;
    background: rgb(28, 28, 28);
  }
`;

export const StyledTabs = styled(Tabs)`
  margin: 30px 0;
`;

export const StyledTab = styled(Tab)`
  font-size: 20px;
  text-transform: none;
  &.mui-selected: {
    color: rgb(16, 185, 129);
  }
`;

export const GroupBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
