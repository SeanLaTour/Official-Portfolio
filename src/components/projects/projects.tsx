import BackgroundImage from "../../images/laptop.png";
import { Box, Grid, HStack, Image } from "@chakra-ui/react";
import React from "react";
import PaintStrokeImage from "../../images/paintstrokebackgroundright.png";
import {
  PortfolioTextStandard,
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";
import {BiFileBlank} from "react-icons/bi"

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
    >
      <Grid width="8rem" position="fixed" bottom="22rem" left="10rem" templateColumns='repeat(2, 1fr)' gap={6}>
    <HStack><BiFileBlank /><PortfolioTextStandard>Nesh</PortfolioTextStandard></HStack>
    <HStack><BiFileBlank /><PortfolioTextStandard>Alaeris</PortfolioTextStandard></HStack>
    <HStack><BiFileBlank /><PortfolioTextStandard>Zipti</PortfolioTextStandard></HStack>
    <HStack><BiFileBlank /><PortfolioTextStandard>WWC</PortfolioTextStandard></HStack>
    <HStack><BiFileBlank /><PortfolioTextStandard>3D</PortfolioTextStandard></HStack>
     </Grid>
    </Box>
  );
};

export default Projects;
