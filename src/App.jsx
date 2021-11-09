import React from "react";
import Button from "./components/Button";
import Box from "./components/Box";
import "./App.scss";
import styled, { ThemeProvider } from "styled-components";
import StyledButton from "./components/StyledButton";

const ButtonBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
  color: ${(props) => props.theme.palette.pink};
  font-weight: bold;
`;

function App() {
  const onClick = () => {
    console.log("click");
  };
  const theme = {
    palette: {
      blue: "#228be6",
      gray: "#495057",
      pink: "#f06595"
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <ButtonBlock>
        block
        <StyledButton color="blue" backgroundColor="gray">
          test
        </StyledButton>
      </ButtonBlock>
    </ThemeProvider>
  );
}

export default App;
