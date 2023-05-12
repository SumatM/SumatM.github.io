import { Box, Grid, Heading, Text } from "@chakra-ui/react";


export default function Skills(){

    return (<Box bg="#242582" p='45px' id='skills'>
        <Box  textAlign='center' w='97%' margin='auto' borderTop='1px solid #FF9398' >
            <Box p='35px' >
            <Heading color='#FF9398' >SKILLS</Heading>
            </Box>
            <Grid gap='25px' templateColumns='repeat(4, 1fr)'>
            {/* HTML5 */}
            <Box bg='white' w='60%' p='10px' className="skills-card" >
            <Box>
                <img className="skills-card-img" src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' className="skills-card-name">HTML5</Heading>
            </Box>
            </Box>
            {/* css */}
            <Box bg='white' w='60%' p='10px' className="skills-card">
            <Box>
                <img className="skills-card-img" src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' className="skills-card-name">CSS</Heading>
            </Box>
            </Box>
            {/* js */}
            <Box bg='white' w='60%' p='10px' className="skills-card">
            <Box>
                <img className="skills-card-img" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' letterSpacing='1.1px' className="skills-card-name">JavaScript</Heading>
            </Box>
            </Box>
            {/* chakra Ui */}
            <Box bg='white' w='60%' p='10px'  className="skills-card">
            <Box>
                <img className="skills-card-img" src="https://img.icons8.com/color/512/chakra-ui.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' className="skills-card-name">Chakra UI</Heading>
            </Box>
            </Box>
            {/* redux */}

            <Box bg='white' w='60%' p='10px' className="skills-card">
            <Box>
                <img className="skills-card-img" src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' className="skills-card-name">Redux</Heading>
            </Box>
            </Box>

            {/* git */}
            <Box bg='white' w='60%' p='10px' className="skills-card">
            <Box>
                <img className="skills-card-img" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' className="skills-card-name">Git</Heading>
            </Box>
            </Box>

             {/* react */}

             <Box bg='white' w='60%' p='10px' className="skills-card">
            <Box>
                <img className="skills-card-img" src="https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' className="skills-card-name">React</Heading>
            </Box>
            </Box>
            {/* typescript */}
            <Box bg='white' w='60%' p='10px' className="skills-card">
            <Box>
                <img className="skills-card-img" src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png" />
            </Box>
            <Box alignContent='center' p='15px'>
            <Heading size='md' color='#563D67' letterSpacing='1.2px' className="skills-card-name">Typescript</Heading>
            </Box>
            </Box>
            </Grid>
        </Box>
    </Box>)
}