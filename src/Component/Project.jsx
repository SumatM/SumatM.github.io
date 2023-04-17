import { Box, Button, Flex, FormControl, FormLabel, Grid, Heading, Input, Text, Textarea } from '@chakra-ui/react'


export default function Project(){
    

    return (<Box bg="#242582" p='45px' id='projects'>
            <Box w='97%' m='auto' textAlign='center' borderTop='1px solid #FF9398'>
            <Box pt='25px'>
                <Heading color='#FF9398' size='2xl'>Project</Heading>
            </Box>
            <Grid templateColumns='repeat(2,1fr)' gap='80px' mt='45px'>
                {/* 1st project  */}
                <Box  textAlign='left' color='white' className="project-card">
                    <Box>
                    <Heading p='15px 0' size='lg' color='#FF9398' className="project-title">SPARTAN</Heading>
                    </Box>
                    <Box>
                    <img src="https://raw.githubusercontent.com/SumatM/Spartan/main/readmeImages/Screenshot%20(504).png"/>
                    </Box>
                    <Box p='15px 0'>
                    <Text fontWeight='bold' m='5px 0' color='#FF9398'>Charles Tyrwhitt Clone</Text>
                    <Text className="project-description">Spartan is a website dedicated to men's fashion, with a
                        focus on formal wear. The website provides a platform
                        for customers to create their own customized clothing,
                        allowing them to tailor their clothing to fit their unique
                        style and preferences.
                    </Text>
                     </Box>
                     {/* tech Stack */}
                        <Box w='95%' m='auto' className="project-tech-stack">
                            <Heading size="sm" p='10px 0' color='#FF9398'>Tech Stack</Heading>
                        <Grid templateColumns="repeat(4,1fr)" textAlign='center'>
                                {/* react */}
                        <Box bg='white' p='10px' mr='25px'>
                            <Box>
                                <img src="https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png" />
                            </Box>
                            <Box alignContent='center' p='10px'>
                            <Text fonSize='md' color='#563D67' fontWeight='500' >React</Text>
                            </Box>
                        </Box>
                        {/* chakra Ui */}
                        <Box bg='white'  mr='25px'>
                        <Box>
                            <img src="https://img.icons8.com/color/512/chakra-ui.png" />
                        </Box>
                        <Box alignContent='center' p='10px' w='100%' >
                        <Text fontSize='12px' color='#563D67' fontWeight='500' >Chakra UI</Text>
                        </Box>
                        </Box>
                        {/* JavaScript */}
                        <Box bg='white' mr='25px'>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                        </Box>
                        <Box alignContent='center' p='10px' w='100%' >
                        <Text fontSize='sm' color='#563D67' fontWeight='600' >JavaScript</Text>
                        </Box>
                        </Box>
                        {/* CSS */}
                        <Box bg='white'  mr='25px' p='5px'>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />
                        </Box>
                        <Box alignContent='center' p='10px' w='100%' >
                        <Text fontSize='md' color='#563D67' fontWeight='500' >CSS</Text>
                        </Box>
                        </Box>
                        </Grid>
                        
                        </Box>
                    {/* access links */}
                    <Box  m='15px 0'>
                        <Flex justify='space-around'>
                            <Box>
                                <a target='_blank' href="https://github.com/SumatM/Spartan"><Button className="project-github-link" b background='none' color='white' outline="1px solid #FF9398" 
                                _hover={{background:'#FF9398'}} borderRadius='0px' mt='10px'>GitHub</Button></a>
                            </Box>
                            <Box>
                            <a target='_blank' href="https://marvelous-crack-5191.vercel.app/"><Button className="project-deployed-link"  background='none' color='white' outline="1px solid #FF9398" 
                             _hover={{background:'#FF9398'}} mt='10px' borderRadius='0'>Live Demo</Button></a>
                                
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                
                {/* 2nd project  */}

                <Box  textAlign='left' color='white' className="project-card">
                    <Box>
                    <Heading p='15px 0' size='lg' color='#FF9398' className="project-title">INDIAN STATES</Heading>
                    </Box>
                    <Box>
                    <img src="https://raw.githubusercontent.com/SumatM/Indian-States/main/UI%20images/Screenshot%20(596).png"/>
                    </Box>
                    <Box p='15px 0'>
                    <Text className="project-description" color='#FF9398' fontWeight='bold' m='5px 0'>Clone of American Eagle</Text>
                    <Text>Indian States offers a convenient shopping experience with a user-friendly interface and a wide range of products from various brands. Customers can easily find what they are looking for, and can also filter products based on their preferences such as size, color, and price. 
                    </Text>
                     </Box>
                     {/* tech Stack */}
                        <Box w='95%' m='auto' className="project-tech-stack">
                            <Heading size="sm" p='10px 0' color='#FF9398'>Tech Stack</Heading>
                        <Grid templateColumns="repeat(4,1fr)" textAlign='center'>
                                {/* HTML */}
                        <Box bg='white' p='10px' mr='25px'>
                            <Box>
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
                            </Box>
                            <Box alignContent='center' p='10px'>
                            <Text fonSize='md' color='#563D67' fontWeight='500' >HTML5</Text>
                            </Box>
                        </Box>
                        {/* JavaScript */}
                        <Box bg='white' mr='25px'>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                        </Box>
                        <Box alignContent='center' p='10px' w='100%' >
                        <Text fontSize='sm' color='#563D67' fontWeight='600' >JavaScript</Text>
                        </Box>
                        </Box>
                        {/* CSS */}
                        <Box bg='white'  mr='25px' p='5px'>
                        <Box>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />
                        </Box>
                        <Box alignContent='center' p='10px' w='100%' >
                        <Text fontSize='md' color='#563D67' fontWeight='500' >CSS</Text>
                        </Box>
                        </Box>
                        </Grid>
                        
                        </Box>
                    {/* access links */}
                    <Box  m='15px 0'>
                        <Flex justify='space-around'>
                            <Box>
                                <a target='_blank' href="https://github.com/SumatM/Indian-States"><Button className="project-github-link" b background='none' color='white' outline="1px solid #FF9398" 
                                _hover={{background:'#FF9398'}} borderRadius='0px' mt='10px'>GitHub</Button></a>
                            </Box>
                            <Box>
                            <a target='_blank' href="https://indian-states.netlify.app/index.html"><Button className="project-deployed-link"  background='none' color='white' outline="1px solid #FF9398" 
                             _hover={{background:'#FF9398'}} mt='10px' borderRadius='0'>Live Demo</Button></a>
                                
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                
            </Grid>
            </Box>
    </Box>)
}