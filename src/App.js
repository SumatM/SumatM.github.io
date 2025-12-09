import {Box} from '@chakra-ui/react'
import Home from './Component/Home';
import { Loader } from '@react-three/drei';
import ConstructionTicker from './Component/ConstructionTicker';




function App() {
  return (<Box>
    <Home />
    <ConstructionTicker />
  </Box>)
}

export default App;
