import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router";
import { ROUTER_PATHS } from "../../routerPaths";
import {
  ConnectContainer,
  FlexBox1,
  FlexBox2,
  FlexBox3,
  StyledButton1,
  StyledButton2,
  StyleLogo,
} from "./index.style";

export const ConnectForm = () => {
  const [email, setEmail] = useState("");
  const { authenticate, isAuthenticated, isAuthenticating, authError } =
    useMoralis();
  const navigate = useNavigate();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_5BCA96C2C0FDDACB",
      network: "mainnet",
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTER_PATHS.PROFILE);
    }
  }, [isAuthenticated]);

  return (
    <ConnectContainer>
      <h1>Connect With Wallet or Email</h1>
      <FlexBox1>
        <div>Connect Wallet</div>
        <StyleLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"></StyleLogo>
        <StyledButton1
          variant="contained"
          type="button"
          onClick={() =>
            authenticate({
              signingMessage: "Connect to our site via your wallet.",
            })
          }
        >
          Connect
        </StyledButton1>
      </FlexBox1>

      {isAuthenticating && <p className="green">Authenticating</p>}
      {authError && (
        <p className="error">{JSON.stringify(authError.message)}</p>
      )}
      <FlexBox2>
        <div>Connect Email</div>
        <FlexBox3>
          <TextField
            id="email"
            label="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledButton2
            variant="contained"
            type="submit"
            onClick={handleCustomLogin}
          >
            Connect
          </StyledButton2>
        </FlexBox3>
      </FlexBox2>
    </ConnectContainer>
  );
};
