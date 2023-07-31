import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,

} from "@chakra-ui/react";
import { ThemeContext } from "./ThemeContext";
import { useContext, useEffect, useRef } from "react";
import { ProjectList } from "../db/projectdb";
import { Link } from "react-router-dom";

export default function Project() {
  const mainTheme = useContext(ThemeContext);

  const boxRef = useRef(null);

  return (
    <Box
      bg={mainTheme.theme.bg}
      p={{ base: "15px", sm: "20px", md: "45px" }}
      id="projects"
    >
      {/* bar for decoration  */}
      <Box w="80%" margin="auto" borderTop="1.5px solid #00796B">
        {/* box 1 for main projects  */}
      </Box>
      <Box m="auto" textAlign="center">
        <Box pt="55px">
          <Heading color="#00796B" size="2xl">
            PROJECTS
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap=" 20px 40px"
          mt="45px"
          ref={boxRef}
        >
          {ProjectList?.map((project) => {
            return (
              <Box
                p="0 20px"
                textAlign="left"
                className="project-card"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                _hover={{ background: mainTheme.theme.hover }}
              >
                <Box>
                  <Heading
                    p="15px 0"
                    size="lg"
                    color="#00796B"
                    className="project-title"
                  >
                    {project.heading}
                  </Heading>
                </Box>
                <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>

                <Box w={{ base: "105%", sm: "100%" }}>
                  <Link to={project.liveLink} target="_blank">
                    <img style={{ width: "100%" }} src={project.img} />
                  </Link>
                </Box>
                <Box p="15px 0">
                  <Text fontWeight="bold" m="5px 0" color="#00796B">
                    {project.title}
                  </Text>
                  <Box w="60%" borderTop="1.5px solid #00796B"></Box>
                  <Text
                    color={mainTheme.theme.dText}
                    className="project-description"
                  >
                    {project.description}
                  </Text>
                </Box>
                {/* tech Stack */}
                <Box className="project-tech-stack">
                  <Heading size="sm" color="#00796B">
                    Tech Stack
                  </Heading>
                  <Box w="60%" borderTop="1.5px solid #00796B"></Box>
                  <Grid
                    p="15px 0"
                    gap="15px"
                    templateColumns={{
                      base: "repeat(4,1fr)",
                      sm: "repeat(4,1fr)",
                      md: "repeat(4,1fr)",
                      lg: "repeat(5,1fr)",
                    }}
                    textAlign="center"
                  >
                    {project.techStack?.map((tech) => {
                      return (
                        <Box>
                          <Flex justifyContent="center">
                            <img src={tech.img} style={{ width: tech.wid }} />
                          </Flex>
                        </Box>
                      );
                    })}
                  </Grid>
                </Box>

                {/* access links */}
                <Box m="15px 0">
                  <Flex justify="space-around">
                    <Box>
                      <a target="_blank" href={project.gitLink}>
                        <Button
                          className="project-github-link"
                          background="none"
                          color="#00796B"
                          outline="1px solid #00796B"
                          _hover={{ background: "#26A69A", color: "white" }}
                          borderRadius="0px"
                          mt="10px"
                        >
                          GitHub
                        </Button>
                      </a>
                    </Box>
                    <Box>
                      <a target="_blank" href={project.liveLink}>
                        <Button
                          className="project-deployed-link"
                          background="none"
                          color="#00796B"
                          outline="1px solid #00796B"
                          _hover={{ background: "#26A69A", color: "white" }}
                          mt="10px"
                          borderRadius="0"
                        >
                          Live Demo
                        </Button>
                      </a>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
