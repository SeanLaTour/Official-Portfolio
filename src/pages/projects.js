import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import "../index.css";
import Projects from "../components/projects/projects";

// markup
const ProjectsPage = () => {
  return (
    <ChakraProvider>
      <Projects />
    </ChakraProvider>
  );
};

export default ProjectsPage;
