import { Box } from "@chakra-ui/react";
import React from "react";
import BackgroundImage from "../../images/blackandwhiteprofile.png";
import PaintSplashImage from "../../images/paintspray.png";
import {
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";

const LandingPage: React.FC = (props) => {
  return (
    <Box
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
      backgroundSize="auto 100%"
      height="100vh"
      paddingTop="6rem"
      paddingLeft="2rem"
    >
      <Box
        marginLeft="-2rem"
        backgroundSize="100% 100%"
        backgroundImage={PaintSplashImage}
        width="60%"
        height="60%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Box>
      <PortfolioTextTitle position="fixed" bottom="8rem">
        Sean La Tourette
      </PortfolioTextTitle>
      <PortfolioTextSubTitle position="fixed" bottom="2rem">
        Web never looked this good.
      </PortfolioTextSubTitle>
    </Box>
  );
};

export default LandingPage;
