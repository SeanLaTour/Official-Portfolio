import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import HeaderLight from "../components/shared/header/header_light";
import Projects from "../components/projects/projects";

// markup
const ProjectsPage = () => {
  return (
    <ChakraProvider>
      <HeaderLight />
      <Projects />
    </ChakraProvider>
  );
};

export default ProjectsPage;
