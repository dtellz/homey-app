import { Box, Text, Icon, Center, Button } from '@chakra-ui/react';
import './style.css'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineExclamation } from "react-icons/ai";


const TransactionEntry = (props) => {
    let icon = '';
    let statusStyle = {}
    let lastElement = '';

    switch (props.icon) {
        case 'up':
            icon = <Center color='green' className='icon-box'><Icon as={AiOutlineArrowUp} /></Center>
            break;
        case 'down':
            icon = <Center color='red' className='icon-box'><Icon as={AiOutlineArrowDown} /></Center>
            break;
        case 'alert':
            icon = <Center color='#A0AEC0' className='icon-box'><Icon as={AiOutlineExclamation} /></Center>
            break;

        default:
            break;
    }

    switch (props.status.split(' ')[0]) {

        case 'Pending':
            statusStyle = { color: 'red' }
            break;
        case 'Paid':
            statusStyle = { color: 'green' }
            break;
        case 'On':
            statusStyle = { color: 'black' }
            break;

        default:
            break;
    }
    if (props.btn !== undefined) {

        props.btn ? lastElement = <Button className='payment__btn'>ADDED</Button> : lastElement = <Button className='payment__btn'>PAY</Button>

    } else {
        lastElement = <Text fontSize={14} fontWeight={700} style={statusStyle}>{props.status}</Text>;
    }


    return (
        <Box className='transaction-entry__container'>
            <Box className='transaction-entry__icon-box'>
                {icon}
                <Box>
                    <Text fontSize={14} fontWeight={700} color='gray.700'>{props.title}</Text>
                    <Text fontSize={12} fontWeight={700} color='gray.400'>{props.date}</Text>
                </Box>
            </Box>
            {lastElement}
        </Box>



    )
}

export default TransactionEntry;