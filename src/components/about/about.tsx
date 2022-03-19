import { Box } from "@chakra-ui/react";
import React from "react";
import BackgroundImage from "../../images/blackandwhiteprofile.png";
import PaintSplashImage from "../../images/paintspray.png";
import {
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";

const About: React.FC = (props) => {
  return (
    <Box
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
      backgroundSize="auto 100%"
      height="100vh"
      paddingTop="6rem"
      paddingLeft="2rem"
    ></Box>
  );
};

export default About;
