import {Box, Text,Button, Heading, Flex, Image}  from '@chakra-ui/react' 
import imgOlive from './../Banner/IMG20220220130528FAce_edited-removebg-previewOlive.png'
import resume from './../Banner//Sumat-Mallick-Resume.pdf'
import {motion} from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export default function  Intro(){

    const theme = useContext(ThemeContext)

    return (
    <Box id="home" className='about section' background={theme.bg}>
    
    <Box  p='15px' display={{base:'none',sm:'none',md:'block'}} position='fixed' left='0' top='180' >

            {/* Email */}
            <Flex  mt='15px' justify='start' >
            <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
            <MdEmail color='#26A69A' size='25px'/>
            </motion.div>
            </Flex>
            {/* linkedin */}
            <Flex  mt='25px' >
            <Box w='10%'>
                <a target="_blank" href="https://www.linkedin.com/in/sumat-mallick-65b966227/">                       
                <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
            <AiFillLinkedin color='#26A69A' size='25px'/>
            </motion.div></a>
            </Box>
            </Flex>
            {/* github */}
            <Flex  mt='25px' >
            <Box w='10%'>
                <a target="_blank"  href="https://github.com/SumatM">                       
                <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
            <AiFillGithub color='#26A69A' size='25px'/>
            </motion.div></a>
            </Box>
            </Flex>
    </Box>

    <Box position='sticky' top='150' right='100'  bg='red' display='inline'>
        <Box p='5px 15px'  className="nav-link resume" fontWeight='bolder' color='#00796B'>
           <a href={resume} target='_blank' download="Sumat-Mallick-Resume" id="resume-link-1"  >
           <Button background='none' color='#00796B' outline="1px solid #26A69A" 
            _hover={{background:'#26A69A',color:'white'}} borderRadius='0px' mt='10px' id="resume-button-1">Resume</Button>
            </a>
          </Box>
    </Box>

    <Flex pt={{base:'10px',sm:'15px'}} pb='50px'  
         margin='auto' flexDirection={{base:'column',sm:'column',md:'column'}} w='90%'>

        <Flex w={{base:'90%',sm:'75%',md:'50%'}} p='10px' margin='auto'  flexDirection='column' justify='center' align='center' textAlign='center' >
            <Box mb='10px'   >
            <Text fontWeight='bold' color="#00796B" fontSize='2xl'>Hello, I am</Text>
            <Box mt='15px'>
            <Text fontWeight='500' fontSize='55px' display='inline' color='#00796B' id="user-detail-name" letterSpacing='2px'>Sumat Mallick</Text>
            </Box>
            <Box mt='15px' >
           <img src="https://readme-typing-svg.demolab.com?weight=400&size=25&pause=1000&color=26A69A&background=FFFFFF00&center=true&vCenter=true&width=435&lines=A+Full+Stack+Web+Developer;A+Problem+Solver" alt="Typing SVG" />
            </Box>
            </Box>
            
        </Flex>

        {/* about me */}
        
        <Flex id='about' w={{base:'90%',sm:'75%',md:'50%'}} p='10px' m='auto' borderTop="1.5px solid #00796B" flexDirection='column' justify='center' align='center' textAlign='center' >
        <Flex mt='15px' w={{base:'100%',sm:'70%',md:"80%",lg:'50%'}} >
            <motion.div  whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <Image _hover={{boxShadow: "rgba(218, 165, 32, 0.4) 0px 5px, rgba(218, 165, 32, 0.3) 0px 10px, rgba(218, 165, 32, 0.2) 0px 15px, rgba(218, 165, 32, 0.1) 0px 20px, rgba(218, 165, 32, 0.05) 0px 25px"}}  className="home-img" style={{borderRadius:'50% 50% 50% 50% / 75% 75% 25% 25%',width:'80%'}} m='auto' src={imgOlive}/>
                    </motion.div>
            </Flex>
        <Heading color='#00796B' mt='25px'>About Me</Heading>
        <Box mt='5px'>
            <Text id="user-detail-intro" letterSpacing='1px' >An aspiring Full Stack Web Developer with a passion for
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
    </Flex>
    </Box>)
}