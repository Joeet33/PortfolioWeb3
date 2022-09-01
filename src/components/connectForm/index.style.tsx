import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

export const ConnectContainer = styled.div`
  position: relative;
  width: 40%;
  margin-left: auto;
  margin-right: 15vw;
  text-align: center;
  height: fit-content;
  border-style: solid;
  background-color: white;
  padding-bottom: 3vh;

  h1 {
    color: black;
    padding-left: 4vw;
    padding-right: 4vw;
  }
`;

export const StyledButton1 = styled(Button)`
  margin: auto;
  background-color: black;

  :hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

export const StyledButton2 = styled(Button)`
  margin-top: 2%;
  margin-left: 1%;
  background-color: black;

  :hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

export const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: black;
  width: 50%;
  margin: auto;
  border-radius: 1vw;
  padding-bottom: 3vh;
  padding-top: 2vh;
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3vh;
  padding-top: 2vh;
  border-style: solid;
  border-color: black;
  width: 50%;
  margin: auto;
  border-radius: 1vw;
  margin-top: 2vh;
`;

export const FlexBox3 = styled.div`
  padding-left: 1vw;
  padding-right: 1vw;
  margin: auto;
  margin-top: 5vh;
`;

export const StyleLogo = styled.img`
  border-radius: 50%;
  margin-top: 10px;
  width: 110px;
  height: 110px;
  border: 4px;
  margin: auto;
`;
