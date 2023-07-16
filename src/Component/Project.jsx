import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ThemeContext } from "./ThemeContext";
import { useContext, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Project() {
  const mainTheme = useContext(ThemeContext);

  const boxRef = useRef(null);
  const moreProRef = useRef(null);

  function showBox() {}

  function hideBox() {}

  useEffect(() => {
    // boxRef.current.style.height = '50vh%';
  }, []);

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
          {/* 1st project  */}
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
                SPARTAN
              </Heading>
            </Box>
            <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>

            <Box w={{ base: "105%", sm: "100%" }}>
              <a
                href="https://marvelous-crack-5191.vercel.app/"
                target="_blank"
              >
                <img
                  style={{ width: "100%" }}
                  src="https://raw.githubusercontent.com/SumatM/Spartan/main/readmeImages/Screenshot%20(504).png"
                />
              </a>
            </Box>
            <Box p="15px 0">
              <Text fontWeight="bold" m="5px 0" color="#00796B">
                Charles Tyrwhitt Clone
              </Text>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Text
                color={mainTheme.theme.dText}
                className="project-description"
              >
                Spartan is a website dedicated to men's fashion, with a focus on
                formal wear. The website provides a platform for customers to
                create their own customized clothing, allowing them to tailor
                their clothing to fit their unique style and preferences.
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
                  lg:"repeat(5,1fr)"
                }}
                textAlign="center"
              >
                {/* react */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      style={{ width: "75%" }}
                    />
                  </Flex>
                </Box>
                {/* chakra Ui */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://img.icons8.com/color/512/chakra-ui.png"
                      style={{ width: "75%" }}
                    />
                  </Flex>
                </Box>
                {/* JavaScript */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                      style={{ width: "60%" }}
                    />
                  </Flex>
                </Box>
                {/* CSS */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                      style={{ width: "65%" }}
                    />
                  </Flex>
                </Box>
              </Grid>
            </Box>

            {/* access links */}
            <Box m="15px 0">
              <Flex justify="space-around">
                <Box>
                  <a target="_blank" href="https://github.com/SumatM/Spartan">
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
                  <a
                    target="_blank"
                    href="https://marvelous-crack-5191.vercel.app/"
                  >
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

          {/* 2nd project  */}

          <Box
            p="0 20px"
            textAlign="left"
            color="white"
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
                AṞIVU
              </Heading>
            </Box>
            <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>
            <Box w={{ base: "105%", sm: "100%" }}>
              <a href="https://puny-potato-4945.vercel.app/" target="_blank">
                <img src="https://raw.githubusercontent.com/SumatM/Arivu/653364fa661bbda14f9070ea6f65bd6bf0412e32/frontend/public/Screenshot%20(711).png" />
              </a>
            </Box>
            <Box p="15px 0">
              <Text
                className="project-description"
                color="#00796B"
                fontWeight="bold"
                m="5px 0"
              >
                Coursera Clone
              </Text>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Text color={mainTheme.theme.dText}>
                Arivu is an e-learning platform similar to Coursera. It allows
                students, teachers, and site administrators to engage in live
                lectures, post lectures, and perform daily activities. The
                platform includes features for banning suspicious users,
                ensuring a secure learning environment.
              </Text>
            </Box>
            {/* tech Stack */}
            <Box m="auto" className="project-tech-stack">
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
                  lg:"repeat(5,1fr)"
                }}
                textAlign="center"
              >
                {/* Node */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
                      style={{ width: "100%" }}
                    />
                  </Flex>
                </Box>
                {/* Express */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                      style={{ width: "60%" }}
                    />
                  </Flex>
                </Box>
                {/* mongoDB */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://devkico.itexto.com.br/wp-content/uploads/2013/10/mongodb-leaf-300x300.png"
                      style={{ width: "65%" }}
                    />
                  </Flex>
                </Box>
                {/* react  */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      style={{ width: "75%" }}
                    />
                  </Flex>
                </Box>
                {/* redux  */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-redux-283024.png"
                      style={{ width: "70%" }}
                    />
                  </Flex>
                </Box>
                {/* chakra Ui */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://img.icons8.com/color/512/chakra-ui.png"
                      style={{ width: "75%" }}
                    />
                  </Flex>
                </Box>
                {/* Tailwind */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                      style={{ width: "65%" }}
                    />
                  </Flex>
                </Box>
              </Grid>
            </Box>

            {/* access links */}
            <Box m="15px 0">
              <Flex justify="space-around">
                <Box>
                  <a target="_blank" href="https://github.com/SumatM/Arivu">
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
                  <a
                    target="_blank"
                    href="https://puny-potato-4945.vercel.app/"
                  >
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

          {/* 3rd project */}

          <Box
            p="0 20px"
            textAlign="left"
            color="white"
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
                INDIAN STATES
              </Heading>
            </Box>
            <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>
            <Box w={{ base: "105%", sm: "100%" }}>
              <a
                href="https://indian-states.netlify.app/index.html"
                target="_blank"
              >
                <img src="https://raw.githubusercontent.com/SumatM/Indian-States/main/UI%20images/Screenshot%20(596).png" />
              </a>
            </Box>
            <Box p="15px 0">
              <Text
                className="project-description"
                color="#00796B"
                fontWeight="bold"
                m="5px 0"
              >
                American Eagle Clone
              </Text>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Text color={mainTheme.theme.dText}>
                Indian States offers a convenient shopping experience with a
                user-friendly interface and a wide range of products from
                various brands. Customers can easily find what they are looking
                for, and can also filter products based on their preferences
                such as size, color, and price.
              </Text>
            </Box>
            {/* tech Stack */}
            <Box m="auto" className="project-tech-stack">
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
                  lg:"repeat(5,1fr)"
                }}
                textAlign="center"
              >
                {/* HTML */}
                <Box p="10px">
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
                      style={{ width: "70%" }}
                    />
                  </Flex>
                </Box>
                {/* JavaScript */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                      style={{ width: "60%" }}
                    />
                  </Flex>
                </Box>
                {/* CSS */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                      style={{ width: "65%" }}
                    />
                  </Flex>
                </Box>
              </Grid>
            </Box>

            {/* access links */}
            <Box m="15px 0">
              <Flex justify="space-around">
                <Box>
                  <a
                    target="_blank"
                    href="https://github.com/SumatM/Indian-States"
                  >
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
                  <a
                    target="_blank"
                    href="https://indian-states.netlify.app/index.html"
                  >
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
          {/* 4th project */}

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
                DIAMONDLAND
              </Heading>
            </Box>
            <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>
            <Box w={{ base: "105%", sm: "100%" }}>
              <a
                href="https://diamond-land.netlify.app/index.html"
                target="_blank"
              >
                <img
                  style={{ width: "100%" }}
                  src="https://raw.githubusercontent.com/chaudhari014/legit-building-8885/main/banner/Screenshot%20(672).png"
                />
              </a>
            </Box>

            <Box p="15px 0">
              <Text fontWeight="bold" m="5px 0" color="#00796B">
                CaratLane Clone
              </Text>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Text
                color={mainTheme.theme.dText}
                className="project-description"
              >
                Diamondland is an e-commerce website specializing in jewelry,
                offering customers a wide range of high-quality jewelry at
                affordable prices. They also provide personalized gift options
                for your loved ones.
              </Text>
            </Box>
            {/* tech Stack */}
            <Box m="auto" className="project-tech-stack">
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
                  lg:"repeat(5,1fr)"
                }}
                textAlign="center"
              >
                {/* HTML */}
                <Box p="10px">
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
                      style={{ width: "70%" }}
                    />
                  </Flex>
                </Box>
                {/* JavaScript */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                      style={{ width: "60%" }}
                    />
                  </Flex>
                </Box>
                {/* CSS */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                      style={{ width: "65%" }}
                    />
                  </Flex>
                </Box>
              </Grid>
            </Box>

            {/* access links */}
            <Box m="15px 0">
              <Flex justify="space-around">
                <Box>
                  <a
                    target="_blank"
                    href="https://github.com/chaudhari014/legit-building-8885"
                  >
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
                  <a
                    target="_blank"
                    href="https://diamond-land.netlify.app/index.html"
                  >
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
          {/* 5ht project  */}
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
                SPENDWISER
              </Heading>
            </Box>
            <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>
            <Box w={{ base: "105%", sm: "100%" }}>
              <a
                href="https://hilarious-wood-568-fw21-0275-updated1.vercel.app/"
                target="_blank"
              >
                <img
                  style={{ width: "100%" }}
                  src="https://user-images.githubusercontent.com/112808279/238118882-e4441c6a-8b1e-418d-b228-7132e40a40d4.png"
                />
              </a>
            </Box>

            <Box p="15px 0">
              <Text fontWeight="bold" m="5px 0" color="#00796B">
                Money Manager
              </Text>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Text
                color={mainTheme.theme.dText}
                className="project-description"
              >
                SpendWiser is an invaluable tool for anyone looking to manage
                their monthly budget and keep track of their spending. With its
                user-friendly interface and comprehensive features, SpendWiser
                makes it easy to stay on top of your finances and ensure that
                you are meeting your financial goals.
              </Text>
            </Box>
            {/* tech Stack */}
            <Box m="auto" className="project-tech-stack">
              <Heading size="sm" color="#00796B">
                Tech Stack
              </Heading>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Grid
                gap="25px"
                templateColumns={{
                  base: "repeat(4,1fr)",
                  sm: "repeat(4,1fr)",
                  md: "repeat(4,1fr)",
                  lg:"repeat(5,1fr)"
                }}
                textAlign="center"
                p="15px 0"
                placeItems="center"
              >
                {/* react */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      style={{ width: "75%" }}
                    />
                  </Flex>
                </Box>
                {/* chakra Ui */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://img.icons8.com/color/512/chakra-ui.png"
                      style={{ width: "75%" }}
                    />
                  </Flex>
                </Box>
                {/* redux */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-redux-283024.png"
                      style={{ width: "80%" }}
                    />
                  </Flex>
                </Box>
                {/* chart js */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://www.richardwestenra.com/painting-with-data-talk/img/libs/recharts.png"
                      style={{ width: "100%" }}
                    />
                  </Flex>
                </Box>
              </Grid>
            </Box>

            {/* access links */}
            <Box m="15px 0">
              <Flex justify="space-around">
                <Box>
                  <a
                    target="_blank"
                    href="https://github.com/SumatM/SpendWiser"
                  >
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
                  <a
                    target="_blank"
                    href="https://hilarious-wood-568-fw21-0275-updated1.vercel.app/"
                  >
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
          {/* 6th project text to speech  */}
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
                TEXT TO SPEECH
              </Heading>
            </Box>
            <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>
            <Box w={{ base: "105%", sm: "100%" }}>
              <a
                href="https://text-to-speech-sumat.netlify.app/"
                target="_blank"
              >
                <img
                  style={{ width: "100%" }}
                  src="https://raw.githubusercontent.com/SumatM/Text-To-Speech/main/Screenshot%20(712).png"
                />
              </a>
            </Box>

            <Box p="15px 0">
              <Text fontWeight="bold" m="5px 0" color="#00796B">
                JavaScript Speech Synthesis
              </Text>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Text
                color={mainTheme.theme.dText}
                className="project-description"
              >
                WebPage that converts written text into spoken words. Utilized
                natural language processing techniques to analyze and interpret
                the text, generating synthesized speech output.
              </Text>
            </Box>
            {/* tech Stack */}
            <Box m="auto" className="project-tech-stack">
              <Heading size="sm" color="#00796B">
                Tech Stack
              </Heading>
              <Box w="60%" borderTop="1.5px solid #00796B"></Box>
              <Grid
                gap="25px"
                templateColumns={{
                  base: "repeat(4,1fr)",
                  sm: "repeat(4,1fr)",
                  md: "repeat(4,1fr)",
                  lg:"repeat(5,1fr)"
                }}
                textAlign="center"
                p="15px 0"
                placeItems="center"
              >
                {/* JavaScript */}
                <Box>
                  <Flex justifyContent="center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                      style={{ width: "60%" }}
                    />
                  </Flex>
                </Box>
              </Grid>
            </Box>

            {/* access links */}
            <Box m="15px 0">
              <Flex justify="space-around">
                <Box>
                  <a
                    target="_blank"
                    href="https://github.com/SumatM/Text-To-Speech"
                  >
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
                  <a
                    target="_blank"
                    href="https://text-to-speech-sumat.netlify.app/"
                  >
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
        </Grid>
      </Box>
    </Box>
  );
}
