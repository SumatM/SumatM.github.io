import {Box, Text,Button, Heading, Flex}  from '@chakra-ui/react' 
import imgOlive from './../Banner/IMG20220220130528FAce_edited-removebg-previewOlive.png'
import resume from './../Banner//Sumat-Mallick-Resume.pdf'
import {motion} from 'framer-motion'

export default function Intro(){



    return (
    <Box id="about" className='about section'>
    <Flex pt='85px' pb='50px' bg="#2F2FA1"  margin='auto' flexDirection={{base:'column',sm:'column',md:'row'}}>
        <Box w={{base:'90%',sm:'75%',md:'50%'}} p='20px' margin='auto' >
            <Box mb='10px'>
            <Text fontWeight='bold' color="white" fontSize='3xl'>Hi, I am <Text fontSize='4xl' display='inline' color='#FF9398' id="user-detail-name">Sumat Mallick</Text>,</Text>
            <Box>
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?weight=800&size=30&pause=1000&color=F78D9C&background=FFFFFF00&center=true&vCenter=true&width=435&lines=A+Full+Stack+Web+Developer;A+Problem+Solver" alt="Typing SVG" /></a>
            </Box>
            </Box>
            <Flex w={{base:'100%',sm:'70%',md:"80%",lg:'70%'}} mt="20px" margin='auto' >
            <motion.div  whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <img  className="home-img" style={{borderRadius:'50%',width:'80%',display:'block'}}  src={imgOlive}/>
                    </motion.div>
            </Flex>
        

        
        
        </Box>

        {/* about me */}
        
        <Box w={{base:'90%',sm:'75%',md:'50%'}} p='10px' m='auto' textAlign={{base:'center',sm:'center',md:'left'}} >
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
        <Box p='5px 15px' className="nav-link resume" fontWeight='bolder' color='white'>
           <a href={resume} target='_blank' download="Sumat-Mallick-Resume" id="resume-link-1"  >
           <Button background='none' color='white' outline="1px solid #FF9398" 
            _hover={{background:'#FF9398'}} borderRadius='0px' mt='10px' id="resume-button-1">Resume</Button>
            </a>
          </Box>
        </Box>
    </Flex>
    </Box>)
}