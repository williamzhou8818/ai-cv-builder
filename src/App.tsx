import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Contants from "./components/Contants";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Header />
        <Contants />
      </Container>
    </React.Fragment>
  );
}

export default App;
