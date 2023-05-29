import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgOlive from './../Banner/IMG20220220130528FAce_edited-removebg-previewOlive.png'
import resume from './../Banner//Sumat-Mallick-Resume.pdf'
import {motion} from 'framer-motion'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export default function About(){

    const theme = useContext(ThemeContext);
   // console.log(theme.theme)
    return (
        <Box  >
            <Flex id='about' className='section about' w={{base:'90%',sm:'75%',md:'50%'}} p='10px' m='auto' borderTop="1.5px solid #00796B" flexDirection='column' justify='center' align='center' textAlign='center' >
        <Flex mt='55px' w={{base:'100%',sm:'70%',md:"80%",lg:'50%'}} >
            <motion.div  whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <Image _hover={{boxShadow: "rgba(218, 165, 32, 0.4) 0px 5px, rgba(218, 165, 32, 0.3) 0px 10px, rgba(218, 165, 32, 0.2) 0px 15px, rgba(218, 165, 32, 0.1) 0px 20px, rgba(218, 165, 32, 0.05) 0px 25px"}}  className="home-img" style={{borderRadius:'50% 50% 50% 50% / 75% 75% 25% 25%',width:'80%'}} m='auto' src={imgOlive}/>
                    </motion.div>
            </Flex>
        <Heading color='#00796B' mt='25px'>About Me</Heading>
        <Box mt='5px'>
            <Text id="user-detail-intro" letterSpacing='1px' color={theme.theme.dText}>An aspiring Full Stack Web Developer with a passion for
            MERN Stack development and proficiency in HTML, CSS,
            JavaScript, React, Redux, and ChakraUI is seeking
            opportunities to work in organizations that can
            challenge their abilities as a web developer. They are
            eager to undertake challenging projects and deliver
            exceptional results</Text>
        </Box>
        <Box p='5px 15px' className="nav-link resume" fontWeight='bolder' color='white'>
           <a href={resume} target='_blank' download="Sumat-Mallick-Resume" id="resume-link-2">
           <Button background='none' color='#26A69A' outline="1px solid #26A69A" 
            _hover={{background:'#26A69A',color:'white'}} borderRadius='0px' mt='10px' id="resume-button-2">Resume</Button>
            </a>
          </Box>
        </Flex>
        </Box>
    )
}