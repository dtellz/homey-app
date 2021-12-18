import './style.css'
import { Box, Center, Button, Grid, GridItem, Text, Icon, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { IoIosCube } from "react-icons/io";
import Payments from '../../components/payments';
import { useNavigate } from 'react-router-dom';
import card from '../../assets/card.png'
import PaymentCard from '../../components/payment-card';
import { SiVisa, SiMastercard } from "react-icons/si";




const PaymentConfirmation = () => {
    const actualMonth = new Date().toLocaleString('default', { month: 'long' });
    const actualYear = new Date().getFullYear();
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
            <GridItem colSpan={5} bg='gray.100' className='pay-confirm__second-row'>

                {/* <Payments btn={false} /> */}
                <Box w='50%'>
                    <Text margin='1rem' fontSize={18} fontWeight={700} color='gray.700'>Transactions completed</Text>
                    <Payments />
                </Box>



                <Box>
                    <Box margin='1rem' className='pay-confirm__second-row-right'>
                        <img className='pay-confirm__card-img' src={card}></img>
                        <PaymentCard icon='wallet' textOne='Charged' textTwo='$90.00' />
                        <PaymentCard icon='wallet' textOne='Pending' textTwo='$0.00' />
                    </Box>
                    <Box className='pay-confirm__payment-container'>

                        <Box className='pay-confirmation__payment-header'>
                            <Text fontWeight={700} fontSize={14} color='gray.700' marginTop='1rem'>Payment method</Text>
                            <Button color='white' bg='blue.700' borderRadius='15px' fontSize={12} fontWeight={700} w={150} marginTop='1rem'>UPDATE METHOD</Button>
                        </Box>
                        <Box className='pay-confirmation__inputs'>
                            <InputGroup marginBottom='1rem'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<Icon w={25} h={25} as={SiMastercard} color='orange' />}
                                />
                                <Input borderRadius={15} type='tel' placeholder='7812 2139 0823 XXXX' />
                            </InputGroup>
                            <InputGroup marginBottom='1rem'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<Icon w={25} h={25} as={SiVisa} color='blue' />}
                                />
                                <Input borderRadius={15} type='tel' placeholder='7812 2139 0823 XXXX' />
                            </InputGroup>

                        </Box>

                    </Box>

                </Box>

            </GridItem>
            <GridItem colSpan={5} bg='gray.100' >
                <Text marginLeft='1rem' marginTop='-5rem' fontSize={18} fontWeight={700} color='gray.700'>Pending transactions</Text>

                <Box className='pending__container' margin='1rem' w='300px' borderRadius='12px' bg=' white'>
                    <Text margin='1rem' fontWeight={700} fontSize={18} color='gray.700'>0</Text>
                    <Text margin='1rem' fontWeight={700} fontSize={14} color='green.400'>Great! No pending payments</Text>
                </Box>
                <Box className='pending__container' margin='1rem' w='50%' borderRadius='12px' bg=' white'>
                    <Text margin='1rem' fontSize={18} fontWeight={700} color='gray.700'>Billing information {actualMonth}</Text>
                    <Box h='100px' bg='gray.100' borderRadius='15px' className='transactions__billing-info'>
                        <Box margin='1rem'>
                            <Text fontWeight='700' color='gray.500'>Jessica Brown</Text>
                            <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Flat: </span>Floor 2 Flat 24</Text>
                            <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Email Address: </span>jessica@viu.com</Text>
                            <Text fontWeight='700' color='gray.500'><span className='transactions__label'>VAT Number: </span>FRB1234567</Text>
                        </Box>
                        <Center margin='1rem'><Text fontWeight='700' color='gray.700'>{actualMonth}, {actualYear}</Text></Center>
                    </Box>
                </Box>
            </GridItem>
        </Grid >
    )
}

export default PaymentConfirmation;