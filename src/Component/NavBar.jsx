import {
    Box,
    Flex,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { useRef} from 'react'
import logo from './sumat-low-resolution-logo-color-on-transparent-background.png'
import { HamburgerIcon } from '@chakra-ui/icons'
import resume from './../Banner//Sumat-Mallick-Resume.pdf'
import { Navigate,Link } from 'react-router-dom'

  
  export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
   

    function handleContact(){
      return <Navigate to="/contact"/>
    }

   return (<Box id="nav-menu">
        <Box  backdropFilter='auto' backdropBlur='10px' pt='5px' pb='10px' top='5px' position='fixed'left='20%'  display={{base:'none',sm:'none',md:'none',lg:'inline-block'}} zIndex='99' w='60%' m='auto' border='1px solid #00796B' borderRadius='25px'>
       
          <Flex w='70%' justify='space-between' letterSpacing='1px'  m='auto'>

          <Box p='5px 15px' _hover={{color:'#4DB6AC'}} fontWeight='bolder' color='#00796B'>
            <a href='#home'><Text className="nav-link home">HOME</Text></a>
          </Box>
          <Box p='5px 15px' _hover={{color:'#4DB6AC'}} fontWeight='bolder' color='#00796B'>
            <a href='#about'><Text className="nav-link about">ABOUT</Text></a>
          </Box>
          <Box p='5px 15px' _hover={{color:'#4DB6AC'}} fontWeight='bolder' color='#00796B'>
            <a href="#skills"><Text className="nav-link skills">SKILLS</Text></a>
          </Box>
          <Box p='5px 15px' _hover={{color:'#4DB6AC'}} fontWeight='bolder' color='#00796B'>
            <a href="#projects"><Text className="nav-link projects">PROJECTS</Text></a>
          </Box>
          <Box p='5px 15px' _hover={{color:'#4DB6AC'}} fontWeight='bolder' color='#00796B'>
            <a href='#contact'><Text className="nav-link contact" onClick={handleContact}>CONTACT</Text></a>
          </Box>
          {/* <Box p='5px 15px'  className="nav-link resume" fontWeight='bolder' color='#00796B'>
           <a href={resume} target='_blank' download="Sumat-Mallick-Resume" id="resume-link-1"  >
           <Button background='none' color='#00796B' outline="1px solid #FF9398" 
            _hover={{background:'#FF9398',color:'white'}} borderRadius='0px' mt='10px' id="resume-button-1">Resume</Button>
            </a>
          </Box> */}

          </Flex>
        </Box>
        <Box  backdropFilter='auto' backdropBlur='10px' pt='5px' pb='15px' top='0px' position='fixed' w='100%'  display={{base:'block',sm:'block',md:'block',lg:'none'}}>
          <Flex  w='92%' m='auto' textAlign='center' justify='space-between' align='center' mt='10px'>
             {/* for icon  */}
             <Box w='25%' >
            <img width='50%' src={logo} />
             </Box>
    {/* for slider hamburger menu*/}
          <Box  w='5%' ref={btnRef} onClick={onOpen}>
            <HamburgerIcon color='#00796B' fontSize='35px'/>
          </Box>  
          </Flex>
        </Box>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt={{base:'12%',sm:'9%' , md:'8%'  }} backdropFilter='auto' background='' backdropBlur='10px' pt='5px'>
          <DrawerBody>

            <Box p='5px 15px' bg='#26A69A' color='white'fontWeight='bolder'  m='10px 0'>
             <a href='#home'> <Text onClick={onClose}>HOME</Text></a>
            </Box>
            <Box p='5px 15px' bg='#26A69A' color='white' fontWeight='bolder'   m='10px 0' >
             <a href="#about"> <Text onClick={onClose}>ABOUT</Text></a>
            </Box>
            <Box p='5px 15px' bg='#26A69A' color='white' fontWeight='bolder'   m='10px 0'>
             <a href='#skills'> <Text onClick={onClose}>SKILLS</Text></a>
            </Box>
            <Box p='5px 15px' bg='#26A69A' color='white' fontWeight='bolder'   m='10px 0'>
              <a href='#projects'><Text onClick={onClose}>PROJECTS</Text></a>
            </Box>
            <Box p='5px 15px' bg='#26A69A' color='white' fontWeight='bolder'   m='10px 0'>
             <a href='#contact'> <Text onClick={onClose}>CONTACT</Text></a>
            </Box>
            <Box p='5px 15px'  className="nav-link resume" fontWeight='bolder' color='white'>
           <a href={resume} target='_blank' download="Sumat-Mallick-Resume"  >
           <Button background='none' color='white' outline="1px solid #00796B" 
            _hover={{background:'#26A69A'}} borderRadius='0px' mt='10px'>Resume</Button>
            </a>
          </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
    )
  }