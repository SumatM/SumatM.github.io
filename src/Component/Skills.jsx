import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Skills() {
  const theme = useContext(ThemeContext);

  return (
    <Box bg={theme.bg} p={{ base: "5px", sm: "10px", md: "45px" }} id="skills" pb="50px">
      <Box w='80%'  margin="auto" borderTop="1.5px solid #00796B"></Box>
      <Box textAlign="center" margin="auto" p={{ base: "25px" }}>
        <Box p="35px">
          <Heading color="#00796B">SKILLS</Heading>
        </Box>
        <Grid
          gap={{ base: "15px", sm: "10px", md: "25px", lg: "25px" }}
          templateColumns={{ base: "repeat(2,1fr)", sm: "repeat(3,1fr)", md: "repeat(4,1fr)", lg: "repeat(5,1fr)" }}
          m='auto'
          w={{base:'100%',sm:'100%',md:'100%',lg:'77%'}}
        >
          {/* HTML5 */}
          <motion.div
            drag
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
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
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />
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
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" letterSpacing="1.1px" className="skills-card-name">
                JavaScript
              </Heading>
            </Box>
          </motion.div>
          {/* Chakra UI */}
          <motion.div
            drag
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://img.icons8.com/color/512/chakra-ui.png" />
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
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.png" />
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
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
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
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png" />
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
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" letterSpacing="1.2px" className="skills-card-name">
                TypeScript
              </Heading>
            </Box>
          </motion.div>
          {/* Express */}
          <motion.div
            drag
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-Z4-b5_nW5k3bO7rgZ09JvnHZTA0I_FHLu4OscCKDv4MDEp6B" />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" letterSpacing="1.2px" className="skills-card-name">
                Express
              </Heading>
            </Box>
          </motion.div>
          {/* MongoDB */}
          <motion.div
            drag
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://devkico.itexto.com.br/wp-content/uploads/2013/10/mongodb-leaf-300x300.png" />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" letterSpacing="1.2px" className="skills-card-name">
                MongoDB
              </Heading>
            </Box>
          </motion.div>
          {/* Node.js */}
          <motion.div
            drag
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
            className="skills-card"
          >
            <Flex justifyContent="center">
              <img className="skills-card-img" style={{ width: "40%" }} src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png" />
            </Flex>
            <Box alignContent="center" p="15px">
              <Heading size="md" color="#563D67" letterSpacing="1.2px" className="skills-card-name">
                Node.js
              </Heading>
            </Box>
          </motion.div>
        </Grid>
      </Box>
    </Box>
  );
}
