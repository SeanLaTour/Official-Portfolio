import React, { ReactNode } from "react";
import { Box, HStack, propNames, Text } from "@chakra-ui/react";
import { PortfolioTextNav } from "../portfolio_text";
import { navigate } from "gatsby";
import { useTransition, animated } from "react-spring";

interface HeaderLightProps {
  children?: React.ReactNode;
  setIsVisible: Function;
  isVisible: boolean;
}

const HeaderLight: React.FC<HeaderLightProps> = (props) => {
  const triggerExitAnimation = (url: string) => {
    props.setIsVisible(false);
    setTimeout(() => {
      navigate(url);
    }, 300);
  };
  const transitionHeaderLight = useTransition(props.isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  });
  console.log(props.isVisible);
  return (
    <>
      <Box
        zIndex="2"
        width="100%"
        backgroundImage={`linear-gradient(to bottom, rgb(0,0,0, 1) 0%, rgb(275,275,275, 0) 10%)`}
        position="fixed"
        padding="2rem"
      >
        <HStack>
          <PortfolioTextNav
            color="white"
            onClick={() => triggerExitAnimation("/")}
            paddingRight="2rem"
          >
            Home
          </PortfolioTextNav>
          <PortfolioTextNav
            color="white"
            onClick={() => triggerExitAnimation("/about")}
            paddingRight="2rem"
          >
            About
          </PortfolioTextNav>
          <PortfolioTextNav
            color="white"
            onClick={() => triggerExitAnimation("/projects")}
            paddingRight="2rem"
          >
            Projects
          </PortfolioTextNav>
          <PortfolioTextNav
            color="white"
            onClick={() => triggerExitAnimation("/contact")}
            paddingRight="2rem"
          >
            Contact
          </PortfolioTextNav>
          <PortfolioTextNav color="white" paddingRight="2rem">
            Music
          </PortfolioTextNav>
        </HStack>
      </Box>
    </>
  );
};

export default HeaderLight;
