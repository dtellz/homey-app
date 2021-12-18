import './style.css'
import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';


const PaymentConfirmation = () => {
    return (
        <Grid
            h='100vh'
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(5, 1fr)'
        >

            <GridItem colSpan={5} bg='papayawhip'>
                <Box className='pay-confirm__first-row'>
                    <Text>Well done!</Text>
                    <Button>GO BACK</Button>
                </Box>
            </GridItem>
            <GridItem colSpan={5} bg='blue' />
            <GridItem colSpan={5} bg='tomato' />
        </Grid>
    )
}

export default PaymentConfirmation;