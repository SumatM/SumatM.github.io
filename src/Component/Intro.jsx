import {Box, Text,Button, Heading, Flex, Image}  from '@chakra-ui/react' 
import imgOlive from './../Banner/IMG20220220130528FAce_edited-removebg-previewOlive.png'
import resume from './../Banner//Sumat-Mallick-Resume.pdf'
import {motion} from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

import { MdEmail } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export default function  Intro(){

    const theme = useContext(ThemeContext)

    return (
    <Box id="home" className='about section' background={theme.bg}>
    
    <Box  p='15px' display={{base:'none',sm:'none',md:'block'}} position='fixed' left='0' top='35%' >

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

    <Box position='fixed' top={{base:'62%'}} display='inline'>
        <Box p='5px 15px'  className="nav-link resume" fontWeight='bolder' color='#00796B'>
           <a href={resume} target='_blank' download="Sumat-Mallick-Resume" id="resume-link-1"  >
           <Button background='#00796B' color='white' outline="1px solid #26A69A" 
            _hover={{background:'none',color:'#26A69A'}} borderRadius='0px' mt='10px' id="resume-button-1">Resume</Button>
            </a>
          </Box>
    </Box>

    <Flex pt={{base:'55px',sm:'45px',md:'55px'}} pb='50px'  
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
    </Flex>
    </Box>)
}