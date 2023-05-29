import { Box, Text, Button, Flex, Image, Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import imgOlive from './../Banner/IMG20220220130528FAce_edited-removebg-previewOlive.png';
import resume from './../Banner/Sumat-Mallick-Resume.pdf';
import {FcSettings} from 'react-icons/fc'

export default function Intro() {
  const theme = useContext(ThemeContext);

  function handleDark(){
    theme.handleTheme("dark");
  }
  function handleLight(){
    theme.handleTheme("light");
  }

  function handleBlue(){
    theme.handleTheme("blue");
  }

  function handleGreen(){
    theme.handleTheme("green");
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Box
        id="home"
        className="about section"
        background={theme && theme.bg}
        p="15px"
      >
      
        
        <Popover>
      <PopoverTrigger>
      <Box position='fixed' right={{base:'31px',sm:'42px',md:'50px',lg:'4'}} top={{base:'65px',sm:'65px',md:'60px',lg:'3'}}>
        <FcSettings size='30px' color='#26A69A'/>
        </Box>
      </PopoverTrigger>
      <PopoverContent mr='20px' mt='20px' p={3} w='250px' bg="gray.200" border='1px solid #00796B'>
        <PopoverBody>
          <Flex justify='space-between'>
      {/* light theme  */}
            <Box border='1px solid #00796B' borderRadius='50%' onClick={handleLight}>
            <Box  bg='linear-gradient(90deg, rgba(202,198,198,0) 0%, rgba(223,225,224,1) 0%, rgba(70,255,125,0.14066876750700286) 33%, rgba(0,254,255,0.3339460784313726) 79%)' borderRadius='50%' m='3px' width='30px' height='30px'></Box>
            </Box>
      {/* dark theme */}
            <Box border='1px solid #00796B' borderRadius='50%' onClick={handleDark}>
            <Box  bg='black' borderRadius='50%' m='3px' width='30px' height='30px'></Box>
            </Box>
        {/* blue theme  */}
            <Box border='1px solid #08105B' borderRadius='50%' onClick={handleBlue}>
            <Box  bg='#242582' borderRadius='50%' m='3px' width='30px' height='30px'></Box>
            </Box>
      {/* green theme  */}
            <Box border='1px solid #00796B' borderRadius='50%' onClick={handleGreen}>
            <Box  bg='#D4A59B' borderRadius='50%' m='3px' width='30px' height='30px'></Box>
            </Box>

            
            
          </Flex>
        </PopoverBody>
      </PopoverContent>
      
    </Popover>


        <Box p="15px" display={{ base: 'none', sm: 'none', md: 'block' }} position="fixed" left="0" top="35%">
          <motion.div variants={item}>
            <Flex mt="15px" justify="start">
              <MdEmail color="#26A69A" size="25px" />
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a target="_blank" href="https://www.linkedin.com/in/sumat-mallick-65b966227/">
                  <AiFillLinkedin color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a target="_blank" href="https://github.com/SumatM">
                  <AiFillGithub color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>
        </Box>

        <Box position="fixed" top={{ base: '65%' }} display="inline">
          <Box className="nav-link resume" fontWeight="bolder" color="#00796B">
            <a href={resume} target="_blank" download="Sumat-Mallick-Resume" id="resume-link-1">
              <Button
                background="#00796B"
                color="white"
                outline="1px solid #26A69A"
                _hover={{ background: 'none', color: '#26A69A' }}
                borderRadius="0px"
                mt="10px"
                id="resume-button-1"
              >
                Resume
              </Button>
            </a>
          </Box>
        </Box>

        <Flex
          pt={{ base: '55px', sm: '45px', md: '55px' }}
          pb="50px"
          margin="auto"
          flexDirection={{ base: 'column', sm: 'column', md: 'column' }}
          w="90%"
        >
          <Flex w={{ base: '90%', sm: '75%', md: '50%' }} p="10px" margin="auto" flexDirection="column" justify="center" align="center" textAlign="center">
            <motion.div variants={item}>
              <Box mb="10px">
                <Text fontWeight="bold" color="#00796B" fontSize="2xl">
                  Hello, I am
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box mt="15px">
                <Text fontWeight="500" fontSize="55px" display="inline" color="#00796B" id="user-detail-name" letterSpacing="2px">
                  Sumat Mallick
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box mt="15px">
                <img src="https://readme-typing-svg.demolab.com?weight=400&size=25&pause=1000&color=26A69A&background=FFFFFF00&center=true&vCenter=true&width=435&lines=A+Full+Stack+Web+Developer;A+Problem+Solver" alt="Typing SVG" />
              </Box>
            </motion.div>
          </Flex>

          {/* About Me */}
        </Flex>
      </Box>
    </motion.div>
  );
}
