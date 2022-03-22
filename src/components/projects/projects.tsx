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
import { useState } from "react";
import { useEffect } from "react";

const Projects: React.FC = (props) => {
  const [selectedProject, setSelectedProject] = useState({})
  const [toggleLaptopScreen, setToggleLaptopScreen] = useState(false);

  const setProject = (e) => {
    console.log(e.target.id)
    switch (e.target.id) {
      case "Nesh":
        return  setSelectedProject({title: "NESH",
          description: "Nesh is a mic to pdf guitar tabliture app. It can listen to the acoustic tones of your guitar and translate it into PDFs while simutaniously allowing users to create and edit tabs from scratch. It was created using React, WebAudioDaw, and React-PDF.",
          link: ""
        })
        case "Alaeris":
          return  setSelectedProject({title: "Alaeris",
            description: "",
            link: ""
          })
          case "Zipti":
            return  setSelectedProject({title: "",
              description: "",
              link: ""
            })
            case "WWC":
              return  setSelectedProject({title: "",
                description: "",
                link: ""
              })
              case "3D":
                return  setSelectedProject({title: "",
                  description: "",
                  link: ""
                })
    }
  }

  useEffect(() =>{},[selectedProject])

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
        <Box
          width="8rem"
          height="12rem"
          position="relative"
          left="18%"
          top="10%"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          display={toggleLaptopScreen ? "flex" : "none"}
          flexDirection="column"
        >
          <Box display="flex" flexDirection="column">
            <PortfolioTextStandard
              onClick={() => setToggleLaptopScreen(false)}
              fontFamily="Wallpoet"
            >
              {"<-"} {selectedProject.title}:
            </PortfolioTextStandard>
            <PortfolioTextStandard
              width="33vw"
              lineHeight="120%"
              fontFamily="Wallpoet"
            >
              {selectedProject.description}
             </PortfolioTextStandard>
            <PortfolioTextStandard fontFamily="Wallpoet">Visit: <a href={selectedProject.link} target="_blank">{selectedProject.title} -></a></PortfolioTextStandard>
          </Box>
        </Box>
        <Box position="relative" left="0" top="22%">
          {" "}
        </Box>
        <Grid
          width="8rem"
          height="12rem"
          position="relative"
          left="18%"
          top="10%"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          display={toggleLaptopScreen ? "none" : "grid"}
        >
          <HStack
            id="Nesh"
            onClick={(e) => {
              setProject(e)
              setToggleLaptopScreen(true);

              console.log(selectedProject)
            }}
          >
            <BiFileBlank />
            <PortfolioTextStandard  id="Nesh"   fontFamily="Wallpoet">
              Nesh
            </PortfolioTextStandard>
          </HStack>
          <HStack id="Alaeris"
                    onClick={(e) => {
                      setProject(e)
                      setToggleLaptopScreen(true);
        
                      console.log(selectedProject)
                    }}
            onClick={() => {
              setToggleLaptopScreen(true);
            }}
          >
            <BiFileBlank />
            <PortfolioTextStandard id="Alaeris" fontFamily="Wallpoet">
              Alaeris
            </PortfolioTextStandard>
          </HStack>
          <HStack
            onClick={() => {
              setToggleLaptopScreen(true);
            }}
          >
            <BiFileBlank />
            <PortfolioTextStandard fontFamily="Wallpoet">
              Zipti
            </PortfolioTextStandard>
          </HStack>
          <HStack
            onClick={() => {
              setToggleLaptopScreen(true);
            }}
          >
            <BiFileBlank />
            <PortfolioTextStandard fontFamily="Wallpoet">
              WWC
            </PortfolioTextStandard>
          </HStack>
          <HStack
            onClick={() => {
              setToggleLaptopScreen(true);
            }}
          >
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
