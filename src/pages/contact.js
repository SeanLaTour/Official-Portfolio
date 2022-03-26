import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import Contact from "../components/contact/contact";

// markup
const ContactPage = () => {
  return (
    <ChakraProvider>
      <Contact />
    </ChakraProvider>
  );
};

export default ContactPage;
