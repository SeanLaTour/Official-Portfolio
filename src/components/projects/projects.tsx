import BackgroundImage from "../../images/laptop.png";
import { Box, Grid, HStack, Image } from "@chakra-ui/react";
import React from "react";
import ProjectPortfolioPhoto from "../../images/projectsphoto.png";
import BackgroundTop from "../../images/paintstrokebackgroundleft.webp";
import { useTransition, animated } from "react-spring";
import {
  PortfolioTextStandard,
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";
import { BiFileBlank } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import HeaderLight from "../../components/shared/header/header_light";
import TypeWriter from 'typewriter-effect';

const Projects: React.FC = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const transitionTopBanner = useTransition(isVisible, {
    from: { x: 0, y: -400, opacity: 0 },
    enter: { x: 0, y: -325, opacity: 1 },
    leave: { x: 0, y: -400, opacity: 0 },
  });
  const transitionBottom = useTransition(isVisible, {
    from: { y: 0, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });
  const [selectedProject, setSelectedProject] = useState({});
  const [toggleLaptopScreen, setToggleLaptopScreen] = useState(false);

  const setProject = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "Nesh":
        return setSelectedProject({
          title: "Nesh",
          description:
            "Nesh is a mic to pdf guitar tabliture app I developed for myself in order to translate acoustic guitar into PDFs while simutaniously allowing for the creation and editing of tabs from scratch. It was created using React, WebAudioDaw, and React-PDF.",
          link: "https://trusting-feynman-19add5.netlify.app/",
        });
      case "Alaeris":
        return setSelectedProject({
          title: "Alaeris",
          description:
            "Alaeris is the solution to CO2 emissions due to crypto. As lead fullstack developer on the Alaeris team I was charged with building and desiging our frontend and API. Alaeris was built with Gatsby, React, Chakra UI and FastAPI.",
          link: "https://www.alaeris.com/",
        });
      case "Zipti":
        return setSelectedProject({
          title: "Zipti",
          description:
            "Zipti is the best way to connect to professionals via instagram. An MVP I developed working at WinningWithChase LLC, Zipti is a powerful video chat app that pays professionals to answer anyone's questions. Built with Gatsby, React, Chakra UI, Flask and Stripe integrations.",
          link: "https://zipti.com/",
        });
      case "WWC":
        return setSelectedProject({
          title: "WWC",
          description:
            "As full stack developer at WinningWithChase I was tasked with building and maintaining the archetecture of our business landing page. The WWC Landing page was developed using Gatsby, React, and Chakra UI.",
          link: "https://winningwithchase.com/",
        });
      case "3D":
        return setSelectedProject({
          title: "3D",
          description:
            "A personal project of mine, my 3D Portfolio illustrates a few of my talents regarding 3D rendering, animations and interactive web design. My 3D portflio was built using JavaScript and Three.js.",
          link: "https://mystifying-turing-1f75d6.netlify.app/",
        });
    }
  };


  useEffect(() => {}, [selectedProject]);

  return (
    <Box>
      <HeaderLight
        isProject="project"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      {transitionTopBanner((style, item) =>
        item ? (
          <animated.div style={style} className="item">
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
          </animated.div>
        ) : (
          ""
        )
      )}
      {transitionBottom((style, item) =>
        item ? (
          <animated.div style={style} className="item">
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
                overflow="scroll"
                width="33vw"
                height="33vh"
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
                         <TypeWriter onInit={(typewriter) => typewriter.typeString(selectedProject.description).start()} />
                    
                  </PortfolioTextStandard>
                  <PortfolioTextStandard fontFamily="Wallpoet">
                    Visit:{" "}
                    <a href={selectedProject.link} target="_blank">
                      {selectedProject.title}
                    </a>
                  </PortfolioTextStandard>
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
                  id="Alaeris"
                  onClick={(e) => {
                    setProject(e);
                    setToggleLaptopScreen(true);
                    console.log(selectedProject);
                  }}
                >
                  <BiFileBlank />
                  <PortfolioTextStandard id="Alaeris" fontFamily="Wallpoet">
                    Alaeris
                  </PortfolioTextStandard>
                </HStack>
                <HStack
                  id="Nesh"
                  onClick={(e) => {
                    setProject(e);
                    setToggleLaptopScreen(true);

                    console.log(selectedProject);
                  }}
                >
                  <BiFileBlank />
                  <PortfolioTextStandard id="Nesh" fontFamily="Wallpoet">
                    Nesh
                  </PortfolioTextStandard>
                </HStack>
                <HStack
                  id="Zipti"
                  onClick={(e) => {
                    setProject(e);
                    setToggleLaptopScreen(true);
                    console.log(selectedProject);
                  }}
                >
                  <BiFileBlank />
                  <PortfolioTextStandard id="Zipti" fontFamily="Wallpoet">
                    Zipti
                  </PortfolioTextStandard>
                </HStack>
                <HStack
                  id="3D"
                  onClick={(e) => {
                    setProject(e);
                    setToggleLaptopScreen(true);
                    console.log(selectedProject);
                  }}
                >
                  <BiFileBlank />
                  <PortfolioTextStandard id="3D" fontFamily="Wallpoet">
                    3D
                  </PortfolioTextStandard>
                </HStack>
                <HStack
                  id="WWC"
                  onClick={(e) => {
                    setProject(e);
                    setToggleLaptopScreen(true);
                    console.log(selectedProject);
                  }}
                >
                  <BiFileBlank />
                  <PortfolioTextStandard id="WWC" fontFamily="Wallpoet">
                    WWC
                  </PortfolioTextStandard>
                </HStack>
              </Grid>
            </Box>
          </animated.div>
        ) : (
          ""
        )
      )}
    </Box>
  );
};

export default Projects;
