import BackgroundImage from "../../images/laptop.png";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import PaintStrokeImage from "../../images/paintstrokebackgroundright.png";
import {
  PortfolioTextStandard,
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";

const Projects: React.FC = (props) => {
  return (
    <Box
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="left bottom 20px"
      backgroundSize="70% 80%"
      height="100vh"
      paddingTop="6rem"
      paddingLeft="2rem"
    ></Box>
  );
};

export default Projects;
