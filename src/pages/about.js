import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import LandingPage from "../components/landing_page/landing_page";
import Header from "../components/shared/header/header";
import About from "../components/about/about";

// markup
const AboutPage = () => {
  return (
    <ChakraProvider>
      <Header />
      <About />
    </ChakraProvider>
  );
};

export default AboutPage;
