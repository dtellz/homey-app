import { Box, Text, Icon } from '@chakra-ui/react';
import './style.css'
import { GoCalendar } from "react-icons/go";



const RecentTransactions = () => {




    return (
        <Box className='recent-transactions__container'>
            <Box className='recent-transactions__header'>
                <Text fontWeight={700} fontSize={18} color='gray.700'>Recent transactions and upcoming payments</Text>
                <Text fontWeight={700} fontSize={14} color='gray.400' alignItems={'center'}><Icon w={25} as={GoCalendar} />23 - 30 November 2021</Text>
            </Box>
            <Text margin='1rem' fontWeight={700} fontSize={10} color='gray.400' alignItems={'center'}>NEWEST</Text>

            <Text margin='1rem' fontWeight={700} fontSize={10} color='gray.400' alignItems={'center'}>LAST MONTH</Text>

        </Box>
    )
}

export default RecentTransactions;