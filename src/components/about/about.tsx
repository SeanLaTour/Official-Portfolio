import { Box, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackgroundImage from "../../images/paintstrokebackgroundleft.webp";
import ProfilePhotoTwo from "../../images/seanprofilepagephoto2.png";
import HeaderLight from "../shared/header/header_light";
import {
  PortfolioTextStandard,
  PortfolioTextSubTitle,
  PortfolioTextTitle,
} from "../shared/portfolio_text";
import { useTransition, animated } from "react-spring";

const About: React.FC = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const transitionPhoto = useTransition(isVisible, {
    from: { x: -400, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 400, y: 0, opacity: 0 },
  });

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  });

  return (
    <>
      <HeaderLight setIsVisible={setIsVisible} isVisible={isVisible} />
      {transitionPhoto((style, item) => (
        <animated.div style={style} className="item">
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
                I am a full stack web developer in the San Diego area. I
                specialize in Javascript and Python frameworks such as Gatsby,
                React, Chakra, FashAPI, and Flask. I've spearheaded the building
                and design of a variety of web apps utilizing concepts from
                social media, payments, image and video handling, conversation
                flows, responsive designs, APIs, 3rd party integrations, 3D
                layouts and animation on both the front and backend levels of
                web design.
              </PortfolioTextStandard>
              <PortfolioTextStandard paddingTop="2rem" color="white">
                -Sean La Tourette{" "}
              </PortfolioTextStandard>
            </VStack>
            <Image
              position="fixed"
              right="0"
              bottom="0"
              src={ProfilePhotoTwo}
            />{" "}
          </Box>
        </animated.div>
      ))}
    </>
  );
};

export default About;
