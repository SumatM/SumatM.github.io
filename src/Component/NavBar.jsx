import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Button,
  Spacer
} from '@chakra-ui/react';
import { useRef } from 'react';
import logo from './sumat-low-resolution-logo-color-on-transparent-background.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import resume from './../Banner//Sumat-Mallick-Resume.pdf';
import { Link as ScrollLink } from 'react-scroll';


export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      const scrollPosition = window.scrollY;
     // console.log(scrollPosition,'scroll',contactSection.offsetTop)

      if (scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      } else if (scrollPosition >= projectsSection.offsetTop) {
        setActiveSection('projects');
      } else if (scrollPosition >= skillsSection.offsetTop) {
        setActiveSection('skills');
      } else if (scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Box id="nav-menu">
      <Box
        backdropFilter="auto"
        backdropBlur="10px"
        pt="5px"
        pb="10px"
        top="5px"
        position="fixed"
        left="20%"
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'inline-block' }}
        zIndex="99"
        w="60%"
        m="auto"
        border="1px solid #00796B"
        borderRadius="25px"
      >
        <Flex w="70%" justify="space-between" letterSpacing="1px" m="auto">
          <Box p="5px 15px" _hover={{ color: '#4DB6AC' }} fontWeight="bolder" color={activeSection === 'home' ? '#4DB6AC' : '#00796B'}>
            <ScrollLink to="home" smooth={true} duration={500} onClick={onClose}>
              <Text className="nav-link home">HOME</Text>
            </ScrollLink>
          </Box>
          <Box p="5px 15px" _hover={{ color: '#4DB6AC' }} fontWeight="bolder" color={activeSection === 'about' ? '#4DB6AC' : '#00796B'}>
            <ScrollLink to="about" smooth={true} duration={500} onClick={onClose}>
              <Text className="nav-link about">ABOUT</Text>
            </ScrollLink>
          </Box>
          <Box p="5px 15px" _hover={{ color: '#4DB6AC' }} fontWeight="bolder" color={activeSection === 'skills' ? '#4DB6AC' : '#00796B'}>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={onClose}>
              <Text className="nav-link skills">SKILLS</Text>
            </ScrollLink>
          </Box>
          <Box p="5px 15px" _hover={{ color: '#4DB6AC' }} fontWeight="bolder" color={activeSection === 'projects' ? '#4DB6AC' : '#00796B'}>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={onClose}>
              <Text className="nav-link projects">PROJECTS</Text>
            </ScrollLink>
          </Box>
          <Box p="5px 15px" _hover={{ color: '#4DB6AC' }} fontWeight="bolder" color={activeSection === 'contact' ? '#4DB6AC' : '#00796B'}>
            <ScrollLink to="contact" smooth={true} duration={500} onClick={onClose}>
              <Text className="nav-link contact">CONTACT</Text>
            </ScrollLink>
          </Box>
        </Flex>
      </Box>
      <Box
        backdropFilter="auto"
        backdropBlur="10px"
        pt="5px"
        pb="15px"
        top="0px"
        position="fixed"
        w="100%"
        display={{ base: 'block', sm: 'block', md: 'block', lg: 'none' }}
      >
        <Flex w="92%" m="auto" textAlign="center" justify="right" align="center" mt="10px" >
          <Box mr="10px" ref={btnRef} onClick={onOpen}>
            <HamburgerIcon color="#00796B" fontSize="35px" />
          </Box>
        </Flex>
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt={{ base: '12%', sm: '9%', md: '8%' }} backdropFilter="auto" background="" backdropBlur="10px" pt="5px">
          <DrawerBody>
            <Box p="5px 15px" bg="#26A69A" color="white" fontWeight="bolder" m="10px 0">
              <ScrollLink to="home" smooth={true} duration={500} onClick={onClose}>
                <Text>HOME</Text>
              </ScrollLink>
            </Box>
            <Box p="5px 15px" bg="#26A69A" color="white" fontWeight="bolder" m="10px 0">
              <ScrollLink to="about" smooth={true} duration={500} onClick={onClose}>
                <Text>ABOUT</Text>
              </ScrollLink>
            </Box>
            <Box p="5px 15px" bg="#26A69A" color="white" fontWeight="bolder" m="10px 0">
              <ScrollLink to="skills" smooth={true} duration={500} onClick={onClose}>
                <Text>SKILLS</Text>
              </ScrollLink>
            </Box>
            <Box p="5px 15px" bg="#26A69A" color="white" fontWeight="bolder" m="10px 0">
              <ScrollLink to="projects" smooth={true} duration={500} onClick={onClose}>
                <Text>PROJECTS</Text>
              </ScrollLink>
            </Box>
            <Box p="5px 15px" bg="#26A69A" color="white" fontWeight="bolder" m="10px 0">
              <ScrollLink to="contact" smooth={true} duration={500} onClick={onClose}>
                <Text>CONTACT</Text>
              </ScrollLink>
            </Box>
            <Box p="5px 15px" className="nav-link resume" fontWeight="bolder" color="white">
              <a href={resume} target="_blank" rel="noopener noreferrer" download="Sumat-Mallick-Resume" id="resume-link-1">
                <Button background="none" color="white" outline="1px solid #00796B" _hover={{ background: '#26A69A' }} borderRadius="0px" mt="10px"  id="resume-button-1">
                  Resume
                </Button>
              </a>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
