import React, { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface PortfolioTextProps {
  children: React.ReactNode;
}

export const PortfolioTextTitle: React.FC<PortfolioTextProps> = (props) => {
  return (
    <Text color="black" fontSize="3rem" fontFamily="RockSalt" {...props}>
      {props.children}
    </Text>
  );
};

export const PortfolioTextSubTitle: React.FC<PortfolioTextProps> = (props) => {
  return (
    <Text color="black" fontSize="1.5rem" fontFamily="RockSalt" {...props}>
      {props.children}
    </Text>
  );
};

export const PortfolioTextNav: React.FC<PortfolioTextProps> = (props) => {
  return (
    <Text color="black" fontSize="1rem" fontFamily="RockSalt" {...props}>
      {props.children}
    </Text>
  );
};

export const PortfolioTextStandard: React.FC<PortfolioTextProps> = (props) => {
  return (
    <Text
      lineHeight="200%"
      color="black"
      fontSize="1rem"
      fontFamily="RockSalt"
      {...props}
    >
      {props.children}
    </Text>
  );
};
