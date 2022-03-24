import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import About from "../components/about/about";

// markup
const AboutPage = () => {
  return (
    <ChakraProvider>
      <About />
    </ChakraProvider>
  );
};

export default AboutPage;
