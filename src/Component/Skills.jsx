import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Skills() {
  const mainTheme = useContext(ThemeContext);

  return (
    <Box
      bg={mainTheme.theme.bg}
      p={{ base: "5px", sm: "10px", md: "45px" }}
      id="skills"
      pb="50px"
    >
      <Box w="80%" margin="auto" borderTop="1.5px solid #00796B"></Box>
      <Box textAlign="center" margin="auto" p={{ base: "25px" }}>
        <Box p="35px">
          <Heading color="#00796B">SKILLS</Heading>
        </Box>
        <Grid
          gap={{ base: "15px", sm: "10px", md: "25px", lg: "25px" }}
          templateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
          }}
          m="auto"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "77%" }}
        >
          {/* HTML5 */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center" >
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" className="skills-card-name">
                HTML5
              </Heading>
            </Box>
          </motion.div>
          {/* CSS */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" className="skills-card-name">
                CSS
              </Heading>
            </Box>
          </motion.div>
          {/* JavaScript */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading
                size="md"
                color="#563D67"
                letterSpacing="1.1px"
                className="skills-card-name"
              >
                JavaScript
              </Heading>
            </Box>
          </motion.div>
          {/* Chakra UI */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://img.icons8.com/color/512/chakra-ui.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" className="skills-card-name">
                Chakra UI
              </Heading>
            </Box>
          </motion.div>
          {/* Redux */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" className="skills-card-name">
                Redux
              </Heading>
            </Box>
          </motion.div>
          {/* Git */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" className="skills-card-name">
                Git
              </Heading>
            </Box>
          </motion.div>
          {/* React */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" className="skills-card-name">
                React
              </Heading>
            </Box>
          </motion.div>
          {/* TypeScript */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading
                size="md"
                color="#563D67"
                letterSpacing="1.2px"
                className="skills-card-name"
              >
                TypeScript
              </Heading>
            </Box>
          </motion.div>
          {/* Express */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading
                size="md"
                color="#563D67"
                letterSpacing="1.2px"
                className="skills-card-name"
              >
                Express
              </Heading>
            </Box>
          </motion.div>
          {/* MongoDB */}
          <motion.div
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://devkico.itexto.com.br/wp-content/uploads/2013/10/mongodb-leaf-300x300.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading
                size="md"
                color="#563D67"
                letterSpacing="1.2px"
                className="skills-card-name"
              >
                MongoDB
              </Heading>
            </Box>
          </motion.div>
          {/* Node.js */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading
                size="md"
                color="#563D67"
                letterSpacing="1.2px"
                className="skills-card-name"
              >
                Node.js
              </Heading>
            </Box>
          </motion.div>
          {/* tailwind css  */}
          <motion.div
            drag
            style={{ background: "transparent" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
              background: mainTheme.theme.hover,
            }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img
                className="skills-card-img"
                style={{ width: "40%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading
                size="md"
                color="#563D67"
                letterSpacing="1.2px"
                className="skills-card-name"
              >
                Tailwind CSS
              </Heading>
            </Box>
          </motion.div>
        </Grid>
      </Box>
    </Box>
  );
}
