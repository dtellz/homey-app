import './style.css'
import { Box, Divider, Text, Icon } from '@chakra-ui/react';
import { BsCreditCardFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

const PaymentCard = (props) => {
    let icon = '';
    switch (props.icon) {
        case 'wallet':
            icon = <Box className='payment__icon' borderRadius='12px' bgColor='teal.300' w='65px' h='65px'><Icon color='white' h='25px' w='30px' as={BsCreditCardFill} /></Box>
            break;
        case 'house':
            icon = <Box className='payment__icon' borderRadius='12px' bgColor='teal.300' w='65px' h='65px'><Icon color='white' h='25px' w='30px' as={IoHome} /></Box>
            break;
        default:
            break;
    }
    return (
        <Box bg='white' borderRadius={15} w={240} h={240} className='payment__container'>
            {icon}
            <Text margin='.5rem' w={120} fontSize={18} fontWeight={700} color='gray.700' justifyContent={'center'} textAlign={'center'}>{props.textOne}</Text>
            <Divider margin='.5rem' />
            <Text margin='.5rem' fontSize={18} fontWeight={700} color='gray.700'>{props.textTwo}</Text>
        </Box>
    )
}

export default PaymentCard;