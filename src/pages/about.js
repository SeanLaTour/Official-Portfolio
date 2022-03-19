import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import About from "../components/about/about";
import HeaderLight from "../components/shared/header/header_light";

// markup
const AboutPage = () => {
  return (
    <ChakraProvider>
      <HeaderLight />
      <About />
    </ChakraProvider>
  );
};

export default AboutPage;
