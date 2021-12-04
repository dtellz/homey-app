import { Grid, GridItem } from '@chakra-ui/react'
import LoginForm from "../../components/login-form";
import Footer from "../../components/footer";
import Header from '../../components/header'
import './style.css';

const Login = () => {

    return (

        <Grid h='100vh' templateRows='repeat(6, 1fr)' templateColumns='repeat(7, 1fr)' gap={0}>

            <GridItem className='login__form' rowSpan={5} colSpan={4}>
                <LoginForm />
            </GridItem>

            <GridItem className='login__frame' rowSpan={5} colSpan={3} bg='teal.300' />

            <Header className='test' /> {/**There might be a better location for this header, here it doesnt break the site */}

            <GridItem rowSpan={1} colSpan={6}>
                <Footer />
            </GridItem>
        </Grid>


    )
}

export default Login;