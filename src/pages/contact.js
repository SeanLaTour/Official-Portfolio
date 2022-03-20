import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import HeaderLight from "../components/shared/header/header_light";
import Contact from "../components/contact/contact";

// markup
const ContactPage = () => {
  return (
    <ChakraProvider>
      <HeaderLight />
      <Contact />
    </ChakraProvider>
  );
};

export default ContactPage;
