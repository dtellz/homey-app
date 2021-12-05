import { Grid, GridItem, Text } from '@chakra-ui/react'
import Header from '../../components/header';
import RegisterForm from '../../components/register-form';
import './style.css'
const Register = () => {
    return (
        <Grid h='100vh' templateRows='repeat(2, 1fr)' gap={0} className='register__main-container'>

            <GridItem bg='teal.300' rowSpan={1} className='register__upper-block'>
                <div className='register__text-block'>
                    <Text fontSize='32px' fontWeight='700' color='white' >Ready to start?</Text>
                    <Text fontSize='14px' fontWeight='400' color='white'>Sign up and start using Homey App to manage all your house payments, services and common areas</Text>
                </div>
                <RegisterForm />
            </GridItem>


            <GridItem rowSpan={1}>

            </GridItem>
        </Grid>
    )
}

export default Register;