import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import LandingPage from "../components/landing_page/landing_page";
import Header from "../components/shared/header/header";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <Header />
      <LandingPage />
    </ChakraProvider>
  );
};

export default IndexPage;
