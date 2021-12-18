import { Box, propNames, Text } from '@chakra-ui/react'
import TransactionEntry from '../transaction-entry';
import './style.css'


const NewPayments = (props) => {
    return (
        <Box className='new-payments__container'>
            <Text fontWeight={700} fontSize={18} color='gray.700' marginLeft='1rem' marginTop='1rem' marginBottom='2rem'>{props.title}</Text>
            <TransactionEntry icon='down' title={props.entryOne_title} date='27 November 2021, at 12:30 PM' status='Pending $25' btn={props.entryOne_status} />
            <TransactionEntry icon='down' title={props.entryTwo_title} date='27 November 2021, at 12:30 PM' status='Pending $25' btn={props.entryTwo_status} />
            <TransactionEntry icon='down' title={props.entryThree_title} date='27 November 2021, at 12:30 PM' status='Pending $25' btn={props.entryThree_status} />
        </Box>
    )
}

export default NewPayments;