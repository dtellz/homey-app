import { Grid, GridItem, Text, Icon, Box, Center } from '@chakra-ui/react'
import { HiHome } from "react-icons/hi";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Divider } from '@chakra-ui/react'
import MenuOption from '../../components/menu-option';
import './style.css'
import { useState } from 'react';
import HelpBox from '../../components/help-box';
import InfoBox from '../../components/info-box';
import housesImg from '../../assets/houses.png'


const PublicDashboard = () => {
    const [optOne, setOptOne] = useState(true);
    const [optTwo, setOptTwo] = useState(false);
    const [optThree, setOptThree] = useState(false);

    const handleOptOne = () => {
        if (!optOne) setOptOne(true)
        if (optTwo) setOptTwo(false)
        if (optThree) setOptThree(false)
    }
    const handleOptTwo = () => {
        if (!optTwo) setOptTwo(true)
        if (optOne) setOptOne(false)
        if (optThree) setOptThree(false)
    }
    const handleOptThree = () => {
        if (!optThree) setOptThree(true)
        if (optTwo) setOptTwo(false)
        if (optOne) setOptOne(false)
    }
    return (
        <Grid
            h='100vh'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem className='dashboard__menu-first-block' rowSpan={3} colSpan={1} bg='gray.100' minWidth='250'>
                <div className='dashboard__logo'>
                    <Icon as={HiHome} />
                    <Text fontWeight='700' color='gray.700' fontSize='20px' >Homey App</Text>
                </div>
                <Divider paddingTop='1rem' />

                <div className='dashboard__options'>
                    <MenuOption text='Dashboard' icon='home' select={handleOptOne} active={optOne} />
                    <MenuOption text='Transactions overview' icon='bars' select={handleOptTwo} active={optTwo} />
                    <MenuOption text='Settings' icon='tool' select={handleOptThree} active={optThree} />

                </div>
                <HelpBox className='dashboard__helpbox' />
            </GridItem>
            <GridItem rowSpan={1} colSpan={4} bg='gray.100'>
                <div className='dashboard__small-info'>
                    <InfoBox textOne='House expenses' textTwo='$3,000' textThree='+55%' icon='wallet' />
                    <InfoBox textOne="Today's payments" textTwo='300' textThree='+5%' icon='world' />
                    <InfoBox textOne='Transaction to download' textTwo='24' textThree='' icon='note' />
                    <InfoBox textOne='House administrator' textTwo='Esthera Jackson' textThree='' icon='person' />
                </div>

                <div className='dashboard__vertical-group'>
                    <Box className='dashboard__built-for-you'>

                        <div className='dashboard__text-content'>
                            <Text className='text-line' fontSize='12px' fontWeight='700' color='gray.400'>Built for you</Text>
                            <Text className='text-line long' fontSize='18px' fontWeight='700' color='gray.700'>Homey App Dashboard</Text>
                            <Text className='text-line short' fontSize='12px' fontWeight='400' color='gray.400'>Control your expenses, check public areas and common resources and services for you and your neighbours</Text>
                            <div className='text-link' >
                                <Text fontWeight='700' color='black' >Read more </Text><Icon as={IoArrowForwardSharp} />
                            </div>

                        </div>

                        <Box className='dashboard__built-for-you-bluecard'>
                            <Center h='100%' className='dashboard__name-icon'>
                                <Icon as={HiHome} />
                                <Text color='white' fontSize='20px' fontWeight='700'>Homey App</Text>
                            </Center>
                        </Box>

                    </Box>
                    <Box className='dashboard__picture-box'>
                        <Box className='dashboard__picture'>
                            <img className='picture' src={housesImg} />
                        </Box>

                    </Box>
                </div>
            </GridItem>
            <GridItem rowSpan={1} colSpan={4} bg='gray.100'>

                <Box>
                    <img src='' />
                </Box>

            </GridItem>
            <GridItem rowSpan={1} colSpan={4} bg='gray.100' />
        </Grid>
    )
}

export default PublicDashboard;