import { Box, Flex, Heading } from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';


export default function GitCalender(){




    return (
        <Box  pt='25px' textAlign='center'>
         <Box w='80%'  margin="auto" borderTop="1.5px solid #00796B"></Box>
            <Heading p='25px' color='#00796B' size='2xl'>GitHub</Heading>
            <Box p='40px 20px' w='97%' m='auto' textAlign='center'>
            <Flex justify='center'  p='45px' className="react-activity-calendar"  color='#00796B' >
            <GitHubCalendar  style={{width:"100%"}} username="sumatm" />
            </Flex>
            <Flex  mt='40px' flexDirection={{base:'column',sm:'column',md:'column',lg:'row'}} justifyContent='space-around' alignItems='center' gap='25px'>
                <Box >
                    <img display="block" id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=SumatM' alt="Github Staus Card"/>
                </Box>
                <Box >
            <img style={{display:'block'}} id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=SumatM" alt="Github streak stats"/>
            </Box>
            </Flex>
            
            <Flex  mt='40px'  justifyContent='center'>
              <img display="block" id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SumatM" alt="Github Top Language"/>
                </Flex>
            </Box>
        </Box>
    )
}