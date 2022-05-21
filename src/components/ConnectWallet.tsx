import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Button } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AccountDialog } from "./styled";
import { useEagerConnect, useInactiveListener } from "../hooks";
import { injected } from "../connector";

export function ConnectWallet() {
  const [open, setOpen] = useState(false);
  const context = useWeb3React<Web3Provider>();
  const { connector, account, activate, deactivate } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {account ? (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleClickOpen}
        >
          My Account
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            activate(injected);
          }}
        >
          Unlock Wallet
        </Button>
      )}

      <AccountDialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
        <DialogContent>
          <Button
            variant="text"
            color="primary"
            size="large"
            fullWidth
            sx={{ marginBottom: "8px" }}
            href={`https://etherscan.io/address/${account}`}
            target="_blank"
          >
            View On Etherscan
          </Button>
          <Button
            variant="text"
            color="primary"
            size="large"
            fullWidth
            onClick={() => {
              deactivate();
              handleClose();
            }}
          >
            Sign Out
          </Button>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="large" onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </AccountDialog>
    </>
  );
}
