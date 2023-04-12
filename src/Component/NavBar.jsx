import {
    Box,
    Button,
    Flex,
    Text,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    DrawerHeader,
    Input,
    DrawerFooter,
    useDisclosure
  } from '@chakra-ui/react'
import { useRef} from 'react'
import logo from './sumat-low-resolution-logo-color-on-transparent-background.png'


  
  export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
   

   return (<Box>
        <Box  bg='#65CCB7' pt='5px' pb='15px' top='0px' position='fixed' w='100%'  display={{base:'none',sm:'none',md:'none',lg:'inline-block'}}>
        <Flex w='92%' m='auto' textAlign='center' justify='space-between' align='center' mt='10px'>
          <Box >
            <Box w='25%' >
            <img width='80%' src={logo} />
             </Box>
          </Box>
          <Flex   w='55%' justify='space-between' letterSpacing='1px' >

          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text>HOME</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text>ABOUT</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text>SKILLS</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text>PROJECTS</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text>CONTACT</Text>
          </Box>
          <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'>
            <Text>RESUME</Text>
          </Box>

          </Flex>
        </Flex>
        </Box>
        <Box bg='#65CCB7' pt='5px' pb='15px' top='0px' position='fixed' w='100%'  display={{base:'block',sm:'block',md:'block',lg:'none'}}>
          <Flex  w='92%' m='auto' textAlign='center' justify='space-between' align='center' mt='10px'>
             {/* for icon  */}
             <Box w='25%' >
            <img width='50%' src={logo} />
             </Box>
    {/* for slider hamburger menu*/}
          <Box w='5%' ref={btnRef} onClick={onOpen}>
            <img  src="https://cdn-icons-png.flaticon.com/512/2613/2613045.png"/>
          </Box>  
          </Flex>
        </Box>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent mt='70px' bg='#65CCB7'>
          <DrawerBody>

            <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white' m='10px 0'>
              <Text>HOME</Text>
            </Box>
            <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'  m='10px 0' >
              <Text>ABOUT</Text>
            </Box>
            <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'  m='10px 0'>
              <Text>SKILLS</Text>
            </Box>
            <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'  m='10px 0'>
              <Text>PROJECTS</Text>
            </Box>
            <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'  m='10px 0'>
              <Text>CONTACT</Text>
            </Box>
            <Box p='5px 15px' _hover={{background:"#57BB99",color:'#004D40'}} fontWeight='bolder' color='white'  m='10px 0'>
              <Text>RESUME</Text>
            </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
    )
  }