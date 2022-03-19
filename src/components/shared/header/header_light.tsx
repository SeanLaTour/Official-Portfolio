import React, { ReactNode } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { PortfolioTextNav } from "../portfolio_text";
import { navigate } from "gatsby";

interface HeaderLightProps {
  children: React.ReactNode;
}

const HeaderLight: React.FC<HeaderLightProps> = (props) => {
  return (
    <Box
      width="100%"
      backgroundImage={`linear-gradient(to bottom, rgb(0,0,0, 1) 0%, rgb(275,275,275, 0) 10%)`}
      position="fixed"
      padding="2rem"
    >
      <HStack>
        <PortfolioTextNav
          color="white"
          onClick={() => navigate("/")}
          paddingRight="2rem"
        >
          Home
        </PortfolioTextNav>
        <PortfolioTextNav
          color="white"
          onClick={() => navigate("/about")}
          paddingRight="2rem"
        >
          About
        </PortfolioTextNav>
        <PortfolioTextNav
          color="white"
          onClick={() => navigate("/projects")}
          paddingRight="2rem"
        >
          Projects
        </PortfolioTextNav>
        <PortfolioTextNav
          color="white"
          onClick={() => navigate("/contact")}
          paddingRight="2rem"
        >
          Contact
        </PortfolioTextNav>
        <PortfolioTextNav color="white" paddingRight="2rem">
          Music
        </PortfolioTextNav>
      </HStack>
    </Box>
  );
};

export default HeaderLight;
