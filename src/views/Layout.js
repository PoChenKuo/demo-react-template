import React from "react";
import MainPanel from "./MainPanel";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import { createMuiTheme } from "@material-ui/core/styles";
import { palette, spacing, typography } from "@material-ui/system";

import "@style/index.scss";

const Box = styled.div`
  ${palette}${spacing}${typography}
`;
// or import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
  spacing: 4,
  // palette: {
  //   primary: {
  //     // light: 这将从 palette.primary.main 中进行计算，
  //     main: "#ff4400",
  //     // dark: 这将从 palette.primary.main 中进行计算，
  //     // contrastText: 这将计算与 palette.primary.main 的对比度
  //   },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Layout() {
  return (
    <Router>
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Box
            color="primary.main"
            bgcolor="background.paper"
            fontFamily="h6.fontFamily"
            fontSize={{
              xs: "h6.fontSize",
              sm: "h4.fontSize",
              md: "h3.fontSize",
            }}
            p={{ xs: 2, sm: 3, md: 4 }}
          >
            <div className="layout">
              <div className="header">
                <Header />
              </div>
              <div className="context">
                <div className="left-panel map"></div>
                <MainPanel />
              </div>
            </div>
          </Box>
        </ThemeProvider>
      </NoSsr>
    </Router>
  );
}

export default Layout;
