import {Box, Text,Button, Heading}  from '@chakra-ui/react' 
import imgOlive from './../Banner/IMG20220220130528FAce_edited-removebg-previewOlive.png'
import resume from './../Banner//Sumat-Mallick-Resume.pdf'


export default function Intro(){



    return (
    <Box id="about" className='about section'>
    <Box  pt='85px' pb='100px' bg="#2F2FA1">
        <Box w='50%' m='auto'  textAlign='center' >
            <Box mb='10px'>
            <Text fontWeight='bold' color="white" fontSize='3xl'>Hi, I am <Text fontSize='4xl' display='inline' color='#FF9398' id="user-detail-name">Sumat Mallick</Text>,</Text>
            </Box>
            <Box w='40%' m='auto'  mt="20px" >
            <img width='100%' className="home-img" style={{borderRadius:'50%'}}  src={imgOlive}/>
        </Box>
        <Box  w='60%' m='auto'  mt="50px" >
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?weight=800&size=30&pause=1000&color=F78D9C&background=FFFFFF00&center=true&vCenter=true&width=435&lines=A+Full+Stack+Web+Developer;A+Problem+Solver" alt="Typing SVG" /></a>
            </Box>

        {/* about me */}
        <br/>
        <Box  >
        <Heading color='#FF9398'>About Me</Heading>
        <Box>
            <Text id="user-detail-intro" letterSpacing='1px' color='white'>An aspiring Full Stack Web Developer with a passion for
            MERN Stack development and proficiency in HTML, CSS,
            JavaScript, React, Redux, and ChakraUI is seeking
            opportunities to work in organizations that can
            challenge their abilities as a web developer. They are
            eager to undertake challenging projects and deliver
            exceptional results</Text>
        </Box>
        <Box >
            <a href={resume} target='_blank' download="Sumat-Mallick-Resume" id="resume-link-2">
            <Button background='none' color='white' outline="1px solid #FF9398" 
            _hover={{background:'#FF9398'}}  borderRadius='0px' mt='10px' id="resume-button-2">Resume</Button>
            </a>
        </Box>
        </Box>
        </Box>
        

    </Box>
    </Box>)
}