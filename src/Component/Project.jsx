import { Box, Button, Flex, FormControl, FormLabel, Grid, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'


export default function Project(){
    
    const theme = useContext(ThemeContext)

    return (<Box bg={theme.bg} p={{ base: "15px", sm: "20px", md: "45px" }} id='projects' >
     <Box w='80%' margin="auto" borderTop="1.5px solid #00796B">
     </Box>
            <Box m='auto' textAlign='center' >
            <Box pt='55px'>
                <Heading color='#00796B' size='2xl'>PROJECTS</Heading>
            </Box>
            <Grid templateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} gap='80px' mt='45px' w="100%" >
                {/* 1st project  */}
                <Box  p='10px' textAlign='left' className="project-card" w="95%" >
                    <Box>
                    <Heading p='15px 0' size='lg' color='#00796B' className="project-title">SPARTAN</Heading>
                    </Box>
                    <Box pb='25px' w='80%' borderTop="1.5px solid #00796B"></Box>

                    <Box w={{base:'105%',sm:'100%'}}>
                    <img style={{width:'100%'}} src="https://raw.githubusercontent.com/SumatM/Spartan/main/readmeImages/Screenshot%20(504).png"/>
                    </Box>
                    <Box p='15px 0'>
                    <Text fontWeight='bold' m='5px 0' color='#00796B'>Charles Tyrwhitt Clone</Text>
                    <Box pb='15px' w='60%' borderTop="1.5px solid #00796B"></Box>
                    <Text color={theme.theme.dText} className="project-description">Spartan is a website dedicated to men's fashion, with a
                        focus on formal wear. The website provides a platform
                        for customers to create their own customized clothing,
                        allowing them to tailor their clothing to fit their unique
                        style and preferences.
                    </Text>
                     </Box>
                     {/* tech Stack */}
                     <Box w='95%' m='auto' className="project-tech-stack">
  <Heading size="sm" p='10px 0' color='#00796B'>Tech Stack</Heading>
  <Box pb='15px' w='60%' borderTop="1.5px solid #00796B"></Box>
  <Grid gap='25px' templateColumns={{base:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(4,1fr)'}} textAlign='center'  w={{base:"70%",sm:"80%",md:"80%",lg:'90%'}} m="auto">
            {/* react */}
            <Box bg='white'  p='15px' >
            <Flex justifyContent='center'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png" style={{width:'40%'}}/>
            </Flex>
            <Box alignContent='center' >
                <Text fonSize='md' color='#563D67' fontWeight='500' >React</Text>
            </Box>
            </Box>
            {/* chakra Ui */}
            <Box bg='white'>
            <Flex justifyContent='center'>
                <img src="https://img.icons8.com/color/512/chakra-ui.png" style={{width:'30%'}} />
            </Flex>
            <Box alignContent='center' p='10px' w='100%'>
                <Text fontSize='12px' color='#563D67' fontWeight='500' >Chakra UI</Text>
            </Box>
            </Box>
            {/* JavaScript */}
            <Box bg='white'>
            <Flex justifyContent='center'>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" style={{width:'30%'}} />
            </Flex>
            <Box alignContent='center' p='10px' w='100%'>
                <Text fontSize='sm' color='#563D67' fontWeight='600' >JavaScript</Text>
            </Box>
            </Box>
            {/* CSS */}
            <Box bg='white' p='5px'>
            <Flex justifyContent='center'>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" style={{width:'30%'}} />
            </Flex>
            <Box alignContent='center' p='10px' w='100%'>
                <Text fontSize='md' color='#563D67' fontWeight='500' >CSS</Text>
            </Box>
            </Box>
        </Grid>
        </Box>

                    {/* access links */}
                    <Box  m='15px 0'>
                        <Flex justify='space-around'>
                            <Box>
                                <a target='_blank' href="https://github.com/SumatM/Spartan"><Button className="project-github-link"  background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}}borderRadius='0px' mt='10px'>GitHub</Button></a>
                            </Box>
                            <Box>
                            <a target='_blank' href="https://marvelous-crack-5191.vercel.app/"><Button className="project-deployed-link"  background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}}mt='10px' borderRadius='0'>Live Demo</Button></a>
                                
                            </Box>
                        </Flex>
                    </Box>
                </Box>
                
                {/* 2nd project  */}

                <Box  textAlign='left' color='white' className="project-card" w="95%">
                    <Box>
                    <Heading p='15px 0' size='lg' color='#00796B' className="project-title">INDIAN STATES</Heading>
                    </Box>
                    <Box pb='25px' w='80%' borderTop="1.5px solid #00796B"></Box>
                    <Box  w={{base:'105%',sm:'100%'}}>
                    <img src="https://raw.githubusercontent.com/SumatM/Indian-States/main/UI%20images/Screenshot%20(596).png"/>
                    </Box>
                    <Box p='15px 0'>
                    <Text className="project-description" color='#00796B' fontWeight='bold' m='5px 0'>Clone of American Eagle</Text>
                    <Box pb='15px' w='60%' borderTop="1.5px solid #00796B"></Box>
                    <Text color={theme.theme.dText}>Indian States offers a convenient shopping experience with a user-friendly interface and a wide range of products from various brands. Customers can easily find what they are looking for, and can also filter products based on their preferences such as size, color, and price. 
                    </Text>
                     </Box>
        {/* tech Stack */}
        <Box w='95%' m='auto' className="project-tech-stack">
  <Heading size="sm" p='10px 0' color='#00796B'>Tech Stack</Heading>
  <Box pb='15px' w='60%' borderTop="1.5px solid #00796B"></Box>
  <Grid gap='25px' templateColumns={{base:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(3,1fr)'}} textAlign='center'  w={{base:"62%",sm:"70%",md:"55%",lg:'67%'}} m="auto">
    {/* HTML */}
    <Box bg='white'  p='10px'>
      <Flex justifyContent='center'>
        <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" style={{width:'30%'}} />
      </Flex>
      <Box alignContent='center' p='10px'>
        <Text fonSize='md' color='#563D67' fontWeight='500' >HTML5</Text>
      </Box>
    </Box>
    {/* JavaScript */}
    <Box bg='white'>
      <Flex justifyContent='center'>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" style={{width:'30%'}} />
      </Flex>
      <Box alignContent='center' p='10px' w='100%'>
        <Text fontSize='sm' color='#563D67' fontWeight='600' >JavaScript</Text>
      </Box>
    </Box>
    {/* CSS */}
    <Box bg='white' p='5px'>
      <Flex justifyContent='center'>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" style={{width:'30%'}} />
      </Flex>
      <Box alignContent='center' p='10px' w='100%'>
        <Text fontSize='md' color='#563D67' fontWeight='500' >CSS</Text>
      </Box>
    </Box>
  </Grid>
      </Box>

                    {/* access links */}
                    <Box  m='15px 0'>
                        <Flex justify='space-around'>
                            <Box>
                                <a target='_blank' href="https://github.com/SumatM/Indian-States"><Button className="project-github-link" background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}} borderRadius='0px' mt='10px'>GitHub</Button></a>
                            </Box>
                            <Box>
                            <a target='_blank' href="https://indian-states.netlify.app/index.html"><Button className="project-deployed-link" background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}} mt='10px' borderRadius='0'>Live Demo</Button></a>
                                
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                {/* 3rd project */}

                <Box  p='10px' textAlign='left' className="project-card" w="95%" >
                    <Box>
                    <Heading p='15px 0' size='lg' color='#00796B' className="project-title">SpendWiser</Heading>
                    </Box>
                    <Box pb='25px' w='80%' borderTop="1.5px solid #00796B"></Box>
                    <Box w={{base:'105%',sm:'100%'}}>
                    <img style={{width:'100%'}} src="https://user-images.githubusercontent.com/112808279/238118882-e4441c6a-8b1e-418d-b228-7132e40a40d4.png"/>
                    </Box>
                    <Box p='15px 0'>
                    <Text color={theme.theme.dText} className="project-description">SpendWiser is an invaluable tool for anyone looking to manage their monthly budget and keep track of their spending. With its user-friendly interface and comprehensive features, SpendWiser makes it easy to stay on top of your finances and ensure that you are meeting your financial goals.
                    </Text>
                     </Box>
                     {/* tech Stack */}
                     <Box w='95%' m='auto' className="project-tech-stack">
      <Heading size="sm" p='10px 0' color='#00796B'>Tech Stack</Heading>
      <Box pb='15px' w='60%' borderTop="1.5px solid #00796B"></Box>
      <Grid gap='25px' templateColumns={{base:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(4,1fr)'}} textAlign='center'  w={{base:"70%",sm:"80%",md:"80%",lg:'90%'}} m="auto">
            {/* react */}
            <Box bg='white'  p='15px' >
            <Flex justifyContent='center'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png" style={{width:'40%'}}/>
            </Flex>
            <Box alignContent='center' >
                <Text fonSize='md' color='#563D67' fontWeight='500' >React</Text>
            </Box>
            </Box>
            {/* chakra Ui */}
            <Box bg='white'>
            <Flex justifyContent='center'>
                <img src="https://img.icons8.com/color/512/chakra-ui.png" style={{width:'30%'}} />
            </Flex>
            <Box alignContent='center' p='10px' w='100%'>
                <Text fontSize='12px' color='#563D67' fontWeight='500' >Chakra UI</Text>
            </Box>
            </Box>
            {/* redux */}
            <Box bg='white'>
            <Flex justifyContent='center'>
                <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.png" style={{width:'30%'}} />
            </Flex>
            <Box alignContent='center' p='10px' w='100%'>
                <Text fontSize='sm' color='#563D67' fontWeight='600' >Redux</Text>
            </Box>
            </Box>
            {/* chart js */}
            <Box bg='white' p='5px'>
            <Flex justifyContent='center'>
                <img src="https://www.richardwestenra.com/painting-with-data-talk/img/libs/recharts.png" style={{width:'100%'}} />
            </Flex>
            <Box alignContent='center' p='10px' w='100%'>
                <Text fontSize='md' color='#563D67' fontWeight='500' >Recharts</Text>
            </Box>
            </Box>
        </Grid>
        </Box>

                    {/* access links */}
                    <Box  m='15px 0'>
                        <Flex justify='space-around'>
                            <Box>
                                <a target='_blank' href="https://github.com/SumatM/SpendWiser"><Button className="project-github-link"  background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}}borderRadius='0px' mt='10px'>GitHub</Button></a>
                            </Box>
                            <Box>
                            <a target='_blank' href="https://hilarious-wood-568-fw21-0275-updated1.vercel.app/"><Button className="project-deployed-link"  background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}}mt='10px' borderRadius='0'>Live Demo</Button></a>
                                
                            </Box>
                        </Flex>
                    </Box>
                </Box>

               {/* 4th project */}

               <Box  p='10px' textAlign='left' className="project-card" w="95%" >
                    <Box>
                    <Heading p='15px 0' size='lg' color='#00796B' className="project-title">Diamonland</Heading>
                    </Box>
                    <Box pb='25px' w='80%' borderTop="1.5px solid #00796B"></Box>
                    <Box w={{base:'105%',sm:'100%'}}>
                    <img style={{width:'100%'}} src="https://raw.githubusercontent.com/chaudhari014/legit-building-8885/main/banner/Screenshot%20(672).png"/>
                    </Box>
                    
                    <Box p='15px 0'>
                    <Text fontWeight='bold' m='5px 0' color='#00796B'>CaratLane Clone</Text>
                    <Box pb='15px' w='60%' borderTop="1.5px solid #00796B"></Box>
                    <Text color={theme.theme.dText} className="project-description">Diamondland is an e-commerce website specializing in jewelry, offering customers a wide range of high-quality jewelry at affordable prices. They also provide personalized gift options for your loved ones.
                    </Text>
                     </Box>
                     {/* tech Stack */}
                     <Box w='95%' m='auto' className="project-tech-stack">
  <Heading size="sm" p='10px 0' color='#00796B'>Tech Stack</Heading>
  <Box pb='15px' w='60%' borderTop="1.5px solid #00796B"></Box>
  <Grid gap='25px' templateColumns={{base:'repeat(2,1fr)',sm:'repeat(3,1fr)',md:'repeat(3,1fr)'}} textAlign='center'  w={{base:"62%",sm:"70%",md:"55%",lg:'67%'}} m="auto">
    {/* HTML */}
    <Box bg='white'  p='10px'>
      <Flex justifyContent='center'>
        <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" style={{width:'30%'}} />
      </Flex>
      <Box alignContent='center' p='10px'>
        <Text fonSize='md' color='#563D67' fontWeight='500' >HTML5</Text>
      </Box>
    </Box>
    {/* JavaScript */}
    <Box bg='white'>
      <Flex justifyContent='center'>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" style={{width:'30%'}} />
      </Flex>
      <Box alignContent='center' p='10px' w='100%'>
        <Text fontSize='sm' color='#563D67' fontWeight='600' >JavaScript</Text>
      </Box>
    </Box>
    {/* CSS */}
    <Box bg='white' p='5px'>
      <Flex justifyContent='center'>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" style={{width:'30%'}} />
      </Flex>
      <Box alignContent='center' p='10px' w='100%'>
        <Text fontSize='md' color='#563D67' fontWeight='500' >CSS</Text>
      </Box>
    </Box>
  </Grid>
      </Box>

                    {/* access links */}
                    <Box  m='15px 0'>
                        <Flex justify='space-around'>
                            <Box>
                                <a target='_blank' href="https://github.com/chaudhari014/legit-building-8885"><Button className="project-github-link"  background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}}borderRadius='0px' mt='10px'>GitHub</Button></a>
                            </Box>
                            <Box>
                            <a target='_blank' href="https://diamond-land.netlify.app/index.html"><Button className="project-deployed-link"  background='none' color='#00796B' outline="1px solid #00796B" 
            _hover={{background:'#26A69A',color:'white'}}mt='10px' borderRadius='0'>Live Demo</Button></a>
                                
                            </Box>
                        </Flex>
                    </Box>
                  </Box>
                
            </Grid>
            </Box>
    </Box>)
}