import React, { ReactNode } from "react";
import { Box, HStack, propNames, Text } from "@chakra-ui/react";
import { PortfolioTextNav } from "../portfolio_text";
import { navigate } from "gatsby";
import { useTransition, animated } from "react-spring";

interface HeaderLightProps {
  children?: React.ReactNode;
  setIsVisible: Function;
  isVisible: boolean;
  isProject?: string;
  page: string;
  blackText?: boolean;
}

const HeaderLight: React.FC<HeaderLightProps> = (props) => {
  const determineDuration = (isProject: string) => {
    return isProject ? 0 : 2000;
  };
  const triggerExitAnimation = (url: string, page: string) => {
    if (page === url) return;
    props.setIsVisible(false);
    setTimeout(() => {
      navigate(url);
    }, 300);
  };
  const transitionHeaderLight = useTransition(props.isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: determineDuration(props.isProject) },
  });
  console.log(props.isVisible);
  return (
    <>
      {transitionHeaderLight((style, item) =>
        item ? (
          <animated.div style={style} className="item">
            <Box
              zIndex="99"
              width="100%"
              backgroundImage={`linear-gradient(to bottom, rgb(0,0,0, 1) 0%, rgb(275,275,275, 0) 10%)`}
              position="fixed"
              padding="2rem"
            >
              <HStack>
                <PortfolioTextNav
                  color={props.blackText ? "black" : "white"}
                  onClick={() => triggerExitAnimation("/", props.page)}
                  paddingRight="2rem"
                >
                  Home
                </PortfolioTextNav>
                <PortfolioTextNav
                  color={props.blackText ? "black" : "white"}
                  onClick={() => triggerExitAnimation("/about", props.page)}
                  paddingRight="2rem"
                >
                  About
                </PortfolioTextNav>
                <PortfolioTextNav
                  color={props.blackText ? "black" : "white"}
                  onClick={() => triggerExitAnimation("/projects", props.page)}
                  paddingRight="2rem"
                >
                  Projects
                </PortfolioTextNav>
                <PortfolioTextNav
                  color={props.blackText ? "black" : "white"}
                  onClick={() => triggerExitAnimation("/contact", props.page)}
                  paddingRight="2rem"
                >
                  Contact
                </PortfolioTextNav>
                <PortfolioTextNav
                  color={props.blackText ? "black" : "white"}
                  paddingRight="2rem"
                >
                  Music
                </PortfolioTextNav>
              </HStack>
            </Box>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default HeaderLight;
