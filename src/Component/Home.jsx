import { Box, Heading } from '@chakra-ui/react';
import { NavBar } from './NavBar'
import Footer from './Footer';
import Intro from './Intro';
import Skills from './Skills';
import Project from './Project';
import GitCalender from './GitCalender';
import { useContext } from 'react';



export default function Home(){


    return (<Box id='home'>
        <NavBar />
        <Intro/>
        <Skills/>
        <Project/>
        <GitCalender/>
        <Footer/>
    </Box>)
}