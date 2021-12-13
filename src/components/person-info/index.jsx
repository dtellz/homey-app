import { Text, Box, Center, Divider, Grid, GridItem, Button } from "@chakra-ui/react";
import './style.css'

const PersonInfo = (props) => {
    return (
        <>
            <Divider />
            <Grid
                templateColumns='repeat(5, 1fr)'
                bg='white'>


                <GridItem colSpan={1}>
                    <Box className='personinfo__avatar-name'>
                        <Center w='40px' h='40px' borderRadius='15px' margin='0.5rem'>
                            <img className='personinfo__img' src={props.img} />
                        </Center>
                        <Box>
                            <Text fontWeight='700' color='gray.700'>{props.name}</Text>
                            <Text>{props.email}</Text>
                        </Box>

                    </Box>
                </GridItem>
                <GridItem colSpan={1} className="personinfo__align">
                    <Box>
                        <Text fontWeight='700' color='gray.700'>{props.function}</Text>
                        <Text>{props.description}</Text>
                    </Box>
                </GridItem>



                <GridItem colSpan={1} className="personinfo__align">
                    {props.status === 'Online' ? <Button className='personinfo__status-btn' color='white' bg='green.400'>{props.status}</Button> : <Button className='personinfo__status-btn' color='white' bg='gray.300'>{props.status}</Button>}
                </GridItem>


                <GridItem colSpan={1} className="personinfo__align">
                    <Text fontWeight='700' color='gray.700'>{props.employed}</Text>
                </GridItem>

                <GridItem colSpan={1} className="personinfo__align">
                    <Text fontWeight='500' color='gray.700'>Edit</Text>
                </GridItem>

            </Grid>


        </>


    )
}

export default PersonInfo;

//<Avatar name={props.name} src={props.img} />