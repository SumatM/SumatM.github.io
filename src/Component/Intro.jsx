import {Box, Text,Button}  from '@chakra-ui/react' 
import imgOlive from './../Banner/IMG20220220130528FAce_edited-removebg-previewOlive.png'
import { useEffect, useRef } from 'react'

export default function Intro(){



    return (
    <Box id='about' className='about section'>
    <Box  pt='75px' pb='100px' bg="#2F2FA1">
        <Box w='50%' m='auto'  textAlign='center'>
            <Box mb='10px'>
            <Text fontWeight='bold' color="white" fontSize='3xl'>Hi, I am <Text fontSize='4xl' display='inline' color='#FF9398' id="user-detail-name">Sumat Mallick</Text>,</Text>
            <Text fontWeight='bold' color="white"  fontSize='2xl'> A Full Stack Develper</Text>
            </Box>
            <Box w='40%' m='auto'>
            <img width='90%' className="home-img" style={{borderRadius:'50%'}}  src={imgOlive}/>
        </Box>
        <Box mt='10px'>
            <Text id="user-detail-intro" letterSpacing='1px' color='white'>An aspiring Full Stack Web Developer with a passion for
            MERN Stack development and proficiency in HTML, CSS,
            JavaScript, React, Redux, and ChakraUI is seeking
            opportunities to work in organizations that can
            challenge their abilities as a web developer. They are
            eager to undertake challenging projects and deliver
            exceptional results</Text>
        </Box>
        <Box >
            <a href='https://drive.google.com/file/d/1Lu_XmRPgbJCPr9ppkVNJmgvtdoR0HwRq/view?usp=share_link' target="_blank"><Button background='none' color='white' outline="1px solid #FF9398" 
            _hover={{background:'#FF9398'}} borderRadius='0px' mt='10px' id="resume-button-2">View Resume</Button></a>
        </Box>
        </Box>
        

    </Box>
    </Box>)
}