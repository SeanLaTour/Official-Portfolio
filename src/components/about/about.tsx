import { Box, Image, VStack } from "@chakra-ui/react";
import React from "react";
import BackgroundImage from "../../images/paintstrokebackgroundleft.webp";
import ProfilePhotoTwo from "../../images/seanprofilepagephoto3-.png";
import {
  PortfolioTextStandard,
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";

const About: React.FC = (props) => {
  return (
    <Box
      backgroundImage={BackgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="-100px"
      backgroundSize="auto 100%"
      height="100vh"
      paddingTop="6rem"
      paddingLeft="2rem"
    >
      <VStack marginTop="2rem" width="45%">
        <PortfolioTextStandard color="white">
          I am a full stack web developer in the San Diego area. I specialize in
          Javascript and Python frameworks such as Gatsby, React, Chakra,
          FashAPI, and Flask. I've spearheaded the building and design of a
          variety of web apps utilizing concepts from social media, payments,
          image and video handling, conversation flows, responsive designs,
          APIs, 3rd party integrations, 3D layouts and animation on both the
          front and backend levels of web design.
        </PortfolioTextStandard>
        <PortfolioTextStandard paddingTop="2rem" color="white">
          -Sean La Tourette{" "}
        </PortfolioTextStandard>
      </VStack>
      <Image position="fixed" right="0" bottom="0" src={ProfilePhotoTwo} />{" "}
    </Box>
  );
};

export default About;
