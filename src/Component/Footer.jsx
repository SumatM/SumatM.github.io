import { Box, Button, Flex, FormControl, FormLabel, Grid, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import {motion} from 'framer-motion'
import {FaUserCircle} from 'react-icons/fa';
import {IoMdCall} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Footer(){

  const theme = useContext(ThemeContext);

    return (
        <Box textAlign='center'  p='20px' bg={theme.bg}  id='contact'>
{/*------- footer containter=------ */}
            <Box p='40px 20px'  m='auto' textAlign='center' borderTop='1px solid #FF9398'>
                <Box >
                <Heading color='#00796B'>Contact Me</Heading></Box>
                <Grid  gridTemplateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)',md:'repeat(2,1fr)'}}>
                    <Box  p='25px'  >
                    {/* my details */}
                    <Flex  mt='15px' justify='start' >
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
                      <FaUserCircle color='#00796B' size='25px'/>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <Text fontSize='sm' color='#00796B' fontWeight='500' letterSpacing='0.8px'>Sumat Mallick</Text>
                    </motion.div>
                    </Flex>
                    {/* call */}
                    <Flex  mt='15px' justify='start' >
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
                      <IoMdCall color='#00796B' size='25px'/>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <Text id="contact-phone" fontSize='sm' color='#00796B' fontWeight='500' letterSpacing='0.8px'>+91-8894417615</Text>
                    </motion.div>
                    </Flex>
                    {/* Email */}
                    <Flex  mt='15px' justify='start' >
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
                      <MdEmail color='#00796B' size='25px'/>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <a target="_blank" href="mailto: sumatmallick@gmail.com"><Text fontSize='sm' color='#00796B' fontWeight='500' letterSpacing='0.8px'  id="contact-email">Sumatmallick@gmail.com</Text></a>
                    </motion.div>
                    </Flex>
                    {/* linkedin */}
                    <Flex  mt='25px' >
                    <Box w='10%'>
                        <a target="_blank" href="https://www.linkedin.com/in/sumat-mallick-65b966227/">                       
                         <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
                      <AiFillLinkedin color='#00796B' size='25px'/>
                    </motion.div></a>
                    </Box>
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <a target="_blank"  href="https://www.linkedin.com/in/sumat-mallick-65b966227/"><Text  id="contact-linkedin" fontSize='sm' color='#00796B' fontWeight='500' letterSpacing='0.8px'>Sumat Mallick</Text></a>
                    </motion.div>
                    </Flex>
                    {/* github */}
                    <Flex  mt='25px' >
                    <Box w='10%'>
                        <a target="_blank"  href="https://github.com/SumatM">                       
                         <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}  style={{width:'10%'}}>
                      <AiFillGithub color='#00796B' size='25px'/>
                    </motion.div></a>
                    </Box>
                    <motion.div whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} >
                         <a target="_blank"  href="https://github.com/SumatM"><Text  id="contact-github" fontSize='sm' color='#00796B' fontWeight='500' letterSpacing='0.8px'>SumatM</Text></a>
                    </motion.div>
                    </Flex>
                    </Box>
 {/*--------------- form-------------------- */}
                    <Box   p='25px'>
                    <FormControl >
                        <Flex mt='15px'>
                        <Box w='30%'>
                        <FormLabel color="#00796B">
                        Name:
                        </FormLabel>
                        </Box>
                        <Input border='1px solid #00796B' size='sm' color='white' placeholder="Enter Your Name"/>
                        </Flex>

                        <Flex mt='25px'>
                        <Box w='30%'><FormLabel color="#00796B">
                        Email:
                        </FormLabel></Box>
                        <Input border='1px solid #00796B' size='sm' color='white' placeholder="Enter Your Email"/>
                        </Flex>

                        <Flex mt='30px'>
                        <Box w='30%'>
                        <FormLabel color="#00796B">
                        Number:
                        </FormLabel>
                        </Box>
                        <Input border='1px solid #00796B' size='sm' color='white' placeholder="Enter Your Number"/>
                        </Flex>
                        <Flex h='40%' mt='30px'>
                       <Box w='27%'>
                       <FormLabel color="#00796B">
                        Message:
                        </FormLabel>
                       </Box>
                        <Textarea border='1px solid #00796B' size='sm' color='white' placeholder="Enter Your Message" w='90%' h='100%'/>
                        </Flex>
                        <Box>

                        </Box>
                       <Box  p='25px' w='40%' ml='18%' textAlign='left'>
                       <Button w='80%' background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}}borderRadius='0px' mt='10px'>Submit</Button>
                       </Box>
                    </FormControl>
                     </Box>
                </Grid>
            </Box>
        </Box>
    )
}