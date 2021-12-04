import { Grid, GridItem } from '@chakra-ui/react'
import Header from '../../components/header';
import RegisterForm from '../../components/register-form';

const Register = () => {
    return (
        <Grid h='100vh' templateRows='repeat(2, 1fr)' gap={0}>

            <GridItem bg='teal.300' rowSpan={1}>

            </GridItem>


            <RegisterForm className='test' /> {/**There might be a better location for this header, here it doesnt break the site */}

            <GridItem rowSpan={1}>

            </GridItem>
        </Grid>
    )
}

export default Register;