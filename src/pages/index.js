import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import LandingPage from "../components/landing_page/landing_page";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <LandingPage />
    </ChakraProvider>
  );
};

export default IndexPage;
