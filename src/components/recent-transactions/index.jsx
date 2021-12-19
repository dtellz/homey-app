import { Box, Text, Icon } from '@chakra-ui/react';
import './style.css'
import { GoCalendar } from "react-icons/go";
import TransactionEntry from '../../components/transaction-entry';


const RecentTransactions = () => {




    return (
        <Box marginBottom='1rem' className='recent-transactions__container'>
            <Box className='recent-transactions__header'>
                <Text fontWeight={700} fontSize={18} color='gray.700'>Recent transactions and upcoming payments</Text>
                <Text fontWeight={700} fontSize={14} color='gray.400' alignItems={'center'}><Icon w={25} as={GoCalendar} />23 - 30 November 2021</Text>
            </Box>
            <Text margin='1rem' fontWeight={700} fontSize={10} color='gray.400' alignItems={'center'}>NEWEST</Text>
            <TransactionEntry icon='down' title='Garden maintenance' date='27 November 2021, at 12:30 PM' status='Pending $25' />
            <TransactionEntry icon='up' title='Barbecue area (3 months)' date='27 November 2021, at 12:30 PM' status='Paid $500' />
            <Text margin='1rem' fontWeight={700} fontSize={10} color='gray.400' alignItems={'center'}>LAST MONTH</Text>
            <TransactionEntry icon='up' title='Cleaning service' date='26 November 2021, at 12:30 PM' status='Paid $45' />
            <TransactionEntry icon='up' title='Conserge' date='26 November 2021, at 12:30 PM' status='Paid $70' />
            <TransactionEntry icon='alert' title='Mail service' date='26 November 2021, at 12:30 PM' status='On hold' />
            <TransactionEntry icon='down' title='Garden maintenance' date='25 November 2021, at 12:30 PM' status='Pending $30' />

        </Box>
    )
}

export default RecentTransactions;