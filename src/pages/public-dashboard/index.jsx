import { Grid, GridItem, Text, Icon } from '@chakra-ui/react'
import { HiHome } from "react-icons/hi";
import { Divider } from '@chakra-ui/react'
import MenuOption from '../../components/menu-option';
import './style.css'
import { useState } from 'react';
import HelpBox from '../../components/help-box';
import InfoBox from '../../components/info-box';

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
            <GridItem rowSpan={1} colSpan={4} bg='gray.100' >
                <div className='dashboard__small-info'>
                    <InfoBox textOne='House expenses' textTwo='$3,000' textThree='+55%' icon='wallet' />
                    <InfoBox textOne="Today's payments" textTwo='300' textThree='+5%' icon='world' />
                    <InfoBox textOne='Transaction to download' textTwo='24' textThree='' icon='note' />
                    <InfoBox textOne='House administrator' textTwo='Esthera Jackson' textThree='' icon='person' />
                </div>

            </GridItem>
            <GridItem rowSpan={1} colSpan={4} bg='gray.100' />
            <GridItem rowSpan={1} colSpan={4} bg='gray.100' />
        </Grid>
    )
}

export default PublicDashboard;