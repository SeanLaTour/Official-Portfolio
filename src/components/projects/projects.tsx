import BackgroundImage from "../../images/laptop.png";
import { Box, Grid, HStack, Image } from "@chakra-ui/react";
import React from "react";
import ProjectPortfolioPhoto from "../../images/projectsphoto.png";
import BackgroundTop from "../../images/paintstrokebackgroundleft.webp";
import {
  PortfolioTextStandard,
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";
import { BiFileBlank } from "react-icons/bi";

const Projects: React.FC = (props) => {
  return (
    <Box>
      <Image
        transform={"rotate(45deg)"}
        position="fixed"
        left="-35%"
        top="-50%"
        width="140vw"
        src={BackgroundTop}
      />
      <Image
        transform={"rotate(60deg)"}
        position="fixed"
        right="-30%"
        top="-56%"
        width="140vw"
        src={BackgroundTop}
      />
      <Image
        position="fixed"
        left="-7.5vw"
        bottom="0"
        width="65vw"
        src={ProjectPortfolioPhoto}
      />
      <Box
        position="fixed"
        right="6vw"
        bottom="0"
        backgroundImage={BackgroundImage}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="100% 100%"
        height="60vh"
        width="50vw"
        display="flex"
      >
        <Grid
          width="8rem"
          height="12rem"
          position="relative"
          left="18%"
          top="10%"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <HStack>
            <BiFileBlank />
            <PortfolioTextStandard fontFamily="Wallpoet">
              Nesh
            </PortfolioTextStandard>
          </HStack>
          <HStack>
            <BiFileBlank />
            <PortfolioTextStandard fontFamily="Wallpoet">
              Alaeris
            </PortfolioTextStandard>
          </HStack>
          <HStack>
            <BiFileBlank />
            <PortfolioTextStandard fontFamily="Wallpoet">
              Zipti
            </PortfolioTextStandard>
          </HStack>
          <HStack>
            <BiFileBlank />
            <PortfolioTextStandard fontFamily="Wallpoet">
              WWC
            </PortfolioTextStandard>
          </HStack>
          <HStack>
            <BiFileBlank />
            <PortfolioTextStandard fontFamily="Wallpoet">
              3D
            </PortfolioTextStandard>
          </HStack>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
