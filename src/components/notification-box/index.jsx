import { Box, Text } from "@chakra-ui/layout"
import { Icon, Button } from '@chakra-ui/react'
import { IoWalletSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

import './style.css'

const NotificationBox = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/payment-confirmation')
    }

    return (
        <Box bg='teal.300' p={4} className='notificationbox'>
            <Box marginLeft='1rem' className='notificationIcon' borderRadius='12px' fontSize='22px' w='75px' h='75px'><Icon color='white' w={25} h={30} as={IoWalletSharp} /></Box>
            <Text marginLeft='1rem' fontSize='12px' fontWeight='700' color='white'>Pending payment (November)</Text>
            <Text marginLeft='1rem' fontSize='12px' fontWeight='400' color='white'>Please proceed to your monthly payment</Text>
            <Button marginLeft='1rem' marginRight='1rem' color='black' fontSize='10px' h='80px' onClick={handleClick}>PROCEED</Button>
        </Box>
    )

}

export default NotificationBox;