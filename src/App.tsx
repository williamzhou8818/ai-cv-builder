import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/HeaderNav";
import CoverLetterBuilder from "./components/CoverLetterBuilder";
import ImageBuilder from "./components/ImageBuilder";

const router = createBrowserRouter([
  { path: "/", element: <CoverLetterBuilder /> },
  { path: "/stockimage", element: <ImageBuilder />},
]);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Header />
        <RouterProvider router={router} />
      </Container>
    </React.Fragment>
  );
}

export default App;
