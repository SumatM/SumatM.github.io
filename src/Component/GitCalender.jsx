import { Box, Flex, Heading } from "@chakra-ui/react";
import GitHubCalendar  from 'react-github-calendar';
import explicitTheme from 'react-github-calendar'

export default function GitCalender(){

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;
      
        return contributions.filter(activity => {
          const date = new Date(activity.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

    return (
        <Box bg="#2F2FA1" pt='25px' textAlign='center'>
            <Heading p='25px' color='#FF9398' size='2xl'>GitHub</Heading>
            <Box p='40px 20px' w='97%' m='auto' textAlign='center' borderTop='1px solid #FF9398'>
            <Box w='95%' m='auto' p='45px' className="react-activity-calendar"  color='white'>
            <GitHubCalendar
                username="SumatM"
                blockSize={20}
                blockMargin={10}
                fontSize={20}
                fontColor='white'
                hideTotalCount='true'
               
            />
            </Box>
            <Flex  mt='40px' justify='space-around'>
                <Box >
                    <img id="github-stats-card" src='https://github-readme-stats.vercel.app/api?username=SumatM'/>
                </Box>
                <Box >
            <img id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=SumatM&theme=neon-blurange"/>
            </Box>
            </Flex>
            
            <Box  w='30%' m='auto' mt='40px'>
              <img width='150%' id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SumatM"/>
                </Box>
            </Box>
        </Box>
    )
}