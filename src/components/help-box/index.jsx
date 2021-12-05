import { Box, Text } from "@chakra-ui/layout"

import './style.css'

const HelpBox = () => {



    return (
        <Box bg='teal.300' w='80%' p={4}>
            <Box className='iconBackground' borderRadius='12px' w='30px' h='30px'></Box>
            <Text fontSize='12px' fontWeight='700'>Hola</Text>
        </Box>
    )

}

export default HelpBox;