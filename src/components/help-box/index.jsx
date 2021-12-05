import { Box, Text } from "@chakra-ui/layout"
import { Icon, Button } from '@chakra-ui/react'
import { AiFillQuestionCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

import './style.css'

const HelpBox = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact')
    }

    return (
        <Box bg='teal.300' w='80%' p={4} className='helpbox'>
            <Box className='iconBackground' borderRadius='12px' fontSize='22px' w='35px' h='55px'><Icon as={AiFillQuestionCircle} /></Box>
            <Text fontSize='12px' fontWeight='700' color='white'>Need help?</Text>
            <Text fontSize='12px' fontWeight='400' color='white'>Please contact us</Text>
            <Button color='black' fontSize='10px' onClick={handleClick}>  CONTACT PAGE</Button>
        </Box>
    )

}

export default HelpBox;