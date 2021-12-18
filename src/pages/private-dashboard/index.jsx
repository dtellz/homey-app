import { Grid, GridItem, Text, Icon, Box, Center, Button } from '@chakra-ui/react'
import { HiHome } from "react-icons/hi";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Divider } from '@chakra-ui/react'
import MenuOption from '../../components/menu-option';
import './style.css'
import { useState } from 'react';
import HelpBox from '../../components/help-box';
import InfoBox from '../../components/info-box';
import housesImg from '../../assets/houses.png';
import graph from '../../assets/graph.png';
import expenses from '../../assets/expenses.png';
import { IoWalletSharp, IoAdd } from "react-icons/io5";
import { Progress } from '@chakra-ui/react'
import ServiceCard from '../../components/service-card';
import PersonInfo from '../../components/person-info';
import esthera from '../../assets/esthera.png'
import alexa from '../../assets/alexa.png'
import laurent from '../../assets/laurent.png'
import freduardo from '../../assets/freduardo.png'
import daniel from '../../assets/daniel.png'
import mark from '../../assets/mark.png'
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import DashboardHeader from '../../components/dashboard-header';
import SimplePerson from '../../components/simple-person';
import PaymentCard from '../../components/payment-card';
import NotificationBox from '../../components/notification-box'
import RecentTransactions from '../../components/recent-transactions';
import NewPayments from '../../components/new-payments';
import Payments from '../../components/payments';


const PrivateDashboard = () => {
    const [optOne, setOptOne] = useState(true);
    const [optTwo, setOptTwo] = useState(false);
    const [optThree, setOptThree] = useState(false);
    //  THIS THREE STATE VARIABLES SET THE VISIBILITY FOR THE USER AFTER CHOOSING MENU OPTIONS
    const [dashboard, setDashboard] = useState(true);
    const [transactions, setTransactions] = useState(false);
    const [settings, setSettings] = useState(false);
    const actualMonth = new Date().toLocaleString('default', { month: 'long' });
    const actualYear = new Date().getFullYear();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact')
    }
    const handleOptOne = () => {
        if (!optOne) setOptOne(true)
        if (optTwo) setOptTwo(false)
        if (optThree) setOptThree(false)
        //OPTION VISIBILITY MANAGEMENT
        if (!dashboard) {
            setDashboard(true);
            setTransactions(false);
            setSettings(false);
        }
    }
    const handleOptTwo = () => {
        if (!optTwo) setOptTwo(true)
        if (optOne) setOptOne(false)
        if (optThree) setOptThree(false)

        //OPTION VISIBILITY MANAGEMENT
        if (!transactions) {
            setDashboard(false);
            setTransactions(true);
            setSettings(false);
        }
    }
    const handleOptThree = () => {
        if (!optThree) setOptThree(true)
        if (optTwo) setOptTwo(false)
        if (optOne) setOptOne(false)
        //OPTION VISIBILITY MANAGEMENT
        if (!settings) {
            setDashboard(false);
            setTransactions(false);
            setSettings(true);
        }
    }
    return (
        <Grid
            /*  h='100vh' */
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
            bg='gray.100'
        >
            <GridItem className='dashboard__menu-first-block' rowSpan={4} colSpan={1} bg='gray.100' minWidth='250'>
                <div className='dashboard__logo'>
                    <Icon as={HiHome} />
                    <Text fontWeight='700' color='gray.700' fontSize='20px' >Homey App</Text>
                </div>
                <Divider paddingTop='1rem' />

                <div className='dashboard__options'>
                    <MenuOption text='Dashboard' icon='home' select={handleOptOne} active={optOne} />
                    <MenuOption text='New payment(3)' icon='bars' select={handleOptTwo} active={optTwo} />
                    <MenuOption text='Book common area' icon='file' select={handleOptThree} active={optThree} />
                </div>
                <HelpBox className='dashboard__helpbox' />
            </GridItem>


            {/**INIT OF CONDITIONAL RENDERED BLOCKS */}

            {dashboard ?
                <>
                    {/*  <Text>Dashboard</Text> */}
                    <GridItem rowSpan={1} colSpan={4} bg='gray.100'>
                        <div className='dashboard__header'>
                            <Text fontWeight={700} fontSize={14} margin='1rem' color='gray.700'>Dashboard</Text>
                            <DashboardHeader type='public' />
                        </div>

                        <Box className='private-dash__person-block' bgColor='teal.300' borderRadius='15px' h='200px'>

                            <SimplePerson />

                        </Box>
                    </GridItem>

                    <GridItem rowSpan={1} colSpan={4} bg='gray.100' className='private-dash__second-row'>

                        <PaymentCard icon='wallet' textOne='Pending payments (3)' textTwo='$455.00' />
                        <PaymentCard icon='house' textOne='Common areas' textTwo='2 booked' />

                        <Box className='private-dash__second-row-right'>
                            <div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                <Text fontWeight='700' color='gray.700' fontSize='18px'>Expenses overview</Text>
                                <Text><span style={{ color: 'green', fontWeight: '500' }}>(+5) more </span>in 2021</Text>
                            </div>

                            <Box className='graph-img__box'>
                                <img className='graph-img' src={expenses} />
                            </Box>

                        </Box>
                    </GridItem>

                    <GridItem className='private-dash__last-row' rowSpan={1} colSpan={4} bg='gray.100'>

                        <NotificationBox />
                        <RecentTransactions />

                    </GridItem> </> : transactions ?

                    <>

                        <GridItem rowSpan={1} colSpan={4} bg='gray.100'>
                            <div className='dashboard__header'>
                                <Text fontWeight={700} fontSize={14} margin='1rem' color='gray.700'>Dashboard</Text>
                                <DashboardHeader type='public' />
                            </div>

                            <Box className='private-dash__person-block' bgColor='teal.300' borderRadius='15px' h='200px'>

                                <SimplePerson />

                            </Box>
                        </GridItem>



                        <GridItem rowSpan={1} colSpan={4} bg='gray.100' className='private-transactions__second-row'>

                            <NewPayments
                                title='Areas'
                                entryOne_title='Garden'
                                entryTwo_title='Barbecue'
                                entryThree_title='Swimming pool'
                                entryOne_status={true}
                                entryTwo_status={false}
                                entryThree_status={false} />
                            <NewPayments
                                title='Services'
                                entryOne_title='Garden maintenance'
                                entryTwo_title='Cleaning service'
                                entryThree_title='Conserge'
                                entryOne_status={false}
                                entryTwo_status={false}
                                entryThree_status={true} />


                        </GridItem>

                        <GridItem rowSpan={1} colSpan={4} bg='gray.100'>

                            <Payments />

                        </GridItem> </> :

                    <>

                        <GridItem rowSpan={1} colSpan={4} bg='gray.100'>

                            <div className='dashboard__header'>
                                <Text fontWeight={700} fontSize={14} margin='1rem' color='gray.700'>Settings</Text>
                                <DashboardHeader type='public' />
                            </div>

                        </GridItem>
                        <GridItem rowSpan={1} colSpan={4} bg='gray.100' className='dashboard__third-box'>


                        </GridItem>

                        <GridItem className='dashboard__last-row' rowSpan={1} colSpan={4} bg='gray.100'>





                        </GridItem> </>
            }


        </Grid >
    )
}

export default PrivateDashboard;