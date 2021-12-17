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
                            <DashboardHeader />
                        </div>

                        <Box className='private-dash__person-block' bgColor='teal.300' borderRadius='15px' h='200px'>

                            <SimplePerson />

                        </Box>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={4} bg='gray.100'>



                    </GridItem>
                    <GridItem rowSpan={1} colSpan={4} bg='gray.100' className='dashboard__third-box'>

                        <Box className='dashboard__third-row'>
                            <Box className='graph-img__box'>
                                <img className='graph-img' src={graph} />
                            </Box>

                            <div className='third-box__text'>
                                <Text fontWeight='700' color='gray.700' fontSize='18px'>Amount paid by your neighbours</Text>
                                <Text><span style={{ color: 'green', fontWeight: '500' }}>(+23) </span>than last month</Text>
                                <div className='icon__block'>
                                    <Box className='dashboard__userIcon' borderRadius='6px' bgColor='teal.300' w='25px' h='25px'><Icon color='white' h='10px' w='10px' as={IoWalletSharp} /></Box>
                                    <Text>Users</Text>
                                </div>
                                <Text>2,500</Text>
                                <Progress w='66px' h='3px' marginBottom='1rem' colorScheme='teal' value={60} />
                            </div>

                        </Box>
                        <Box className='dashboard__third-row right'>
                            <div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
                                <Text fontWeight='700' color='gray.700' fontSize='18px'>Expenses overview</Text>
                                <Text><span style={{ color: 'green', fontWeight: '500' }}>(+5) more </span>in 2021</Text>
                            </div>

                            <Box className='graph-img__box'>
                                <img className='graph-img' src={expenses} />
                            </Box>

                        </Box>

                    </GridItem>

                    <GridItem className='dashboard__last-row' rowSpan={1} colSpan={4} bg='gray.100'>

                        <ServiceCard type='Area' title='Garden' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet, reiciendis' img='3' />
                        <ServiceCard type='Service' title='Concierge' text=' labore perspiciatis obcaecati accusantium facilis voluptas ex omnis qui ' img='1' />
                        <ServiceCard type='Service' title='Cleaning floors' text='magni eum voluptatum molestiae dolores, sit quas sunt rerum minima!' img='2' />
                        <Center className='dashboard__new-service' w='25%'>
                            <Icon as={IoAdd} />
                            <Text fontWeight='700' fontSize='18px'>Request new service</Text>
                        </Center>

                    </GridItem> </> : transactions ?

                    <>

                        <GridItem rowSpan={1} colSpan={4} bg='gray.100'>
                            <div className='dashboard__header'>
                                <Text fontWeight={700} fontSize={14} margin='1rem' color='gray.700'>Dashboard</Text>
                                <DashboardHeader />
                            </div>

                            <Box className='private-dash__person-block' bgColor='teal.300' borderRadius='15px' h='200px'>

                                <SimplePerson />

                            </Box>
                        </GridItem>



                        <GridItem rowSpan={1} colSpan={4} bg='gray.100' className='transactions__second-row'>

                            <Box bgColor='white' borderRadius='15px' width='60%' margin='1rem'>
                                <Text fontWeight='700' color='gray.700' fontSize='18px' margin='1rem'>Billing information {actualMonth}</Text>

                                <Box h='100px' bg='gray.100' borderRadius='15px' className='transactions__billing-info'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.500'>Oliver Liam</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Flat: </span>Floor 2 Flat 24</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Email Address: </span>oliver@viu.com</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>VAT Number: </span>FRB1234567</Text>
                                    </Box>
                                    <Center margin='1rem'><Text fontWeight='700' color='gray.700'>{actualMonth}, {actualYear}</Text></Center>
                                </Box>
                                <Box h='100px' bg='gray.100' borderRadius='15px' className='transactions__billing-info'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.500'>Oliver Liam</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Flat: </span>Floor 2 Flat 24</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Email Address: </span>oliver@viu.com</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>VAT Number: </span>FRB1234567</Text>
                                    </Box>
                                    <Center margin='1rem'><Text fontWeight='700' color='gray.700'>{actualMonth}, {actualYear}</Text></Center>
                                </Box>
                                <Box h='100px' bg='gray.100' borderRadius='15px' className='transactions__billing-info'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.500'>Oliver Liam</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Flat: </span>Floor 2 Flat 24</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>Email Address: </span>oliver@viu.com</Text>
                                        <Text fontWeight='700' color='gray.500'><span className='transactions__label'>VAT Number: </span>FRB1234567</Text>
                                    </Box>
                                    <Center margin='1rem'><Text fontWeight='700' color='gray.700'>{actualMonth}, {actualYear}</Text></Center>
                                </Box>

                            </Box>
                            <Box bgColor='white' borderRadius='15px' width='40%' margin='1rem'>
                                <Box className='transactions__header'>
                                    <Text fontWeight='700' color='gray.700' fontSize='18px' margin='1rem'>Invoices</Text>

                                    <Button w='155px' borderRadius='15px' colorScheme='teal' variant='outline'>
                                        <Text color='teal.300' fontWeight='500'>VIEW ALL</Text>
                                    </Button>
                                </Box>
                                <Box className='transactions__header'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.700' fontSize='14px'>October, 01, 2021</Text>
                                        <Text>Garden</Text>
                                    </Box>


                                    <Box className='transactions__file-data'>
                                        <Text>180$</Text>
                                        <Icon color='black' h='14px' w='11px' as={FaFileAlt} />
                                        <Text fontWeight='700' color='gray.500'>PDF</Text>
                                    </Box>
                                </Box>
                                <Box className='transactions__header'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.700' fontSize='14px'>October, 10, 2020</Text>
                                        <Text>Swimming pool</Text>
                                    </Box>


                                    <Box className='transactions__file-data'>
                                        <Text>250$</Text>
                                        <Icon color='black' h='14px' w='11px' as={FaFileAlt} />
                                        <Text fontWeight='700' color='gray.500'>PDF</Text>
                                    </Box>
                                </Box>
                                <Box className='transactions__header'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.700' fontSize='14px'>October, 25, 2019</Text>
                                        <Text>Cleaning</Text>
                                    </Box>


                                    <Box className='transactions__file-data'>
                                        <Text>560$</Text>
                                        <Icon color='black' h='14px' w='11px' as={FaFileAlt} />
                                        <Text fontWeight='700' color='gray.500'>PDF</Text>
                                    </Box>
                                </Box>
                                <Box className='transactions__header'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.700' fontSize='14px'>October, 05, 2019</Text>
                                        <Text>Conserge</Text>
                                    </Box>


                                    <Box className='transactions__file-data'>
                                        <Text>120$</Text>
                                        <Icon color='black' h='14px' w='11px' as={FaFileAlt} />
                                        <Text fontWeight='700' color='gray.500'>PDF</Text>
                                    </Box>
                                </Box>
                                <Box className='transactions__header'>
                                    <Box margin='1rem'>
                                        <Text fontWeight='700' color='gray.700' fontSize='14px'>October, 01, 2019</Text>
                                        <Text>Mail services</Text>
                                    </Box>


                                    <Box className='transactions__file-data'>
                                        <Text>300$</Text>
                                        <Icon color='black' h='14px' w='11px' as={FaFileAlt} />
                                        <Text fontWeight='700' color='gray.500'>PDF</Text>
                                    </Box>
                                </Box>
                            </Box>

                        </GridItem>

                        <GridItem rowSpan={1} colSpan={4} bg='gray.100'>

                            <Box className='transactions__issues' bgColor='teal.300' borderRadius='15px' h='200px'>
                                <Text fontSize='32px' color='white' fontWeight='700'>Noticed an issue?</Text>
                                <Button w='155px' borderRadius='15px' bg='white' variant='outline' onClick={handleClick}>
                                    <Text color='gray.700' fontWeight='500'>CONTACT US</Text>
                                </Button>
                            </Box>

                        </GridItem> </> :

                    <>

                        <GridItem rowSpan={1} colSpan={4} bg='gray.100'>

                            <div className='dashboard__header'>
                                <Text fontWeight={700} fontSize={14} margin='1rem' color='gray.700'>Settings</Text>
                                <DashboardHeader />
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