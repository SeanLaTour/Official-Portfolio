import React, { ReactNode } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { PortfolioTextNav } from "../portfolio_text";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Box position="fixed" padding="2rem">
      <HStack>
        <PortfolioTextNav paddingRight="2rem">About</PortfolioTextNav>
        <PortfolioTextNav paddingRight="2rem">Projects</PortfolioTextNav>
        <PortfolioTextNav paddingRight="2rem">Contact</PortfolioTextNav>
        <PortfolioTextNav paddingRight="2rem">Music</PortfolioTextNav>
      </HStack>
    </Box>
  );
};

export default Header;
