import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import WelcomePage from "./WelcomePage";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import Main from "./sections/Main";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function App(props) {
  return (
    <>
      <CssBaseline />
      <Main />
      <AppBar color="transparent" elevation={0}>
        <Container>
          <Toolbar>
            <AnchorLink href="#header">
              <button>Header</button>
            </AnchorLink>
            <AnchorLink href="#body">
              <button>Body</button>
            </AnchorLink>
            <AnchorLink href="#footer">
              <button>Footer</button>
            </AnchorLink>
            <Box sx={{ color: "white" }}>
            <WhatsAppIcon /> <FacebookIcon /> <EmailIcon /> <LocationOnIcon />
          </Box>
          </Toolbar>{" "}
          
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <Container>
        <WelcomePage />
      </Container>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
