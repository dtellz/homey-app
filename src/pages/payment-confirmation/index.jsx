import './style.css'
import { Box, Button, Grid, GridItem, Text, Icon } from '@chakra-ui/react';
import { IoIosCube } from "react-icons/io";
import Payments from '../../components/payments';
import { useNavigate } from 'react-router-dom';
import card from '../../assets/card.png'
import PaymentCard from '../../components/payment-card';



const PaymentConfirmation = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard')
    }
    return (
        <Grid
            h='100vh'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
            bg='gray.100'
        >

            <GridItem colSpan={5} bg='gray.100'>
                <Box bg='teal.300' className='pay-confirm__first-row'>
                    <Text fontWeight={700} fontSize={100} color='white' marginLeft='10rem'>Well done!</Text>
                    <Button onClick={handleClick} w={150} borderRadius={15} marginLeft='10rem'><Icon marginRight='0.5rem' as={IoIosCube} /><Text fontWeight={700} fontSize={12} color='gray.700'>GO BACK</Text></Button>
                </Box>
            </GridItem>
            <GridItem colSpan={5} bg='blue' className='pay-confirm__second-row'>

                {/* <Payments btn={false} /> */}
                <Payments />
                <Box margin='1rem' className='pay-confirm__second-row-right'>
                    <img className='pay-confirm__card-img' src={card}></img>
                    <PaymentCard icon='wallet' textOne='Charged' textTwo='$90.00' />
                    <PaymentCard icon='wallet' textOne='Pending' textTwo='$0.00' />
                </Box>


            </GridItem>
            <GridItem colSpan={5} bg='tomato' />
        </Grid>
    )
}

export default PaymentConfirmation;