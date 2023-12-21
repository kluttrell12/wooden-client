import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Wooden } from "./Wooden";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import WoodenTheme from "./themes/WoodenTheme";
import { Box, CssBaseline } from "@mui/material";
import styled from "@emotion/styled";

const WoodenContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white, // Adjusted to use palette
  width: "100vw",
  height: "100vh",
}));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <ThemeProvider theme={WoodenTheme}>
      <CssBaseline />
      <WoodenContainer>
        <Wooden />
      </WoodenContainer>
    </ThemeProvider>
  </Router>
);
