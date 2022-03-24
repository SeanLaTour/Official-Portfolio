import React, { ReactNode } from "react";
import { Box, HStack, propNames, Text } from "@chakra-ui/react";
import { PortfolioTextNav } from "../portfolio_text";
import { navigate } from "gatsby";
import { useTransition, animated } from "react-spring";

interface HeaderProps {
  children?: React.ReactNode;
  setIsVisible: Function;
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const triggerExitAnimation = (url: string) => {
    props.setIsVisible(false);
    setTimeout(() => {
      navigate(url);
    }, 300);
  };
  const transitionHeader = useTransition(props.isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <>
      {transitionHeader((style, item) =>
        props.isVisible ? (
          <animated.div style={style} className="item">
            <Box
              zIndex="2"
              width="100%"
              backgroundImage={`linear-gradient(to bottom, rgb(0,0,0, 1) 0%, rgb(275,275,275, 0) 10%)`}
              position="fixed"
              padding="2rem"
            >
              <HStack>
                <PortfolioTextNav
                  onClick={() => triggerExitAnimation("/")}
                  paddingRight="2rem"
                >
                  Home
                </PortfolioTextNav>
                <PortfolioTextNav
                  onClick={() => triggerExitAnimation("/about")}
                  paddingRight="2rem"
                >
                  About
                </PortfolioTextNav>
                <PortfolioTextNav
                  onClick={() => triggerExitAnimation("/projects")}
                  paddingRight="2rem"
                >
                  Projects
                </PortfolioTextNav>
                <PortfolioTextNav
                  onClick={() => triggerExitAnimation("/contact")}
                  paddingRight="2rem"
                >
                  Contact
                </PortfolioTextNav>
                <PortfolioTextNav paddingRight="2rem">Music</PortfolioTextNav>
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

export default Header;
