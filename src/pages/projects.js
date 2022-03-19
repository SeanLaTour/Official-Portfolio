import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import Header from "../components/shared/header/header";
import Projects from "../components/projects/projects";

// markup
const ProjectsPage = () => {
  return (
    <ChakraProvider>
      <Header />
      <Projects />
    </ChakraProvider>
  );
};

export default ProjectsPage;
