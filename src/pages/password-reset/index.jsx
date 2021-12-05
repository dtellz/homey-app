import { Grid, GridItem } from '@chakra-ui/react'
import LoginForm from "../../components/login-form";
import Footer from "../../components/footer";
import Header from '../../components/header'
import PasswordForm from '../../components/password-form';
import './style.css';

const PasswordReset = () => {

    return (

        <Grid h='100vh' templateRows='repeat(6, 1fr)' templateColumns='repeat(7, 1fr)' gap={0}>

            <GridItem className='password__form' rowSpan={5} colSpan={4}>
                <PasswordForm />
            </GridItem>

            <GridItem className='password__frame' rowSpan={5} colSpan={3} bg='teal.300' />

            <Header /> {/**There might be a better location for this header, here it doesnt break the site */}

            <GridItem rowSpan={1} colSpan={6}>
                <Footer />
            </GridItem>
        </Grid>


    )
}

export default PasswordReset;